import { Link, Stack } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface NavLinksProps {
  activeColor: string;
  color: string;
  onClick?: () => void; // Optional onClick handler for mobile
}

const NavLinks: React.FC<NavLinksProps> = ({ activeColor, color, onClick }) => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/credentials", label: "Credentials" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact Us" },
  ];
  const adminLinks = [
    {
      to: "/admin/slideshow",
      label: "Slide show",
    },

    {
      to: "/admin/products",
      label: "Products",
    },
    {
      to: "/admin/contactus",
      label: "Contact Us",
    },
    {
      to: "/admin/whychooseus",
      label: "Why Choose Us",
    },
  ];
  const token = localStorage.getItem("token");
  return (
    <Stack
      flexDirection={{ base: "column", md: "row" }}
      alignItems="flex-start"
      spacing={4}
    >
      {token
        ? adminLinks.map((link) => (
            <Link
              key={link.to}
              as={RouterLink}
              to={link.to}
              mx={2}
              px={3}
              py={2}
              borderRadius="md"
              fontSize="xl"
              fontWeight={location.pathname === link.to ? "bold" : "normal"}
              color={location.pathname === link.to ? activeColor : color}
              _hover={{ textDecoration: "none", color: activeColor }}
              onClick={onClick} // Close drawer on mobile when a link is clicked
            >
              {link.label}
            </Link>
          ))
        : links.map((link) => (
            <Link
              key={link.to}
              as={RouterLink}
              to={link.to}
              mx={2}
              px={3}
              py={2}
              borderRadius="md"
              fontSize="xl"
              fontWeight={location.pathname === link.to ? "bold" : "normal"}
              color={location.pathname === link.to ? activeColor : color}
              _hover={{ textDecoration: "none", color: activeColor }}
              onClick={onClick} // Close drawer on mobile when a link is clicked
            >
              {link.label}
            </Link>
          ))}
    </Stack>
  );
};

export default NavLinks;
