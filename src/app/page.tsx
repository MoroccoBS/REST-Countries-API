"use client";
import { getData, getDataByRegion, getCountry } from "@/utils/getData";
import Country from "@/app/components/Country";
import DropDown from "./components/DropDown";
import { useCallback, useEffect, useState } from "react";
import { CountryType } from "../../types";
import Search from "./components/Search";
import { useDebounce } from "@uidotdev/usehooks";

const regions = ["Africa", "Asia", "Europe", "North America", "South America"];

export default function Home() {
  const [data, setData] = useState<CountryType[]>([]);
  const [dataPerPage, setDataPerPage] = useState<CountryType[]>([]);
  const [region, setRegion] = useState("");
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<CountryType[]>([]);

  const itemsPerPage = 12;
  const totalPages = Array.from(
    {
      length: Math.ceil(data.length / itemsPerPage),
    },
    (_, index) => index + 1
  );

  const onRegionChange = (region: string) => {
    setPage(0);
    if (region === "") {
      setDataPerPage([]);
      setData([]);
    } else if (region !== "" && data.length !== 0) {
      setDataPerPage([]);
      setData([]);
    }
    setRegion(region);
  };
  const handleGetData = useCallback(
    async (region: string) => {
      if (region === "") {
        const countries = await getData();
        setData(countries);
        setDataPerPage(countries.slice(page, page + itemsPerPage));
      } else {
        const countries = await getDataByRegion(region);
        setData(countries);
        setDataPerPage(countries.slice(page, page + itemsPerPage));
      }
    },
    [page, itemsPerPage]
  );

  useEffect(() => {
    handleGetData(region);
  }, [region, page, handleGetData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  const toUseDebounce = useCallback(() => {
    if (searchQuery === "") {
      setFilteredItems(() => {
        return dataPerPage.filter((item: any) =>
          item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    } else if (searchQuery !== "") {
      setFilteredItems(() => {
        return data.filter((item: any) =>
          item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    }
  }, [searchQuery, data, dataPerPage]);

  const debouncedSearchQuery = useDebounce(toUseDebounce, 500);

  useEffect(() => {
    debouncedSearchQuery;
  }, [searchQuery, debouncedSearchQuery]);

  return (
    <main className="flex flex-col min-h-screen gap-10">
      <div className="flex justify-between sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-6 w-full h-max">
        <Search onSearch={handleChange} value={searchQuery} />
        <DropDown regions={regions} setRegion={onRegionChange} />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1  w-full h-max lg:gap-20 gap-14 place-content-center">
        {filteredItems.map((country: CountryType, index) => (
          <Country country={country} key={country.name.common} index={index} />
        ))}
      </div>
      {searchQuery === "" && (
        <div
          className={`flex flex-wrap place-items-center justify-center items-center w-4/5 gap-4 m-auto`}
        >
          {totalPages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                setTimeout(() => {
                  setPage(index * itemsPerPage);
                }, 500);
              }}
              className={`w-12 h-12 bg-Blue rounded-full flex justify-center items-center ${
                page === index * itemsPerPage && "bg-orange-500"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}
