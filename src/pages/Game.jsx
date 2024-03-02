import { Card, Stack } from "@chakra-ui/react";

import { getGame } from "../services/game";
import { useEffect, useState } from "react";

export default function Game() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getGame().then((data) => setCategories(data));
  }, []);

  return <Stack spacing={8}></Stack>;
}
