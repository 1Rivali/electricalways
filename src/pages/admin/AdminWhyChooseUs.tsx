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
  Text,
  useToast,
  VStack,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../services/api-service";

interface WhyChooseUs {
  id: number;
  title: string;
  description: string;
}

const AdminWhyChooseUs: React.FC = () => {
  const [entries, setEntries] = useState<WhyChooseUs[]>([]);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");
  const toast = useToast();

  // Fetch existing entries on component mount
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get(`${baseURL}/whychooseus`);
      setEntries(response.data);
    } catch {
      toast({
        title: "Error",
        description: "Failed to fetch entries",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${baseURL}/whychooseus/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      toast({
        title: "Success",
        description: "Entry deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      fetchEntries(); // Refresh entries after delete
    } catch {
      toast({
        title: "Error",
        description: "Failed to delete entry",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleEntrySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTitle || !newDescription) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      await axios.post(
        `${baseURL}/whychooseus`,
        {
          title: newTitle,
          description: newDescription,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      toast({
        title: "Success",
        description: "Entry added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setNewTitle("");
      setNewDescription("");
      fetchEntries(); // Refresh entries after adding
    } catch {
      toast({
        title: "Error",
        description: "Failed to add entry",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={8} mt={8} px={4} align="center">
      <Heading>Admin Why Choose Us</Heading>

      <Box w="100%" maxW="lg">
        <Heading as="h3" size="lg" mb={4}>
          Add New Entry
        </Heading>
        <Box as="form" onSubmit={handleEntrySubmit} w="100%" mb={8}>
          <FormControl mb={4} isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter title"
            />
          </FormControl>

          <FormControl mb={4} isRequired>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Enter description"
            />
          </FormControl>

          <Button colorScheme="brand" type="submit" width="full">
            Add Entry
          </Button>
        </Box>

        <Divider my={8} />

        <Heading as="h3" size="lg" mb={4}>
          Existing Entries
        </Heading>
        {entries.length > 0 ? (
          <VStack spacing={6} align="stretch">
            {entries.map((entry) => (
              <HStack
                key={entry.id}
                spacing={4}
                w="100%"
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box flex="1">
                  <Text fontWeight="bold">{entry.title}</Text>
                  <Text>{entry.description}</Text>
                </Box>
                <IconButton
                  aria-label="Delete Entry"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => handleDelete(entry.id)}
                />
              </HStack>
            ))}
          </VStack>
        ) : (
          <Text>No entries available</Text>
        )}
      </Box>
    </VStack>
  );
};

export default AdminWhyChooseUs;
