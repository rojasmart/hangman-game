import { Card } from "@chakra-ui/react";

import { getGame } from "../services/game";
import { useEffect } from "react";

export default function Game() {
  useEffect(() => {
    getGame().then((data) => console.log(data));
  }, []);

  return <Card></Card>;
}
