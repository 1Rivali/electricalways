import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  Select,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useCategories from "../../hooks/useCategories";
import { Product } from "../../types/types";
import { assetsBaseURL, baseURL } from "../../services/api-service";

const AdminProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    category_id: "",
  });
  const [productIdToEdit, setProductIdToEdit] = useState<number | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const { data: categories } = useCategories();
  const toast = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseURL}/products`);
      setProducts(response.data);
    } catch {
      toast({
        title: "Error",
        description: "Failed to fetch products",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Handle image preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(e.target.files[0]);
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Handle form submission for creating or updating a product
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", newProduct.title);
    formData.append("description", newProduct.description);
    formData.append("category_id", newProduct.category_id);
    if (newImage) formData.append("image", newImage);

    try {
      if (productIdToEdit) {
        // Update product
        await axios.put(`${baseURL}/products/${productIdToEdit}`, formData, {
          headers: { Authorization: localStorage.getItem("token") || "" },
        });
        toast({
          title: "Success",
          description: "Product updated successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Create new product
        await axios.post(`${baseURL}/products`, formData, {
          headers: { Authorization: localStorage.getItem("token") || "" },
        });
        toast({
          title: "Success",
          description: "Product created successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }

      // Clear form and refresh product list
      setNewProduct({ title: "", description: "", category_id: "" });
      setNewImage(null);
      setPreviewImage(null);
      setProductIdToEdit(null);
      fetchProducts();
    } catch {
      toast({
        title: "Error",
        description: "Failed to save product",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Handle delete product
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${baseURL}/products/${id}`, {
        headers: { Authorization: localStorage.getItem("token") || "" },
      });
      toast({
        title: "Success",
        description: "Product deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      fetchProducts(); // Refresh product list
    } catch {
      toast({
        title: "Error",
        description: "Failed to delete product",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Handle edit button click
  // const handleEdit = (product: Product) => {
  //   setProductIdToEdit(product.id);
  //   setNewProduct({
  //     title: product.title,
  //     description: product.description,
  //     category_id: product.category_id.toString(),
  //   });
  //   setPreviewImage(
  //     product.image ? `${assetsBaseURL}/${product.image}` : null
  //   );
  // };

  return (
    <VStack spacing={8} mt={8} px={4}>
      {/* Form to create or update product */}
      <Box as="form" onSubmit={handleFormSubmit} w="100%" maxW="md">
        <FormControl mb={4} isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
            placeholder="Enter product title"
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            placeholder="Enter product description"
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Category ID</FormLabel>
          {/* <Input
            type="text"
            value={newProduct.category_id}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category_id: e.target.value })
            }
            placeholder="Enter category ID"
          /> */}
          <Select
            name="tag"
            value={newProduct.category_id}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category_id: e.target.value })
            }
            placeholder="Enter category ID"
            _placeholder={{
              color: "white",
              opacity: 0.4,
            }}
          >
            {categories &&
              categories.map((category) => (
                <option
                  style={{ color: "black" }}
                  key={category.id}
                  value={category.id}
                >
                  {category.category_name}
                </option>
              ))}
          </Select>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Image</FormLabel>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          {previewImage && (
            <Image
              src={previewImage}
              alt="Product preview"
              boxSize="100px"
              objectFit="cover"
              mt={2}
            />
          )}
        </FormControl>

        <Button colorScheme="brand" type="submit" width="full">
          {productIdToEdit ? "Update Product" : "Create Product"}
        </Button>
      </Box>

      {/* List of products */}
      <Box w="100%" maxW="lg">
        <Text fontSize="2xl" mb={4}>
          Product List
        </Text>
        {products.length > 0 ? (
          <VStack spacing={4}>
            {products.map((product) => (
              <HStack
                key={product.id}
                spacing={4}
                w="100%"
                borderWidth="1px"
                borderRadius="lg"
                p={4}
              >
                {product.image && (
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={`${assetsBaseURL}/${product.image}`}
                    alt={product.title}
                    borderRadius="md"
                  />
                )}
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">{product.title}</Text>
                  <Text>{product.description}</Text>
                  <Text fontSize="sm">
                    Category: {product.category.category_name}
                  </Text>
                </VStack>
                {/* <IconButton
                  aria-label="Edit Product"
                  icon={<EditIcon />}
                  onClick={() => handleEdit(product)}
                /> */}
                <IconButton
                  aria-label="Delete Product"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => handleDelete(product.id)}
                />
              </HStack>
            ))}
          </VStack>
        ) : (
          <Text>No products available</Text>
        )}
      </Box>
    </VStack>
  );
};

export default AdminProducts;
