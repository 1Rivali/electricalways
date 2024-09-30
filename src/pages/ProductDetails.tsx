import {
  Box,
  Center,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { assetsBaseURL } from "../services/api-service";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useProduct(Number(id));
  if (isLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }
  if (error) {
    return <Box>Error</Box>;
  }

  return (
    <Stack p={10} direction={"row"} spacing={10}>
      <Image
        border={"1px solid"}
        borderColor={"brand.500"}
        boxShadow={"2xl"}
        width={"50%"}
        src={`${assetsBaseURL}/${data.image}`}
      />
      <Box>
        <Heading>{data.title}</Heading>
        <Text color={"grey"}>{data.description}</Text>
      </Box>
    </Stack>
  );
}
