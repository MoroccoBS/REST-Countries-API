import Image from "next/image";
import { CountryType } from "../../../types";
import { motion } from "framer-motion";
import Link from "next/link";
interface CountryProps {
  country: CountryType;
  index: number;
}

function Country({ country, index }: CountryProps) {
  return (
    <Link href={`/country/${country.name.common}`}>
      <motion.div
        initial={{ opacity: 0, scaleY: 0.9 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{
          duration: 0.05,
          delay: index * 0.05,
          type: "spring",
          stiffness: 120,
          mass: 0.5,
          damping: 10,
        }}
        className="w-full h-full bg-Blue flex flex-col"
      >
        <Image
          src={country.flags.svg || country.flags.png}
          alt={country.flags.alt || country.name.common}
          width={300}
          height={200}
          className="object-cover w-full h-1/2"
          loading="lazy"
          placeholder="empty"
        />
        <div className="p-6 flex flex-col mb-4">
          <h1 className="my-4 text-2xl font-semibold">{country.name.common}</h1>
          <h1>
            Population:{" "}
            <span className="text-white/50">{country.population}</span>
          </h1>
          <h1>Region: {country.region}</h1>
          <h1>Capital: {country.capital}</h1>
        </div>
      </motion.div>
    </Link>
  );
}

export default Country;
