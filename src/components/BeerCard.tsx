import { Beer } from "@/types";
import { Card, CardBody, Text, VStack } from "@chakra-ui/react";
import React from "react";

export interface BeerProps {
  beers: Beer[] | null;
}

function BeerCard(props) {
  const { item } = props;

  return (
    <Card>
      <CardBody>
        <VStack>
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default BeerCard;
