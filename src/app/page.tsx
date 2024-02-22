"use client";

import { fetchBeers } from "@/actions/fetch-beers";
import BeerCard from "@/components/BeerCard";
import { Beer } from "@/types";
import { Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Home() {
  const [beers, setBeers] = useState<Beer[] | null>(null);

  useEffect(() => {
    const init = async () => {
      await fetchBeers(1).then((data) => {
        setBeers(data);
      });
    };

    init();
  }, []);

  return (
    <VStack w={"100%"}>
      <Heading mt={8}>Example Infinite Scroll</Heading>
      {beers ? (
        beers.map(() => {
          return <BeerCard />;
        })
      ) : (
        <></>
      )}
    </VStack>
  );
}

export default Home;
