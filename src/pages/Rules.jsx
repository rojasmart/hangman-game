import {
  Card,
  HStack,
  Stack,
  Image,
  Link,
  Text,
  Container,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export default function Rules() {
  const navigate = useNavigate();

  return (
    <>
      <HStack m={"10"}>
        <Container maxW="1100px" justifyContent={"center"} display={"flex"}>
          <Link onClick={() => navigate(-1)} mr={"auto"}>
            <Image src={"/public/images/icon-back.svg"} w={"50px"} flex={"1"} />
          </Link>
          <Text fontSize={"6xl"} textAlign={"center"} flex={"2"}>
            How to play
          </Text>
        </Container>
      </HStack>

      <Stack justifyContent={"center"} alignItems={"center"}></Stack>
      <HStack justifyContent={"center"} alignItems={"center"}>
        <Card h={"400px"} w={"300px"} p={4}>
          CARD 1
        </Card>
        <Card h={"400px"} w={"300px"} p={4}>
          CARD 2
        </Card>
        <Card h={"400px"} w={"300px"} p={4}>
          CARD 3
        </Card>
      </HStack>
    </>
  );
}
