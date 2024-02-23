"use client";

import { fetchBeers } from "@/actions/fetch-beers";
import BeerCard from "@/components/BeerCard";
import { Beer } from "@/types";
import { Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Home() {
  const [beers, setBeers] = useState<Beer[] | null>(null);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  useEffect(() => {
    const init = async () => {
      await fetchBeers(page).then((data) => {
        setBeers(data);
      });
    };

    init();
  }, []);

  useEffect(() => {
    if (inView) {
      handleLoadMoreData();
    }
  }, [inView]);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleLoadMoreData = async () => {
    await delay(1000);
    const nextPage = page + 1;
    await fetchBeers(nextPage).then((data) => {
      setPage(page + 1);
      setBeers((prevProducts) => [...prevProducts, ...data]);
    });
  };

  return (
    <VStack w={"100%"}>
      <Heading mt={8}>Example Infinite Scroll</Heading>
      {beers ? (
        beers.map((item: Beer) => {
          return <BeerCard item={item} />;
        })
      ) : (
        <></>
      )}
      <div ref={ref}></div>
    </VStack>
  );
}

export default Home;
