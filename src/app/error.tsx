"use client";

import Link from "next/link";

function error() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-10 mt-24">
      <h1 className="text-center m-auto text-3xl font-bold">
        Sorry to inform you that there is an error on our side
      </h1>
      <Link className="px-6 py-2 w-max text-lg shadow-xl rounded-md" href={"/"}>
        Return Home
      </Link>
    </div>
  );
}

export default error;
