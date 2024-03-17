import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../services/game";

import { Container, Text, HStack, Box, Image } from "@chakra-ui/react";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [randomItem, setRandomItem] = useState(null);

  const [clickedLetters, setClickedLetters] = useState([]);

  useEffect(() => {
    getCategory(categoryName).then((data) => {
      setCategoryData(data);
      if (Array.isArray(data)) {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomItem(data[randomIndex]);
      }
    });
  }, [categoryName]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  console.log("categoryData", categoryData);
  console.log("randomItem", randomItem);

  return (
    <HStack m={"10"}>
      <Container maxW="1300px">
        <HStack justifyContent={"space-between"}>
          <Box>
            <HStack>
              <Box
                w={"94px"}
                h={"94px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  background:
                    "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
                  boxShadow: "inset 0px -6px 0px 7px rgba(157, 45, 245, 0.25)",
                  borderRadius: "999px",
                }}
              >
                <Image src={"/public/images/icon-menu.svg"} />
              </Box>
              <Text
                fontSize={"7xl"}
                color={"white"}
                fontFamily={"Mouse Memoirs"}
              >
                {categoryName}
              </Text>
            </HStack>
          </Box>
          <Box>
            <HStack gap={8}>
              <Text fontSize={"3xl"} color={"white"}>
                SCORE
              </Text>
              <Image
                src={"/public/images/icon-heart.svg"}
                w={"50px"}
                ml={"25px"}
              />
            </HStack>
          </Box>
        </HStack>
        <HStack>
          {randomItem?.name
            .toUpperCase()
            .split("")
            .map((letter, index) => (
              <Box
                w={"112px"}
                h={"128px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={
                  letter.trim() !== "" ? "#2463FF" : "transparent"
                }
                borderRadius={"40px"}
                boxShadow={
                  letter.trim() !== ""
                    ? "inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF"
                    : "transparent"
                }
                key={index}
                border="1px"
                borderColor={letter.trim() !== "" ? "gray.200" : "transparent"}
                p={2}
              >
                <Text
                  color={
                    letter.trim() !== "" && clickedLetters.includes(letter)
                      ? "white"
                      : "transparent"
                  }
                  fontSize={"6xl"}
                  fontFamily={"Mouse Memoirs"}
                >
                  {letter.trim() !== "" ? letter : "-"}
                </Text>
              </Box>
            ))}
        </HStack>

        <HStack flexWrap={"wrap"} mt={12}>
          {alphabet.map((letter, index) => (
            <Box
              key={index}
              backgroundColor={"white"}
              borderRadius={"24px"}
              w={"109px"}
              h={"84px"}
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
              onClick={() =>
                setClickedLetters((prevLetters) => [...prevLetters, letter])
              }
              cursor={"pointer"}
              opacity={clickedLetters.includes(letter) ? 0.5 : 1}
            >
              <Text
                fontSize={"3xl"}
                fontFamily={"Mouse Memoirs"}
                colorScheme={"var(--dark-navy)"}
              >
                {letter}
              </Text>
            </Box>
          ))}
        </HStack>
      </Container>
    </HStack>
  );
};

export default CategoryPage;
