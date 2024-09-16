import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Image,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { circularImages, saudiMapStates } from "../constants/data";

export default function PartnersMap() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const clientsBoxColor = useColorModeValue(
    "rgba(0,0,0,0.6)",
    "rgba(255,255,255,0.6)"
  );

  const fadeIn = keyframes`
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  `;

  return (
    <HStack width={"full"} position="relative">
      {/* SVG Map */}
      <Box minHeight="100vh" width="full">
        <svg
          fill="#31639e"
          height="824"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".5"
          version="1.2"
          width="1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="features">
            {saudiMapStates.map((state, index) => (
              <path
                key={state.id}
                d={state.d}
                id={state.id}
                name={state.name}
                filter={
                  hoveredIndex === null || hoveredIndex === index
                    ? "brightness(0.8)"
                    : "brightness(0.3)"
                }
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ transition: "filter 0.3s ease" }}
              ></path>
            ))}
          </g>
        </svg>
      </Box>

      {/* Centered Grid box with circular images and background of brand.500 */}
      <Container
        width={"full"}
        minHeight={"200px"}
        border={"1px solid #31639e"}
        borderRadius="md"
        p={4}
        boxShadow="lg"
        backgroundColor={clientsBoxColor} // Custom brand color
        display={hoveredIndex !== null ? "block" : "none"}
        animation={`${fadeIn} 0.5s ease forwards`}
        position="absolute"
        top="10%" // Center vertically
        left="70%" // Center horizontally
        transform="translate(-50%, -50%)" // Ensure it's perfectly centered
      >
        <SimpleGrid columns={[2, 3, 4]} spacing={[4, 6, 10]} minWidth={"full"}>
          {circularImages.map((img, idx) => (
            <Box
              key={idx}
              backgroundColor={"secondary.500"}
              boxSize="75px"
              borderRadius="full"
              overflow="hidden"
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)" // Subtle shadow
              transition="transform 0.5s ease, box-shadow 0.5s ease"
              _hover={{
                transform: "scale(1.1)",
                boxShadow:
                  "0px 10px 15px rgba(0, 0, 0, 0.2), 0px 4px 6px rgba(0, 0, 0, 0.1)", // Stronger shadow on hover
              }}
            >
              <Image
                src={img}
                alt={`Partner ${idx + 1}`}
                objectFit="contain"
                width="full"
                height="full"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </HStack>
  );
}
