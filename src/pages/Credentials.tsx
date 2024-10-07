import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { assetsBaseURL } from "../services/api-service";

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
    <AccordionItem color={"black"}>
      <AccordionButton>
        <Box flex="1" textAlign="left" fontSize={"24px"} fontWeight={"bold"}>
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text mb={2}>{description}</Text>

        <Button colorScheme="blue" onClick={handleOpenBarcode}>
          Open {title}
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
      barcode: `${assetsBaseURL}/pdfs/catalog.pdf`, // Image URL for the barcode
    },
    {
      title: "Certificates",
      description: "Description for item 2",
      barcode: `${assetsBaseURL}/pdfs/certificates.pdf`,
    },
    {
      title: "Approvals",
      description: "Description for item 3",
      barcode: `${assetsBaseURL}/pdfs/approval.pdf`,
    },
    {
      title: "ISO Certificates",
      description: "description for item 4",
      barcode: `${assetsBaseURL}/pdfs/iso.pdf`,
    },
    {
      title: "Test Reports",
      description: "Description for item 5",
      barcode: `${assetsBaseURL}/pdfs/test.pdf`,
    },
    {
      title: "Past Projects",
      description: "Description for item 6",
      barcode: `${assetsBaseURL}/pdfs/pastprojects.pdf`,
    },
  ];

  return (
    <Box
      width="80%"
      mx="auto"
      mt={10}
      background={
        " conic-gradient(from -60deg at 50% calc(100%/3),#91a8cf 0 120deg,#0000 0), conic-gradient(from 120deg at 50% calc(200%/3),#91a8cf 0 120deg,#0000 0), conic-gradient(from  60deg at calc(200%/3),#91a8cf 60deg,#4c70ae 0 120deg,#0000 0), conic-gradient(from 180deg at calc(100%/3),#2d4367 60deg,#91a8cf 0 120deg,#0000 0), linear-gradient(90deg,#2d4367 calc(100%/6),#4c70ae 0 50%, #2d4367 0 calc(500%/6), #4c70ae 0);"
      }
      backgroundSize={"cover"}
    >
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
