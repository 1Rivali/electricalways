import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import NavLinks from "./NavLink";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controls Drawer

  const bg = useColorModeValue("navbar.light", "navbar.dark");
  const color = useColorModeValue("text.light", "text.dark");
  const activeColor = "brand.500";

  return (
    <Box
      className="navbar"
      bg={bg}
      py={{ base: 2, md: 4 }}
      px={{ base: 4, md: 8 }}
      shadow="md"
    >
      <Flex h={16} alignItems="center" justifyContent="space-around">
        {/* Logo Section */}
        <Flex alignItems="center">
          <Link as={RouterLink} to="/">
            <Image
              src="/src/assets/logo.png"
              alt="Logo"
              boxSize={{ base: "50px", md: "76px" }} // Responsive logo size
              mr={4}
            />
          </Link>
        </Flex>

        {/* Navigation Links for Desktop */}
        <HStack
          as="nav"
          spacing={6}
          display={{ base: "none", md: "flex" }} // Hide on small screens, show on medium and larger
        >
          <NavLinks activeColor={activeColor} color={color} />
        </HStack>

        {/* Hamburger Menu Button for Mobile */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: "flex", md: "none" }} // Show only on mobile
          onClick={onOpen}
          variant="ghost"
          size="lg"
        />

        {/* Toggle Color Mode Button */}
        {/* <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          size={{ base: "sm", md: "md" }}
          ml={2}
        /> */}
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader backgroundColor={"brand.500"}>Menu</DrawerHeader>

          <DrawerBody backgroundColor={"black"}>
            {/* Navigation Links for Mobile */}
            <NavLinks
              activeColor={activeColor}
              color={color}
              onClick={onClose}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
