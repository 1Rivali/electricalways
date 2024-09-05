import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface ProductCategoryProps {
  icon: string;
  title: string;
  description: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Stack
      flexDirection={{ base: "column", md: "row" }}
      spacing={{ base: 6, md: 10 }}
      justify={{ base: "center", md: "flex-start" }}
      alignItems="start"
      textAlign={{ base: "center", md: "start" }}
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
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading as="h3" size={{ base: "sm", md: "md" }} color="white">
          {title}
        </Heading>
        <Text color="grey" fontSize={{ base: "sm", md: "md" }}>
          {description}
        </Text>
      </Box>
    </Stack>
  );
};

const ProductCategoriesGrid: React.FC = () => {
  return (
    <Box px={{ base: 4, md: 8 }} py={8}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={10}>
        <ProductCategory
          icon={"/src/assets/icons/cable-management-icon.png"}
          title="Cable Management System"
          description="Explore our comprehensive range of cutting-edge cable management systems to streamline installation, enhance safety, and revolutionize cable organization."
        />
        <ProductCategory
          icon={"/src/assets/icons/structural-support-icon.png"}
          title="Structural Support Systems"
          description="Premier Manufacturer of precision C-Channel profiles and accessories providing top-quality, reliable structural solutions."
        />
        <ProductCategory
          icon={"/src/assets/icons/cable-fasteners-icon.png"}
          title="Cable Fasteners"
          description="Introducing our top-quality cable fasteners for efficient and secure cable management solutions."
        />
        <ProductCategory
          icon={"/src/assets/icons/rollers-icon.png"}
          title="Different Types of Rollers"
          description="Explore our high-quality cable and pipe rollers designed for various industrial needs."
        />
        <ProductCategory
          icon={"/src/assets/icons/fastners-icon.png"}
          title="Fasteners & Brackets"
          description="Morbi eu neque vel quam lobortis en efficitur et dignissim felis."
        />
        <ProductCategory
          icon={"/src/assets/icons/batter-icon.png"}
          title="Battery Racks/Cabinets"
          description="Durable and modular Battery Racks, Pedestals & Switch Boxes designed with your needs and measurements."
        />
        <ProductCategory
          icon={"/src/assets/icons/light-icon.png"}
          title="Lighting Columns/Poles"
          description="Premier manufacturer of diverse pole structures and guards with precision plasma cutting tailored to meet your specific needs."
        />
        <ProductCategory
          icon={"/src/assets/icons/guards-icon.png"}
          title="Guards"
          description="Introducing our top-quality cable fasteners for efficient and secure cable management solutions."
        />
      </SimpleGrid>
    </Box>
  );
};

export default ProductCategoriesGrid;
