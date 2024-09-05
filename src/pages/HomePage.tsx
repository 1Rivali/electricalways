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
  HStack,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import contr1 from "../assets/contractors-logos/1.png";
import contr10 from "../assets/contractors-logos/10.png";
import contr11 from "../assets/contractors-logos/11.png";
import contr14 from "../assets/contractors-logos/14.png";
import contr16 from "../assets/contractors-logos/16.png";
import contr17 from "../assets/contractors-logos/17.png";
import contr2 from "../assets/contractors-logos/2.png";
import contr25 from "../assets/contractors-logos/25.png";
import contr27 from "../assets/contractors-logos/27.png";
import contr3 from "../assets/contractors-logos/3.png";
import contr4 from "../assets/contractors-logos/4.png";
import contr5 from "../assets/contractors-logos/5.png";
import contr8 from "../assets/contractors-logos/8.png";
import saudiMap from "../assets/saudi-arabia.png";
import serviceImg from "../assets/Service-1.jpg";
import { VideoBackground } from "../components";
import HomeOverview from "../components/HomeOverview";
import ProductCategoriesGrid from "../components/HomeProductCategoryOverview";
import PartnersCircle from "../components/PartnersCircle";
import ServiceCard from "../components/ServiceCard";
const HomePage: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box textAlign="center" p={10}>
      <VideoBackground />

      <Box mt={10}>
        <Container position={"relative"} my={20} minWidth={"fit-content"}>
          <Center>
            <Image src={saudiMap} />
          </Center>

          <PartnersCircle
            right={"3%"}
            bottom={"29%"}
            src={contr1}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
          <PartnersCircle
            right={"18%"}
            bottom={"33%"}
            src={contr2}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
          <PartnersCircle
            right={"37%"}
            bottom={"10%"}
            src={contr3}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
          <PartnersCircle
            right={"50%"}
            bottom={"50%"}
            src={contr4}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
          <PartnersCircle
            right={"40%"}
            bottom={"40%"}
            src={contr5}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
          <PartnersCircle
            right={"30%"}
            bottom={"30%"}
            src={contr8}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
          <PartnersCircle
            left={"20%"}
            top={"20%"}
            src={contr10}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
          <PartnersCircle
            left={"30%"}
            top={"50%"}
            src={contr11}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
          <PartnersCircle
            left={"35%"}
            top={"70%"}
            src={contr14}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
          <PartnersCircle
            left={"19%"}
            top={"3%"}
            src={contr16}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
          <PartnersCircle
            left={"39%"}
            top={"20%"}
            src={contr17}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
          <PartnersCircle
            left={"20%"}
            top={"38%"}
            src={contr25}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
          <PartnersCircle
            right={"35%"}
            top={"25%"}
            src={contr27}
            zIndex={10}
            size={{ base: "32px", md: "100px" }}
          />
        </Container>

        <HomeOverview />

        <HStack
          width={"full"}
          mt={{ base: "10", md: "20" }}
          p={{ base: 6, md: 12 }}
          background={
            "radial-gradient(circle, rgba(49,99,158,1) 0%, rgba(0,0,0,1) 100%)"
          }
          flexWrap={{ base: "wrap", md: "nowrap" }}
          alignItems={"flex-start"}
        >
          <Heading
            as={"h4"}
            w={{ base: "100%", md: "20%" }}
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ base: "xl", md: "2xl" }}
            mb={{ base: 6, md: 0 }}
          >
            Our Factory in Numbers
          </Heading>
          <HStack
            justify={"space-around"}
            width={"full"}
            flexWrap={{ base: "wrap", md: "nowrap" }}
            spacing={{ base: 6, md: 8 }}
          >
            <VStack>
              <CountUp
                style={{ fontSize: "48px", fontWeight: "bold" }}
                duration={3}
                enableScrollSpy
                end={21}
              />
              <Text fontSize={{ base: "md", md: "lg" }}>
                Years of Experience
              </Text>
            </VStack>
            <VStack>
              <CountUp
                style={{ fontSize: "48px", fontWeight: "bold" }}
                duration={3}
                enableScrollSpy
                end={50}
              />
              <Text fontSize={{ base: "md", md: "lg" }}>
                Clients in the Kingdom
              </Text>
            </VStack>
            <VStack>
              <CountUp
                style={{ fontSize: "48px", fontWeight: "bold" }}
                duration={3}
                enableScrollSpy
                end={100}
              />
              <Text fontSize={{ base: "md", md: "lg" }}>
                Projects Across Various Sectors
              </Text>
            </VStack>
          </HStack>
        </HStack>

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
            <ServiceCard
              description="Cupidatat mollit deserunt consectetur reprehenderit. Occaecat sunt duis ex esse proident ex in deserunt qui. Eiusmod do aute aute adipisicing culpa deserunt reprehenderit exercitation labore commodo "
              imageUrl={serviceImg}
              title="Manufacturing a Variety of Steel Products"
              subtitle="Steel Production"
              borderRadius="lg"
              shadow="lg"
            />
            <ServiceCard
              description="Cupidatat mollit deserunt consectetur reprehenderit. Occaecat sunt duis ex esse proident ex in deserunt qui. Eiusmod do aute aute adipisicing culpa deserunt reprehenderit exercitation labore commodo "
              imageUrl={serviceImg}
              title="High-Quality Steel Solutions"
              subtitle="Steel Production"
              borderRadius="lg"
              shadow="lg"
            />
            <ServiceCard
              description="Cupidatat mollit deserunt consectetur reprehenderit. Occaecat sunt duis ex esse proident ex in deserunt qui. Eiusmod do aute aute adipisicing culpa deserunt reprehenderit exercitation labore commodo "
              imageUrl={serviceImg}
              title="Innovative Steel Manufacturing"
              subtitle="Steel Production"
              borderRadius="lg"
              shadow="lg"
            />
            <ServiceCard
              description="Cupidatat mollit deserunt consectetur reprehenderit. Occaecat sunt duis ex esse proident ex in deserunt qui. Eiusmod do aute aute adipisicing culpa deserunt reprehenderit exercitation labore commodo "
              imageUrl={serviceImg}
              title="Innovative Steel Manufacturing"
              subtitle="Steel Production"
              borderRadius="lg"
              shadow="lg"
            />
            <ServiceCard
              description="Cupidatat mollit deserunt consectetur reprehenderit. Occaecat sunt duis ex esse proident ex in deserunt qui. Eiusmod do aute aute adipisicing culpa deserunt reprehenderit exercitation labore commodo "
              imageUrl={serviceImg}
              title="Innovative Steel Manufacturing"
              subtitle="Steel Production"
              borderRadius="lg"
              shadow="lg"
            />
            <ServiceCard
              description="Cupidatat mollit deserunt consectetur reprehenderit. Occaecat sunt duis ex esse proident ex in deserunt qui. Eiusmod do aute aute adipisicing culpa deserunt reprehenderit exercitation labore commodo "
              imageUrl={serviceImg}
              title="Innovative Steel Manufacturing"
              subtitle="Steel Production"
              borderRadius="lg"
              shadow="lg"
            />
            {/* Add more cards as needed */}
          </SimpleGrid>

          <Container
            minWidth={{ base: "100%", md: "container.md", lg: "container.xl" }}
            my={{ base: 10, md: 15, lg: 20 }}
            p={{ base: 5, md: 8, lg: 10 }}
            background={
              "radial-gradient(circle, rgba(49,99,158,1) 41%, rgba(0,0,0,1) 100%)"
            }
          >
            <Text fontSize={{ base: "lg", md: "xl" }} color={"white"}>
              CONTACT
            </Text>
            <Heading
              as={"h3"}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              mt={5}
            >
              Connect with{" "}
              <Text display={"inline"} color={"black"} fontWeight={"bold"}>
                Electrical Ways
              </Text>{" "}
              Today for Cutting-Edge Cable Management Systems
            </Heading>
            <Text mt={5} color={"black"} fontSize={{ base: "xl", md: "2xl" }}>
              We are one click away from filling your needs
            </Text>
            <Link to={"contact"}>
              <Button mt={10} backgroundColor={"black"} color={"white"}>
                CONTACT US NOW
              </Button>
            </Link>
          </Container>
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
            <Container
              display={"flex"}
              minWidth={"100%"}
              alignContent={"flex-start"}
              mt={10}
            >
              <ProductCategoriesGrid />
              <Container textAlign={"start"} maxWidth={"50%"} mb={20}>
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
            backgroundColor={"white"}
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
                src="/src/assets/factory/factory4.png"
                height={"full"}
                width={"full"}
              />
            </Box>
            <Box
              bg="black"
              color="white"
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
