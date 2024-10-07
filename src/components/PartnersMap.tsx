import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { saudiMapStates } from "../constants/data";
import PartnersCircle from "./PartnersCircle";

export default function PartnersMap() {
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * saudiMapStates.length);
      setAnimatingIndex(randomIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [animatingIndex]);

  // Calculate the positions for circular layout
  const getCircularPosition = (
    index: number,
    total: number,
    radius: number
  ) => {
    const angle = (index / total) * 2 * Math.PI; // Calculate the angle for each image
    const x = radius * Math.cos(angle); // X position based on angle
    const y = radius * Math.sin(angle); // Y position based on angle
    return { x, y };
  };

  return (
    <HStack>
      {/* Map SVG Section */}
      <Box height={"100vh"} width={"70%"} position="relative" mb={20}>
        <svg
          height="100%"
          width="100%"
          fill="#31639e"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          version="1.1"
          viewBox="0 0 1000 824"
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
                  animatingIndex === index
                    ? "brightness(0.8)"
                    : "brightness(0.5)"
                }
                style={{ transition: "filter 1s ease" }}
              />
            ))}
          </g>
        </svg>
        {saudiMapStates.map(
          (state, idx) =>
            animatingIndex === idx && (
              <PartnersCircle
                key={idx}
                src={logo}
                zIndex={10}
                size={"3.5vw"}
                position={"absolute"}
                {...state.intialAnimationPos}
              />
            )
        )}
      </Box>

      {/* Creative Image Bubble Layout */}
      <VStack width={"50%"} position="relative" height={"100vh"}>
        {animatingIndex && (
          <Heading textAlign={"center"} position={"absolute"} top={0}>
            {saudiMapStates[animatingIndex].name}
          </Heading>
        )}
        {animatingIndex !== null &&
          saudiMapStates[animatingIndex].images.map((img, idx) => {
            const { x, y } = getCircularPosition(
              idx,
              saudiMapStates[animatingIndex].images.length,
              150
            ); // 150px radius

            return (
              <PartnersCircle
                key={idx}
                src={img}
                zIndex={10}
                size={{ base: "32px", md: "100px" }}
                position="absolute"
                top={`calc(50% + ${y}px)`} // Positioning relative to the center
                left={`calc(50% + ${x}px)`} // Centered positioning
                transition="all 0.5s ease"
              />
            );
          })}
      </VStack>
    </HStack>
  );
}
