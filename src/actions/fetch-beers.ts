"use server";
import { Beer } from "./../types/index";

export async function fetchBeers(page: number) {
  const perpage = 24;
  const apiUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perpage}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data as Beer;
  } catch (error) {
    console.log("Error fetching data... ", error);

    return null;
  }
}
