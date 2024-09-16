import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import factory4 from "../assets/factory/factory4.png";

import { VideoBackground } from "../components";
import HomeContactSection from "../components/HomeContactSection";
import HomeOverview from "../components/HomeOverview";
import ProductCategoriesGrid from "../components/HomeProductCategoryOverview";
import HomeStatsSection from "../components/HomeStatsSection";
import PartnersMap from "../components/PartnersMap";
import ServiceCard from "../components/ServiceCard";
import { circularImages, products } from "../constants/data";
import PartnersCircle from "../components/PartnersCircle";
import saudiMap from "../assets/sa.svg";
const HomePage: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box textAlign="center" p={10}>
      <VideoBackground />

      <Box mt={10}>
        {/* <Container position={"relative"} my={20} minWidth={"fit-content"}>
          <Center>
            <Image src={saudiMap} />
          </Center>

          <PartnerCircleGroup />
        </Container> */}
        {!isMobile ? (
          <PartnersMap />
        ) : (
          <Container position={"relative"} my={20} minWidth={"fit-content"}>
            <Center>
              <Image src={saudiMap} />
            </Center>

            <PartnersCircle
              right={"3%"}
              bottom={"29%"}
              src={circularImages[0]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
            <PartnersCircle
              right={"18%"}
              bottom={"33%"}
              src={circularImages[1]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
            <PartnersCircle
              right={"37%"}
              bottom={"10%"}
              src={circularImages[2]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
            <PartnersCircle
              right={"50%"}
              bottom={"50%"}
              src={circularImages[3]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
            <PartnersCircle
              right={"40%"}
              bottom={"40%"}
              src={circularImages[4]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
            <PartnersCircle
              right={"30%"}
              bottom={"30%"}
              src={circularImages[5]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
            <PartnersCircle
              left={"20%"}
              top={"20%"}
              src={circularImages[6]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
            <PartnersCircle
              left={"30%"}
              top={"50%"}
              src={circularImages[7]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
            <PartnersCircle
              left={"35%"}
              top={"70%"}
              src={circularImages[8]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
            <PartnersCircle
              left={"19%"}
              top={"3%"}
              src={circularImages[9]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
            <PartnersCircle
              left={"39%"}
              top={"20%"}
              src={circularImages[10]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
            <PartnersCircle
              left={"20%"}
              top={"38%"}
              src={circularImages[11]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
            <PartnersCircle
              right={"35%"}
              top={"25%"}
              src={circularImages[12]}
              zIndex={10}
              size={{ base: "32px", md: "100px" }}
            />
          </Container>
        )}
        <HomeOverview />

        <HomeStatsSection
          stats={[
            { value: 21, label: "Years of Experience" },
            { value: 50, label: "Clients in the Kingdom" },
            { value: 100, label: "Projects Across Various Sectors" },
          ]}
        />

        <Box mt={"20"} letterSpacing={"2px"} p={"10"}>
          <Container
            maxW={{
              base: "container.sm",
              md: "container.md",
              lg: "container.xl",
            }}
            mb={20}
          >
            <Text fontSize={{ base: "lg", md: "xl" }} color={"brand.500"}>
              OUR SERVICES
            </Text>
            <Heading
              as={"h3"}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              mt={5}
            >
              Offer Top Services to Industries
            </Heading>
            <Text
              mt={5}
              color={"grey"}
              fontSize={{ base: "md", md: "lg", lg: "2xl" }}
            >
              Nostrud exercitation id laborum occaecat enim est qui incididunt
              commodo aliquip duis eiusmod. Occaecat reprehenderit reprehenderit
              sint Lorem
            </Text>
          </Container>

          <SimpleGrid columns={[1, 2, 3]} width={"full"} spacing={20} p={4}>
            <ServiceCard images={products[0]} borderRadius="lg" shadow="lg" />
            <ServiceCard images={products[0]} borderRadius="lg" shadow="lg" />
            <ServiceCard images={products[0]} borderRadius="lg" shadow="lg" />
            <ServiceCard images={products[0]} borderRadius="lg" shadow="lg" />
            <ServiceCard images={products[0]} borderRadius="lg" shadow="lg" />
            <ServiceCard images={products[0]} borderRadius="lg" shadow="lg" />

            {/* Add more cards as needed */}
          </SimpleGrid>

          <HomeContactSection />
          {/*OUR PRODUCTS*/}
          {isMobile ? (
            <Container
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              alignItems="flex-start"
              mt={10}
              px={{ base: 4, md: 8 }}
            >
              <Box flex="1">
                <ProductCategoriesGrid />
              </Box>
              <Container
                textAlign={{ base: "center", md: "start" }}
                maxWidth={{ base: "100%", md: "50%" }}
                mb={20}
                mt={{ base: 10, md: 0 }}
                minWidth={"100%"}
              >
                <Text fontSize={{ base: "lg", md: "xl" }} color="brand.500">
                  OUR PRODUCTS
                </Text>
                <Heading as="h3" fontSize={{ base: "3xl", md: "5xl" }} mt={5}>
                  We Offer Top Shelf Products That's Customized for Your Need.
                </Heading>
                <Text mt={5} color="grey" fontSize={{ base: "lg", md: "2xl" }}>
                  When considering the material for Cable Management Systems, it
                  is important to assess your specific requirements and
                  environmental factors. We offer our products in various
                  materials to cater to your specific needs.
                </Text>
                <Link to="/products-services">
                  <Button
                    mt={10}
                    backgroundColor="brand.500"
                    color="white"
                    _hover={{ bg: "brand.600" }}
                  >
                    VIEW MORE
                  </Button>
                </Link>
              </Container>
            </Container>
          ) : (
            <Container minWidth={"100%"} alignContent={"flex-start"} mt={10}>
              <ProductCategoriesGrid />
              <Container textAlign={"center"} maxWidth={"80%"} my={20}>
                <Text fontSize={"xl"} color={"brand.500"}>
                  OUR PRODUCTS
                </Text>
                <Heading as={"h3"} fontSize={"5xl"} mt={5}>
                  We Offer Top Shelf Products That's Customized for your Need.
                </Heading>
                <Text mt={5} color={"grey"} fontSize={"2xl"}>
                  When Considering the material for Cable Management System, it
                  is important to assess your specifi required and enironmental
                  factors. We offer our products in various materials to cater
                  to your specific needs.
                </Text>
                <Link to={"/products-services"}>
                  <Button mt={10} backgroundColor={"brand.500"}>
                    VIEW MORE
                  </Button>
                </Link>
              </Container>
            </Container>
          )}

          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            minWidth={"100%"}
            alignContent={"flex-start"}
            mt={10}
          >
            <Box
              minHeight={{ base: "full", lg: "container.sm" }}
              minWidth={{ base: "full", lg: "container.md" }}
            >
              <Image
                src={factory4}
                boxSize={"fill"}
                height={"full"}
                width={"full"}
              />
            </Box>
            <Box
              p={{ base: 6, md: 10 }} // Adjust padding for different screen sizes
              maxWidth={{ base: "100%", md: "80%" }} // Full width on small screens, 50% on larger
              textAlign={{ base: "center", md: "start" }} // Center text on small screens, left-align on larger
            >
              <VStack align="start" spacing={5}>
                <Text
                  color="brand.500"
                  fontWeight="bold"
                  fontSize={{ base: "md", md: "lg" }}
                >
                  WHY CHOOSE US
                </Text>
                <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }}>
                  We strive to maintain quality standards to the best
                </Heading>

                <Accordion allowToggle pt={5} w="100%">
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          fontSize={{ base: "md", md: "lg" }}
                        >
                          State of The Art Factory
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel color="grey" pb={4}>
                      Laboris do ad ad consequat do excepteur quis id dolore
                      magna anim aute velit. Consequat voluptate veniam aliqua
                      labore nulla est pariatur irure adipisicing ea. Veniam
                      labore esse do irure
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          fontSize={{ base: "md", md: "lg" }}
                        >
                          High Quality Assurance
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel color="grey" pb={4}>
                      Laboris do ad ad consequat do excepteur quis id dolore
                      magna anim aute velit. Consequat voluptate veniam aliqua
                      labore nulla est pariatur irure adipisicing ea. Veniam
                      labore esse do irure
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          fontSize={{ base: "md", md: "lg" }}
                        >
                          Strong Market Presence
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel color="grey" pb={4}>
                      Laboris do ad ad consequat do excepteur quis id dolore
                      magna anim aute velit. Consequat voluptate veniam aliqua
                      labore nulla est pariatur irure adipisicing ea. Veniam
                      labore esse do irure
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          fontSize={{ base: "md", md: "lg" }}
                        >
                          Cutting Edge Technology
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel color="grey" pb={4}>
                      Laboris do ad ad consequat do excepteur quis id dolore
                      magna anim aute velit. Consequat voluptate veniam aliqua
                      labore nulla est pariatur irure adipisicing ea. Veniam
                      labore esse do irure
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          fontSize={{ base: "md", md: "lg" }}
                        >
                          Competitive Pricing
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel color="grey" pb={4}>
                      Laboris do ad ad consequat do excepteur quis id dolore
                      magna anim aute velit. Consequat voluptate veniam aliqua
                      labore nulla est pariatur irure adipisicing ea. Veniam
                      labore esse do irure
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          fontSize={{ base: "md", md: "lg" }}
                        >
                          Value Guaranteed
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel color="grey" pb={4}>
                      Laboris do ad ad consequat do excepteur quis id dolore
                      magna anim aute velit. Consequat voluptate veniam aliqua
                      labore nulla est pariatur irure adipisicing ea. Veniam
                      labore esse do irure
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </VStack>
            </Box>
          </Box>
        </Box>

        {/* <HStack
          justifyContent="space-around"
          width={"full"}
          spacing={8}
          my={10}
        >
          <OverviewItem
            text={"Operating in the Kingdom for 21+ years"}
            count={21}
          />
          <OverviewItem
            text={"Serving more than 50 Clients in the Kingdom"}
            count={50}
          />
          <OverviewItem
            text={"Delivering more than 100 projects across various sectors"}
            count={100}
          />
        </HStack> */}

        {/* <OverviewContent /> */}

        {/* <FeaturesGrid /> */}
      </Box>
    </Box>
  );
};

export default HomePage;
