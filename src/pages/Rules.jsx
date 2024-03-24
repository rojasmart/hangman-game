import {
  Card,
  HStack,
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
              "-webkit-text-stroke": "3px #243041",
            }}
          >
            How to play
          </Text>
        </Container>
      </HStack>

      <HStack justifyContent={"center"} alignItems={"center"}>
        <Container maxW={"1300px"} display={"flex"} gap={"14"}>
          <Card
            h={"550px"}
            w={"384px"}
            p={4}
            borderRadius={"40px"}
            justifyContent={"center"}
            gap={4}
          >
            <Text
              fontFamily={"Mouse Memoirs"}
              color={"#2463FF"}
              fontSize={"8xl"}
              textAlign={"center"}
            >
              01
            </Text>
            <Text
              fontFamily={"Mouse Memoirs"}
              fontSize={"5xl"}
              textTransform={"uppercase"}
              textAlign={"center"}
              color={"var(--dark-navy)"}
            >
              Choose a category
            </Text>
            <Text
              fontFamily={"Mouse Memoirs"}
              fontSize={"3xl"}
              textAlign={"center"}
              color={"#887DC0"}
            >
              First, choose a word category, like animals or movies. The
              computer then randomly selects a secret word from that topic and
              shows you blanks for each letter of the word.
            </Text>
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
            <Text
              fontFamily={"Mouse Memoirs"}
              fontSize={"5xl"}
              textTransform={"uppercase"}
              textAlign={"center"}
              color={"var(--dark-navy)"}
            >
              Guess Letters
            </Text>
            <Text
              fontFamily={"Mouse Memoirs"}
              fontSize={"3xl"}
              textAlign={"center"}
              color={"#887DC0"}
            >
              Take turns guessing letters. The computer fills in the relevant
              blank spaces if your guess is correct. If it’s wrong, you lose
              some health, which empties after eight incorrect guesses.
            </Text>
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
            <Text
              fontFamily={"Mouse Memoirs"}
              fontSize={"5xl"}
              textTransform={"uppercase"}
              textAlign={"center"}
              color={"var(--dark-navy)"}
            >
              Win or Lose
            </Text>
            <Text
              fontFamily={"Mouse Memoirs"}
              fontSize={"3xl"}
              textAlign={"center"}
              color={"#887DC0"}
            >
              You win by guessing all the letters in the word before your health
              runs out. If the health bar empties before you guess the word, you
              lose.
            </Text>
          </Card>
        </Container>
      </HStack>
    </>
  );
}
