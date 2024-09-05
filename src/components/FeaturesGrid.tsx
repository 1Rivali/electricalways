import { SimpleGrid, VStack, Text } from "@chakra-ui/react";
import React from "react";

const FeaturesGrid: React.FC = () => (
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
    <VStack>
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="bold"
        color="white"
      >
        State-of-The-Art Factory
      </Text>
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="bold"
        color="white"
      >
        High Quality Assurance
      </Text>
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="bold"
        color="white"
      >
        Strong Market Presence
      </Text>
    </VStack>
    <VStack>
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="bold"
        color="white"
      >
        Cutting Edge Technology
      </Text>
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="bold"
        color="white"
      >
        Competitive Pricing
      </Text>
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="bold"
        color="white"
      >
        Value Guaranteed
      </Text>
    </VStack>
  </SimpleGrid>
);

export default FeaturesGrid;
