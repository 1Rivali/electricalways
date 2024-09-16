import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import catalogue from "../assets/barcodes/EWFC_Catalogue__Barcode-removebg-preview.png";
import pastProjects from "../assets/barcodes/Profile.png";
import certificates from "../assets/barcodes/Certificates.png";
import iso from "../assets/barcodes/ISO.png";
import testReports from "../assets/barcodes/Test Report.png";
import approval from "../assets/barcodes/Approval.png";

interface DropdownItemProps {
  title: string;
  description: string;
  barcode: string; // URL to barcode image
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  title,
  description,
  barcode,
}) => {
  const handleOpenBarcode = () => {
    // Open the barcode image in a new window
    window.open(barcode, "_blank");
  };

  return (
    <AccordionItem>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text mb={2}>{description}</Text>
        {/* Display barcode image */}
        <Image
          src={barcode}
          alt={`${title} Barcode`}
          mb={2}
          boxSize="150px"
          objectFit="contain"
        />
        <Button colorScheme="blue" onClick={handleOpenBarcode}>
          Open Barcode
        </Button>
      </AccordionPanel>
    </AccordionItem>
  );
};

const Credentials = () => {
  const dropdownItems = [
    {
      title: "Catalogue",
      description: "Description for item 1",
      barcode: catalogue, // Image URL for the barcode
    },
    {
      title: "Certificates",
      description: "Description for item 2",
      barcode: certificates,
    },
    {
      title: "Approvals",
      description: "Description for item 3",
      barcode: approval,
    },
    {
      title: "ISO Certificates",
      description: "Description for item 4",
      barcode: iso,
    },
    {
      title: "Test Reports",
      description: "Description for item 5",
      barcode: testReports,
    },
    {
      title: "Past Projects",
      description: "Description for item 6",
      barcode: pastProjects,
    },
  ];

  return (
    <Box width="80%" mx="auto" mt={10}>
      <Accordion allowMultiple>
        {dropdownItems.map((item, index) => (
          <DropdownItem
            key={index}
            title={item.title}
            description={item.description}
            barcode={item.barcode}
          />
        ))}
      </Accordion>
    </Box>
  );
};

export default Credentials;
