import {
  Card,
  HStack,
  Image,
  Link,
  Box,
  Container,
  Text,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { getGame } from "../services/game";
import { useEffect, useState } from "react";

export default function Game() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const data = await getGame();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch game data:", error);
      }
    };

    fetchGame();
  }, []);

  return (
    <>
      <HStack m={"10"}>
        <Container maxW="1300px" justifyContent={"left"} display={"flex"}>
          <Link onClick={() => navigate(-1)} mr={"auto"}>
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
                _hover: {
                  background:
                    "linear-gradient(180deg, #fdb0fd 16.42%, #ccd8f6 100%)",

                  animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
                  transform: "translate3d(0, 0, 0)",
                  backfaceVisibility: "hidden",
                  perspective: "1000px",
                  "@keyframes shake": {
                    "10%, 90%": {
                      transform: "translate3d(-1px, 0, 0)",
                    },
                    "20%, 80%": {
                      transform: "translate3d(2px, 0, 0)",
                    },
                    "30%, 50%, 70%": {
                      transform: "translate3d(-4px, 0, 0)",
                    },
                    "40%, 60%": {
                      transform: "translate3d(4px, 0, 0)",
                    },
                  },
                },
              }}
            >
              <Image src={"/images/icon-back.svg"} w={"50px"} ml={"25px"} />
            </Box>
          </Link>
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
            Pick a Category
          </Text>
        </Container>
      </HStack>
      <HStack spacing={8}>
        <Container maxW="1300px" display={"flex"} flexWrap={"wrap"} gap={"8"}>
          {Object.keys(categories).map((categoryName) => (
            <Card
              key={categoryName}
              p={["12px", "64px"]}
              w={"384px"}
              h={"190px"}
              fontFamily={"Mouse Memoirs"}
              cursor={"pointer"}
              sx={{
                background: "#2463FF",
                boxShadow:
                  "inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF",
                borderRadius: "40px",
                textAlign: "center",
                _hover: {
                  background: "#7ca1fc",
                  animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
                  transform: "translate3d(0, 0, 0)",
                  backfaceVisibility: "hidden",
                  perspective: "1000px",
                  "@keyframes shake": {
                    "10%, 90%": {
                      transform: "translate3d(-1px, 0, 0)",
                    },
                    "20%, 80%": {
                      transform: "translate3d(2px, 0, 0)",
                    },
                    "30%, 50%, 70%": {
                      transform: "translate3d(-4px, 0, 0)",
                    },
                    "40%, 60%": {
                      transform: "translate3d(4px, 0, 0)",
                    },
                  },
                },
              }}
              onClick={() => navigate(`/game/${categoryName}`)}
            >
              <Text
                fontFamily={"Mouse Memoirs"}
                fontSize={"48px"}
                color={"white"}
              >
                {categoryName}
              </Text>
            </Card>
          ))}
        </Container>
      </HStack>
    </>
  );
}
