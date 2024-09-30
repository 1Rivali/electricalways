import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import useCategories from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";
import { assetsBaseURL } from "../services/api-service";

export default function ProductsList() {
  const { id } = useParams<{ id: string }>();
  const [filterCat, setFilterCat] = useState(id);
  const { data } = useProducts(filterCat);
  const { data: categories } = useCategories();

  const isMobile = useBreakpointValue({ base: true, md: false }); // Determines mobile or desktop
  const categoriesHoverBgColor = useColorModeValue(
    "secondary.100",
    "secondary.500"
  );
  return (
    <Stack direction={isMobile ? "column" : "row"} mt={"2%"}>
      {/* Categories Section */}
      {isMobile ? (
        // Mobile: Horizontal Scrollable Categories
        <Box overflowX="auto" pb={4} mb={4}>
          <Flex gap={4} px={2} direction="row">
            {categories.map((category, idx) => (
              <Box
                key={idx}
                cursor="pointer"
                transition="transform 0.3s, box-shadow 0.3s"
                // transform={
                //   Number(filterCat) === category.id ? "scale(1.05)" : ""
                // }
                boxShadow={Number(filterCat) === category.id ? "xl" : "md"}
                onClick={() => setFilterCat(category.id.toString())}
                p={4}
                borderRadius={"lg"}
                borderWidth={Number(filterCat) === category.id ? 2 : 1}
                borderColor={
                  // Number(filterCat) === category.id ? "brand.500" : "gray.200"
                  "brand.500"
                }
                _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                // _active={{ transform: "scale(1.01)", boxShadow: "2xl" }}
                width={"120px"}
                minWidth={"120px"}
                textAlign="center"
                bg={
                  Number(filterCat) === category.id
                    ? categoriesHoverBgColor
                    : ""
                }
              >
                <Image
                  src={`${assetsBaseURL}/${category.image}`}
                  borderRadius={"full"}
                  width={"60px"}
                  objectFit={"contain"}
                  shadow={"2xl"}
                  mx="auto"
                  mb={2}
                />
                <Text
                  color={
                    Number(filterCat) === category.id ? "brand.500" : "gray.600"
                  }
                  fontWeight={
                    Number(filterCat) === category.id ? "bold" : "normal"
                  }
                  fontSize={"sm"}
                >
                  {category.category_name}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      ) : (
        // Desktop: Fixed Sidebar
        <SimpleGrid
          columns={1}
          height={"80vh"}
          width={"15%"}
          spacing={2}
          position={"fixed"}
          borderRight={"1px solid"}
          borderColor={"brand.500"}
          overflowY={"scroll"}
        >
          {categories.map((category, idx) => (
            <HStack
              key={idx}
              p={5}
              onClick={() => setFilterCat(category.id.toString())}
              backgroundColor={
                Number(filterCat) === category.id && categoriesHoverBgColor
              }
              _hover={{
                cursor: "pointer",
                backgroundColor: categoriesHoverBgColor,
                p: "5",
              }}
            >
              <Image
                src={`${assetsBaseURL}/${category.image}`}
                borderRadius={"full"}
                width={"20%"}
                objectFit={"contain"}
                shadow={"2xl"}
              />
              <Text
                color={Number(filterCat) === category.id ? "brand.500" : ""}
                fontWeight={Number(filterCat) === category.id ? "bold" : ""}
              >
                {category.category_name}
              </Text>
            </HStack>
          ))}
        </SimpleGrid>
      )}

      {/* Products Section */}
      <SimpleGrid
        width={"full"}
        ml={isMobile ? "0" : "21%"}
        spacing={10}
        columns={[1, 1, 2, 4]}
      >
        {data.map((product, idx) => (
          <Center>
            <ProductCard key={idx} product={product} />
          </Center>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
