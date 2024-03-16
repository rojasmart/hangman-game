import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../services/game";

import { Text, HStack, Box } from "@chakra-ui/react";

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
    <div>
      <h1>Category Page</h1>
      <p>{categoryName}</p>
      <Text fontSize={"2xl"}>{randomItem?.name}</Text>

      <HStack flexWrap={"wrap"}>
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
    </div>
  );
};

export default CategoryPage;
