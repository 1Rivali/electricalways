import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { assetsBaseURL } from "../services/api-service";
import { Product } from "../types/types";

const ProductCard = ({ product }: { product: Product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalBgColor = useColorModeValue("white", "black");
  const modalDescriptionColor = useColorModeValue("grey", "white");
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      borderColor="brand.500"
      overflow="hidden"
      p={6}
      boxShadow="lg"
      textAlign="start"
      height="400px"
      width="350px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      transition="all 0.3s"
      _hover={{ boxShadow: "2xl", transform: "scale(1.1)" }}
    >
      {/* Product Image */}
      <Image
        src={`${assetsBaseURL}/${product.image}`}
        alt={product.title}
        height="230px"
        objectFit="cover"
        borderRadius="md"
        mb={4}
      />

      {/* Item Details */}
      <Text color="brand.500" fontSize="xl" fontWeight="bold" mb={2}>
        {product.title}
      </Text>
      <Text fontSize="sm" color="gray.500" noOfLines={2} mb={4}>
        {product.description}
      </Text>

      <Button
        backgroundColor="brand.500"
        color="white"
        width="full"
        _hover={{ backgroundColor: "brand.600" }}
        onClick={onOpen}
      >
        View Details
      </Button>

      {/* Modal for Product Details */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent
          bgColor={modalBgColor}
          p={4}
          borderRadius="lg"
          boxShadow="2xl"
          border="1px solid"
          borderColor="brand.500"
        >
          <ModalHeader fontSize="2xl" fontWeight="bold" color={"brand.500"}>
            {product.title}
            {/* <Text>
              Dolore anim elit ullamco aliquip qui qui commodo consequat
              laborum.
            </Text> */}
          </ModalHeader>

          <ModalBody>
            <Flex flexDirection="column" alignItems="start">
              <Image
                src={`${assetsBaseURL}/${product.image}`}
                alt={product.title}
                borderRadius="md"
                mb={6}
                maxHeight="300px"
                objectFit="cover"
              />

              <Text as={"h2"} fontSize={"2xl"} color={"brand.500"}>
                Description:
              </Text>
              <Text
                fontSize="lg"
                color={modalDescriptionColor}
                textAlign="start"
                lineHeight={"2"}
                mb={4}
              >
                {product.description}
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose} width="full">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
