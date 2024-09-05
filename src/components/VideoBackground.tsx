// src/components/VideoBackground.tsx
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import contr1 from "../assets/contractors-logos/1.png";
import contr10 from "../assets/contractors-logos/10.png";
import contr11 from "../assets/contractors-logos/11.png";
import contr12 from "../assets/contractors-logos/12.png";
import contr13 from "../assets/contractors-logos/13.png";
import contr14 from "../assets/contractors-logos/14.png";
import contr15 from "../assets/contractors-logos/15.png";
import contr16 from "../assets/contractors-logos/16.png";
import contr17 from "../assets/contractors-logos/17.png";
import contr18 from "../assets/contractors-logos/18.png";
import contr19 from "../assets/contractors-logos/19.png";
import contr2 from "../assets/contractors-logos/2.png";
import contr20 from "../assets/contractors-logos/20.png";
import contr21 from "../assets/contractors-logos/21.png";
import contr22 from "../assets/contractors-logos/22.png";
import contr23 from "../assets/contractors-logos/23.png";
import contr24 from "../assets/contractors-logos/24.png";
import contr25 from "../assets/contractors-logos/25.png";
import contr26 from "../assets/contractors-logos/26.png";
import contr27 from "../assets/contractors-logos/27.png";
import contr28 from "../assets/contractors-logos/28.png";
import contr29 from "../assets/contractors-logos/29.png";
import contr3 from "../assets/contractors-logos/3.png";
import contr30 from "../assets/contractors-logos/30.png";
import contr4 from "../assets/contractors-logos/4.png";
import contr5 from "../assets/contractors-logos/5.png";
import contr6 from "../assets/contractors-logos/6.png";
import contr7 from "../assets/contractors-logos/7.png";
import contr8 from "../assets/contractors-logos/8.png";
import contr9 from "../assets/contractors-logos/9.png";
import backgroundVideo from "../assets/home-background-video.mp4";
import { blackWithAlpha, whiteWithAlpha } from "../constants/colors";
const images = [
  contr1,
  contr2,
  contr3,
  contr4,
  contr5,
  contr6,
  contr7,
  contr8,
  contr9,
  contr10,
  contr11,
  contr12,
  contr13,
  contr14,
  contr15,
  contr16,
  contr17,
  contr18,
  contr19,
  contr20,
  contr21,
  contr22,
  contr23,
  contr24,
  contr25,
  contr26,
  contr27,
  contr28,
  contr29,
  contr30,
];
const VideoBackground: React.FC = () => {
  // const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "7xl" });

  return (
    <Box position="relative" width="100%" height="85vh" overflow="hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "15px", // Adjust the radius as needed
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
        borderRadius={"20px"}
        p={4}
      >
        <Text fontSize={textSize} textAlign={"start"} fontWeight="bold" p={4}>
          ELECTRICAL WAYS
        </Text>
      </Box> */}

      <Box
        position={"absolute"}
        bottom="0%"
        left="0"
        py={5}
        width={"100%"}
        backgroundColor={blackWithAlpha}
      >
        <Marquee style={{ width: "full" }}>
          {images.map((src, index) => (
            <Image
              backgroundColor={whiteWithAlpha}
              borderRadius={"full"}
              p={2}
              mr={"5"}
              key={index}
              src={src}
              boxSize={"65px"}
              objectFit="fill"
              alt={`Image ${index + 1}`}
            />
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default VideoBackground;
