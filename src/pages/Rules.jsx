import {
  Card,
  HStack,
  Stack,
  Image,
  Link,
  Text,
  Container,
  Box,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export default function Rules() {
  const navigate = useNavigate();

  return (
    <>
      <HStack m={"10"}>
        <Container maxW="1300px" justifyContent={"center"} display={"flex"}>
          <Box
            alignItems={"center"}
            display={"flex"}
            sx={{
              boxSizing: "border-box",
              width: "94px",
              height: "94px",
              left: "0px",
              top: "0px",
              background:
                "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
              boxShadow: "inset 0px -6px 0px 7px rgba(157, 45, 245, 0.25)",
              borderRadius: "999px",
            }}
          >
            <Link onClick={() => navigate(-1)} mr={"auto"}>
              <Image
                src={"/public/images/icon-back.svg"}
                w={"50px"}
                ml={"25px"}
              />
            </Link>
          </Box>
          <Text
            fontSize={"106px"}
            textAlign={"center"}
            flex={"2"}
            fontFamily={"Mouse Memoirs"}
            sx={{
              letterSpacing: "0.05em",
              background:
                "linear-gradient(180deg, #67B6FF 16.42%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              "-webkit-text-stroke": "5px #243041",
            }}
          >
            How to play
          </Text>
        </Container>
      </HStack>

      <HStack justifyContent={"center"} alignItems={"center"}>
        <Container maxW={"1300px"} display={"flex"} gap={"14"}>
          <Card h={"550px"} w={"384px"} p={4} borderRadius={"40px"}>
            <Text
              fontFamily={"Mouse Memoirs"}
              color={"#2463FF"}
              fontSize={"8xl"}
              textAlign={"center"}
            >
              01
            </Text>
            <Text>Choose a category</Text>
          </Card>
          <Card h={"550px"} w={"384px"} p={4} borderRadius={"40px"}>
            <Text
              fontFamily={"Mouse Memoirs"}
              color={"#2463FF"}
              fontSize={"8xl"}
              textAlign={"center"}
            >
              02
            </Text>
            <Text>Guess Letters</Text>
          </Card>
          <Card h={"550px"} w={"384px"} p={4} borderRadius={"40px"}>
            <Text
              fontFamily={"Mouse Memoirs"}
              color={"#2463FF"}
              fontSize={"8xl"}
              textAlign={"center"}
            >
              03
            </Text>
            <Text>Win or Lose</Text>
          </Card>
        </Container>
      </HStack>
    </>
  );
}
