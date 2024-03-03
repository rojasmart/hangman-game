import { Card, HStack, Stack, Image, Link, Box } from "@chakra-ui/react";

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
        <Box
          alignItems={"center"}
          display={"flex"}
          sx={{
            boxSizing: "border-box",
            width: "94px",
            height: "94px",
            left: "0px",
            top: "0px",
            background: "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
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
