import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../services/api-service";

const AdminSlideshow: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [altText, setAltText] = useState<string>("");
  const toast = useToast();

  // Fetch footer images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${baseURL}/footer-images`);
      setImages(response.data);
    } catch {
      toast({
        title: "Error",
        description: "Failed to fetch images",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${baseURL}/footer-images/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      toast({
        title: "Success",
        description: "Image deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // Refresh images after delete
      fetchImages();
    } catch {
      toast({
        title: "Error",
        description: "Failed to delete image",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleImageUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newImage) {
      toast({
        title: "Error",
        description: "Please select an image",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("image", newImage);
    formData.append("alt_text", altText);

    try {
      await axios.post(`${baseURL}/footer-images`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      toast({
        title: "Success",
        description: "Image uploaded successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setNewImage(null);
      setAltText("");
      setPreview(null); // Clear the preview after upload
      fetchImages(); // Refresh image list
    } catch {
      toast({
        title: "Error",
        description: "Failed to upload image",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setNewImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file)); // Set image preview
    } else {
      setPreview(null); // Clear preview if no file is selected
    }
  };

  return (
    <VStack spacing={8} mt={8} px={4} align="center">
      <Heading>Admin Slideshow</Heading>

      <Box w="100%" maxW="lg">
        <Heading as="h3" size="lg" mb={4}>
          Upload New Footer Image
        </Heading>
        <Box as="form" onSubmit={handleImageUpload} w="100%" mb={8}>
          <FormControl mb={4} isRequired>
            <FormLabel>Select Image</FormLabel>
            <Input type="file" accept="image/*" onChange={handleImageChange} />
          </FormControl>

          {preview && (
            <Box mb={4}>
              <Text mb={2}>Image Preview:</Text>
              <Image
                src={preview}
                alt="Preview"
                maxW="300px"
                maxH="200px"
                borderRadius="md"
                objectFit="cover"
                boxShadow="md"
              />
            </Box>
          )}

          <FormControl mb={4}>
            <FormLabel>Alt Text (optional)</FormLabel>
            <Input
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Enter alt text for the image"
            />
          </FormControl>

          <Button colorScheme="brand" type="submit" width="full">
            Upload Image
          </Button>
        </Box>

        <Divider my={8} />

        <Heading as="h3" size="lg" mb={4}>
          Existing Footer Images
        </Heading>
        {images.length > 0 ? (
          <VStack spacing={6} align="stretch">
            {images.map((image) => (
              <HStack
                key={image.id}
                spacing={4}
                w="100%"
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                alignItems="center"
                justifyContent="space-between"
              >
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  src={image.image_path}
                  alt={image.alt_text || "Footer image"}
                  borderRadius="md"
                />
                <Box flex="1">
                  <Text fontWeight="bold">
                    {image.alt_text || "No alt text provided"}
                  </Text>
                </Box>
                <IconButton
                  aria-label="Delete Image"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => handleDelete(image.id)}
                />
              </HStack>
            ))}
          </VStack>
        ) : (
          <Text>No images available</Text>
        )}
      </Box>
    </VStack>
  );
};

export default AdminSlideshow;
