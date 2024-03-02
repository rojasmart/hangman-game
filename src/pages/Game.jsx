import { Card, HStack, Stack, Image } from "@chakra-ui/react";

import { getGame } from "../services/game";
import { useEffect, useState } from "react";

export default function Game() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getGame().then((data) => setCategories(data));
  }, []);

  return (
    <>
      <Stack>
        <Image src={"/public/images/icon-back.svg"} w={"50px"} />
      </Stack>
      <HStack spacing={8}>
        {Object.keys(categories).map((categoryName) => (
          <Card key={categoryName} p={4}>
            {categoryName}
          </Card>
        ))}
      </HStack>
    </>
  );
}
