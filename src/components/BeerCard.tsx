import { Beer } from "@/types";
import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import React from "react";

export interface BeerProps {
  beers: Beer[] | null;
}

function BeerCard() {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardBody>
        <Text>Bye</Text>
      </CardBody>
    </Card>
  );
}

export default BeerCard;
