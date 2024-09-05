import { Box, Text, Flex, BoxProps } from "@chakra-ui/react";
import { useState } from "react";

interface ServiceCardProps extends BoxProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string; // Prop for description
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageUrl,
  title,
  subtitle,
  description,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      width={"100%"}
      height={"300px"}
      backgroundImage={`url(${imageUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      position="relative"
      overflow="hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor="pointer"
      {...rest}
    >
      <Flex
        direction="column"
        justify={isHovered ? "flex-start" : "flex-end"}
        align="flex-start"
        p={4}
        h="100%"
        bg={isHovered ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.1)"}
        transition="all 0.5s ease-in-out"
        textAlign={"start"}
      >
        <Text
          fontSize="xl"
          fontWeight={"bold"}
          color="brand.500"
          mb={isHovered ? 2 : 0}
        >
          {subtitle}
        </Text>
        <Box
          w="40px"
          h="2px"
          bg="brand.500"
          mb={isHovered ? 2 : 0}
          transition="margin-bottom 0.3s ease-in-out"
        />
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
      </Flex>

      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        p={4}
        bg="rgba(0, 0, 0, 0.7)"
        color="grey"
        opacity={isHovered ? 1 : 0}
        transform={isHovered ? "translateY(0)" : "translateY(100%)"}
        transition="all 0.3s ease-in-out"
        zIndex="10"
        textAlign={"start"}
      >
        <Text fontSize="xl">{description}</Text>
      </Box>
    </Box>
  );
};

export default ServiceCard;
