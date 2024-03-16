import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../services/game";

import { Container, Text, HStack, Box } from "@chakra-ui/react";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [randomItem, setRandomItem] = useState(null);

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
        <h1>Category Page</h1>
        <p>{categoryName}</p>
        <HStack>
          {randomItem?.name.split("").map((letter, index) => (
            <Box
              w={"112px"}
              h={"128px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundColor={letter.trim() !== "" ? "#2463FF" : "transparent"}
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
                color={letter.trim() !== "" ? "white" : "transparent"}
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
