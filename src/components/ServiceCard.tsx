import { Box, BoxProps, Divider, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

export interface ProductData {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
}

interface ServiceCardProps extends BoxProps {
  images: ProductData[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ images, ...rest }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFirstHover, setIsFirstHover] = useState(true);

  const currentImage = images[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enables swipe on desktop with mouse drag
  });

  useEffect(() => {
    let timeout;

    if (isHovered && !showDescription) {
      if (isFirstHover) {
        handleNext();
        setIsFirstHover(false);
      }
      timeout = setTimeout(() => {
        handleNext();
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [isHovered, currentIndex, showDescription]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsFirstHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsFirstHover(false);
  };

  const handleToggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <Box
      {...rest}
      width={"100%"}
      height={"300px"}
      position={"relative"}
      backgroundImage={`url(${currentImage.imageUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      overflow="hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggleDescription}
      cursor="pointer"
      transition="all 0.5s ease-in-out"
      justifyContent={"end"}
      {...handlers} // Attach swipe handlers
    >
      <Flex
        position={"sticky"}
        bottom={0}
        top={"100%"}
        direction="column"
        align="flex-start"
        height={"fit-content"}
        p={4}
        bg="rgba(0, 0, 0, 0.75)"
        transition="all 0.5s ease-in-out"
        justify={showDescription ? "flex-end" : "flex-end"}
        textAlign="start"
        zIndex="10"
      >
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {currentImage.title}
        </Text>
        <Text color={"brand.500"} fontSize="md" fontWeight="medium">
          {currentImage.subtitle}
        </Text>
        <Divider borderColor={"brand.500"} borderWidth={"1px"} width={"50%"} />
        {showDescription && (
          <Box
            color="white"
            textAlign={"start"}
            transition="all 0.5s ease-in-out"
          >
            <Text fontSize="md" color={"white"}>
              {currentImage.description}
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default ServiceCard;
