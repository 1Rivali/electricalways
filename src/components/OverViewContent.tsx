import { Box, Text } from "@chakra-ui/react";
import React from "react";

const OverviewContent: React.FC = () => (
  <Box textAlign={"start"}>
    <Box
      clipPath={"polygon(0 0, 100% 0, 100% 45%, 0 100%)"}
      padding={"10"}
      borderRadius={"60px"}
      width={"full"}
      height={"600px"}
      backgroundColor={"#31639e"}
    >
      <Text fontSize={{ base: "lg", md: "2xl" }} mb={10} color="white">
        Electrical Ways is a leading manufacturer in Cable Management Systems
        and has been a prominent name in the industry since 2003, with roots and
        experience dating back to 1991. We proudly offer a comprehensive range
        of cable tray solutions to meet the diverse needs of our customers. In
        addition, we specialize in various steel fabrications, providing custom
        solutions to fulfill any requirements for contractors on sites and
        projects.
      </Text>
    </Box>
  </Box>
);

export default OverviewContent;
