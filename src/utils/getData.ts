export async function getData() {
  const response = await fetch("https://restcountries.com/v3.1/all", {
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function getDataByRegion(region: string) {
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}`,
    {
      cache: "force-cache",
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function getCountry(name: string) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
export async function getCountryBorders(name: string) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
