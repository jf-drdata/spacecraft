import { useQuery } from "@tanstack/react-query";

async function fetchStarshipsData() {
  try {
    const response = await fetch(process.env.EXPO_PUBLIC_API_URL);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error("Something bad happened with the api…");
  }
}

export function useStarships() {
  return useQuery({ queryKey: ["starships"], queryFn: fetchStarshipsData });
}
