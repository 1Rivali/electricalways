import { Heading } from "@chakra-ui/react";
import React from "react";
interface SectionHeadingProps {
  text: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => (
  <>
    <Heading
      textShadow="0 0 5px #31639e, 0 0 10px #31639e, 0 0 15px #31639e, 0 0 20px #31639e, 0 0 25px #31639e"
      as={"h1"}
      fontSize={"6xl"}
    >
      {text}
    </Heading>
  </>
);

export default SectionHeading;
