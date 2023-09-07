import Country from "@/app/components/Country";
import { getCountry, getCountryBorders } from "@/utils/getData";
import React from "react";
import { CountryType } from "../../../../types";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";

interface Props {
  params: { country: string };
}

interface Currency {
  name: string;
}

export default async function Page({ params }: Props) {
  const countryData = await getCountry(params.country);
  const currencies: Currency[] = Object.entries(countryData[0].currencies).map(
    ([key, value]) => value as Currency
  );

  const languages = Object.entries(countryData[0].languages).map(
    ([key, value]) => value as string
  );

  return (
    <div className="min-h-screen">
      <Link
        href={"/"}
        className="px-6 py-2 w-max items-center text-lg shadow-xl flex gap-4"
      >
        <AiOutlineArrowLeft />
        <h1>Back</h1>
      </Link>
      <div className="flex flex-col gap-20 mt-14 items-center lg:flex-row">
        <Image
          src={countryData[0].flags.svg || countryData[0].flags.png}
          alt={countryData[0].flags.alt || countryData[0].name.common}
          width={300}
          height={200}
          className="object-cover sm:w-1/2 w-full h-1/2"
        />
        <div className="sm:w-1/2 w-full h-max flex gap-10 flex-col">
          <h1 className="text-3xl font-extrabold">
            {countryData[0].name.common}
          </h1>
          <div className="flex w-full sm:flex-row flex-col sm:gap-0 gap-10">
            <div className="flex flex-col sm:w-1/2 w-full">
              <h2 className="w-full bg-red">
                Native Name:{" "}
                <span className="text-Text/50 font-semibold text-xl">
                  {countryData[0].name.common}
                </span>
              </h2>
              <h2>
                Population:{" "}
                <span className="text-Text/50 font-semibold text-xl">
                  {countryData[0].population}
                </span>
              </h2>
              <h2>
                Region:{" "}
                <span className="text-Text/50 font-semibold text-xl">
                  {countryData[0].region}
                </span>
              </h2>
              <h2>
                SubRegion:{" "}
                <span className="text-Text/50 font-semibold text-xl">
                  {countryData[0].subregion}
                </span>
              </h2>
              <h2>
                Capital:{" "}
                <span className="text-Text/50 font-semibold text-xl">
                  {countryData[0].capital}{" "}
                </span>
              </h2>
            </div>
            <div className="flex flex-col sm:w-1/2 w-full">
              <h2>
                Top Level Domain:{" "}
                <span className="text-Text/50 font-semibold text-xl">
                  {countryData[0].tld[0]}
                </span>
              </h2>
              <h2>
                Currencies:{" "}
                <span className="text-Text/50 font-semibold text-xl">
                  {currencies[0].name}
                </span>
              </h2>
              <h2>
                Languages:{" "}
                {languages.map((language, index) => (
                  <span
                    className="text-Text/50 font-semibold text-xl"
                    key={language}
                  >
                    {index === 0 ? `${language}` : `, ${language}`}
                  </span>
                ))}
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            Border Countries:
            {countryData[0].borders !== undefined ? (
              countryData[0].borders.map((border: string, index: number) => (
                <h2
                  className="px-8 py-2 w-max shadow-xl bg-DarkBlue text-sm rounded-md"
                  key={index}
                >
                  {border}
                </h2>
              ))
            ) : (
              <span className="text-Text/50"> Probably an Island</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
