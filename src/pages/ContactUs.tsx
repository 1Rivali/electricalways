import {
  Box,
  Button,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import contactus2 from "../assets/contactus2.jpeg";

const ContactUs = () => {
  return (
    <Box>
      <Image
        mb={12}
        height={{ base: "40vh", md: "70vh" }}
        width="100%"
        src={contactus2}
        borderRadius="32px"
        objectFit="cover"
      />

      <Stack
        spacing={{ base: 8, md: 12 }}
        direction={{ base: "column", md: "row" }}
        px={{ base: 4, md: 12 }}
        width="100%"
        overflow="hidden"
      >
        <Box flex="1" maxW="100%" overflow="hidden">
          <Heading mb={6}>Contact</Heading>
          <Box bg="black" color="white" py={8} borderRadius="md">
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
              width="100%"
              overflow="hidden"
            >
              <GridItem display="flex" alignItems="center">
                <Icon as={FaPhoneAlt} color="brand.500" boxSize={8} />
                <Box ml={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Phone
                  </Text>
                  <Text>+966-55-439-3300</Text>
                </Box>
              </GridItem>
              <GridItem display="flex" alignItems="center">
                <Icon as={FaEnvelope} color="brand.500" boxSize={8} />
                <Box ml={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Email
                  </Text>
                  <Text>Sales1@electricalways.com</Text>
                </Box>
              </GridItem>
              <GridItem display="flex" alignItems="center">
                <Icon as={FaGlobe} color="brand.500" boxSize={8} />
                <Box ml={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Website
                  </Text>
                  <Text>www.electricalways.com</Text>
                </Box>
              </GridItem>
              <GridItem display="flex" alignItems="center">
                <Icon as={FaMapMarkerAlt} color="brand.500" boxSize={8} />
                <Box ml={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Address
                  </Text>
                  <Text>
                    Industrial Area AL-Mashael 14326, Riyadh, Saudi Arabia
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </Box>
          <Box mt={8}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.7936026813845!2d46.8615558!3d24.5963183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f053c2b42e365%3A0xa8c75af2d2533ab8!2sElectrical%20Ways%20Factory%20Company%2C%20Supporting%20System%20and%20Fabrication!5e0!3m2!1sen!2snl!4v1725048677653!5m2!1sen!2snl"
              style={{
                border: 0,
                height: "38vh",
                borderRadius: "24px",
                width: "100%",
              }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            />
          </Box>
        </Box>

        <Box
          bg="black"
          color="white"
          p={8}
          flex="1"
          borderRadius="md"
          maxWidth={{ base: "full", md: "50%" }}
          height={"100%"}
          mx="auto"
        >
          <Text color="brand.500" fontWeight="bold" mb={2}>
            CONTACT
          </Text>
          <Heading mb={6}>Reach Out Anytime</Heading>
          <VStack spacing={4} as="form">
            <FormControl isRequired>
              <Input
                placeholder="Your Name"
                _placeholder={{ color: "whiteAlpha.700" }}
                borderColor="whiteAlpha.500"
                focusBorderColor="brand.500"
              />
            </FormControl>

            <FormControl isRequired>
              <Input
                type="email"
                placeholder="Your Email"
                _placeholder={{ color: "whiteAlpha.700" }}
                borderColor="whiteAlpha.500"
                focusBorderColor="brand.500"
              />
            </FormControl>

            <FormControl isRequired>
              <Input
                placeholder="Subject"
                _placeholder={{ color: "whiteAlpha.700" }}
                borderColor="whiteAlpha.500"
                focusBorderColor="brand.500"
              />
            </FormControl>

            <FormControl isRequired>
              <Textarea
                placeholder="Input Message Here"
                _placeholder={{ color: "whiteAlpha.700" }}
                borderColor="whiteAlpha.500"
                focusBorderColor="brand.500"
                height="150px"
              />
            </FormControl>

            <Button
              type="submit"
              bg="blue.900"
              color="white"
              _hover={{ bg: "blue.700" }}
              width="full"
              mt={4}
            >
              SUBMIT MESSAGE
            </Button>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactUs;
