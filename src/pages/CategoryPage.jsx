import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../services/game";

import { Text } from "@chakra-ui/react";

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

  console.log("categoryData", categoryData);
  console.log("randomItem", randomItem);

  return (
    <div>
      <h1>Category Page</h1>
      <p>{categoryName}</p>
      <Text fontSize={"2xl"}>{randomItem?.name}</Text>
    </div>
  );
};

export default CategoryPage;
