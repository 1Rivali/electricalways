import { Box, Button, Center, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { saudiMapStates } from "../constants/data";
import PartnersCircle from "./PartnersCircle";
import logo from "../assets/logo.png";
export default function PartnersMap() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(0);

  useEffect(() => {
    if (selectedIndex === null) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * saudiMapStates.length);

        setAnimatingIndex(randomIndex);
      }, 4000);

      return () => clearInterval(interval);
    }
    return () => {};
  }, [animatingIndex, selectedIndex]);

  const [viewBox, setViewBox] = useState("0 0 1000 824");
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePathClick = (index: number) => {
    const clickedPath = document.getElementById(saudiMapStates[index].id);
    if (clickedPath) {
      // @ts-expect-error 231
      const bbox = clickedPath.getBBox();

      const padding = 20;
      const newViewBox = `${bbox.x - padding} ${bbox.y - padding} ${
        bbox.width + 2 * padding
      } ${bbox.height + 2 * padding}`;
      setAnimatingIndex(null);
      setViewBox(newViewBox);
      setSelectedIndex(index);
      setIsZoomed(true);
    }
  };

  const handleResetZoom = () => {
    setViewBox("0 0 1000 824");
    setSelectedIndex(null);
    setIsZoomed(false);
  };

  return (
    <HStack>
      <Box
        // height={isMobile ? "40vh" : "80vh"}
        height={"100vh"}
        width={"50%"}
        position="relative"
        mb={20}
      >
        <svg
          height="100%"
          width="100%"
          fill="#31639e"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          version="1.1"
          viewBox={viewBox}
          style={{
            transition: isZoomed ? "viewBox 1s ease" : "viewBox 0.5s ease",
          }}
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
                  selectedIndex === index || animatingIndex === index
                    ? "brightness(0.8)"
                    : "brightness(0.5)"
                }
                onClick={() => {
                  if (selectedIndex === index) {
                    return handleResetZoom();
                  }
                  return handlePathClick(index);
                }}
                style={{ transition: "filter 1s ease" }}
              />
            ))}
          </g>
          {/* Place images on top of the selected path */}
        </svg>
        {!selectedIndex &&
          saudiMapStates.map(
            (state, idx) =>
              animatingIndex === idx && (
                <PartnersCircle
                  key={idx}
                  src={logo}
                  zIndex={10}
                  // size={{ base: "32px", md: "4vw" }}
                  size={"4vw"}
                  position={"absolute"}
                  {...state.intialAnimationPos}
                />
              )
          )}
        {isZoomed &&
          selectedIndex !== null &&
          saudiMapStates[selectedIndex].images.map((img, idx) => {
            return (
              <PartnersCircle
                key={idx}
                src={img}
                zIndex={10}
                size={{ base: "32px", md: "100px" }}
                position={"absolute"}
                {...saudiMapStates[selectedIndex].pos[idx]}
              />
            );
          })}
        {isZoomed && selectedIndex !== null && (
          <>
            {/* Reset Zoom Button */}
            <Button
              onClick={handleResetZoom}
              position="absolute"
              bottom="20px"
              right="20px"
              bg="#31639e"
              color="white"
              _hover={{ bg: "#274d7a" }}
              shadow="lg"
              borderRadius="md"
            >
              Reset Zoom
            </Button>
          </>
        )}
      </Box>
    </HStack>
  );
}
