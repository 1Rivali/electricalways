import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import { assetsBaseURL } from "../services/api-service";
interface ProductCategoryProps {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const CategoryCard: React.FC<ProductCategoryProps> = ({
  id,
  icon,
  title,
  description,
}) => {
  const navigate = useNavigate();
  return (
    <Stack
      flexDirection={{ base: "column", md: "column" }}
      spacing={{ base: 6, md: 10 }}
      justify="center"
      alignItems="center"
      textAlign="center"
      border={"1px solid"}
      borderColor={"brand.500"}
      p={5}
    >
      <Image
        src={icon}
        width={{ base: "full", md: "85px" }}
        height={{ base: "full", md: "85px" }}
        objectFit="contain"
      />
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"space-between"}
        textAlign={{ base: "center", md: "center" }}
      >
        <Heading as="h3" size={{ base: "sm", md: "md" }}>
          {title}
        </Heading>
        <Text color="grey" fontSize={{ base: "sm", md: "md" }}>
          {description}
        </Text>
      </Box>

      <Button
        backgroundColor={"brand.500"}
        color={"white"}
        onClick={() => navigate(`/category/${id}/products`)}
        fontSize={{ base: "14px", lg: "" }}
        p={{ base: "2" }}
      >
        View Products
      </Button>
    </Stack>
  );
};

const ProductCategoriesGrid: React.FC = () => {
  const { data, isLoading, error } = useCategories();
  if (isLoading) {
    return (
      <Center height={"70vh"}>
        <Spinner />
      </Center>
    );
  }
  if (error) {
    return (
      <Center>
        <Heading>Something Wrong Happend</Heading>
      </Center>
    );
  }
  return (
    <Box py={8}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 4 }} spacing={10}>
        {data.map((category, idx) => (
          <CategoryCard
            key={idx}
            id={category.id}
            icon={`${assetsBaseURL}/${category.image}`}
            title={category.category_name}
            description={category.description}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductCategoriesGrid;
