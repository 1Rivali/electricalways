import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Spinner,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  Flex,
  Divider,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import { baseURL } from "../../services/api-service";
import {
  FaEnvelope,
  FaTrash,
  FaUser,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

interface ContactUs {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const AdminContactUsList = () => {
  const [contacts, setContacts] = useState<ContactUs[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedContacts, setExpandedContacts] = useState<{
    [key: number]: boolean;
  }>({});

  const bgColor = useColorModeValue("gray.100", "black");
  const textColor = useColorModeValue("gray.800", "white");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${baseURL}/contactus`, {
          headers: { Authorization: localStorage.getItem("token") },
        });
        setContacts(response.data);

        // Initialize expanded state for each contact
        const expandedState = response.data.reduce(
          (acc: { [key: number]: boolean }, contact: ContactUs) => {
            acc[contact.id] = false;
            return acc;
          },
          {}
        );
        setExpandedContacts(expandedState);
      } catch {
        setError("Failed to load contacts.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedContacts((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>All Contact Messages</Heading>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Spinner size="xl" />
        </Box>
      ) : error ? (
        <Text color="red.500" textAlign="center">
          {error}
        </Text>
      ) : contacts.length === 0 ? (
        <Text textAlign="center">No messages found.</Text>
      ) : (
        <Stack spacing={6}>
          {contacts.map((contact) => (
            <VStack
              key={contact.id}
              bg={bgColor}
              borderRadius="md"
              p={6}
              flexDirection="column"
              boxShadow="md"
              border={"1px solid"}
              borderColor={"brand.500"}
              spacing={5}
              alignItems={"start"}
            >
              <Flex w="full" justify="space-between" align="center">
                <HStack>
                  <FaUser />
                  <Text fontSize="lg" fontWeight="bold" color={textColor}>
                    {contact.name}
                  </Text>
                </HStack>

                <IconButton
                  icon={
                    expandedContacts[contact.id] ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )
                  }
                  aria-label="Toggle Details"
                  variant="ghost"
                  onClick={() => toggleExpand(contact.id)}
                />
              </Flex>

              {expandedContacts[contact.id] && (
                <>
                  <HStack>
                    <FaEnvelope />
                    <Text color={textColor}>{contact.email}</Text>
                  </HStack>

                  <Divider borderColor={"brand.500"} />

                  <Text fontWeight="semibold" mb={2}>
                    <Text fontSize={"22px"} color="brand.500" mb={2}>
                      Subject:
                    </Text>{" "}
                    {contact.subject}
                  </Text>

                  <Divider borderColor={"brand.500"} />

                  <Text color={textColor}>
                    <Text fontSize={"22px"} color="brand.500" mb={2}>
                      Content:
                    </Text>{" "}
                    {contact.message}
                  </Text>

                  <Text mt={4} fontSize="sm" color="gray.500">
                    Received on:{" "}
                    {new Date(contact.created_at).toLocaleDateString()}
                  </Text>
                </>
              )}
            </VStack>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default AdminContactUsList;
