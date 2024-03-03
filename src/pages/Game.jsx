import { Card, HStack, Stack, Image, Link } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { getGame } from "../services/game";
import { useEffect, useState } from "react";

export default function Game() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getGame().then((data) => setCategories(data));
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Stack>
        <Link onClick={() => navigate(-1)}>
          <Image src={"/public/images/icon-back.svg"} w={"50px"} />
        </Link>
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
