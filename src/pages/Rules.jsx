import { Card, HStack, Stack, Image, Link } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export default function Rules() {
  const navigate = useNavigate();

  return (
    <>
      <Stack>
        <Link onClick={() => navigate(-1)}>
          <Image src={"/public/images/icon-back.svg"} w={"50px"} />
        </Link>
      </Stack>
      <HStack>
        <Card p={4}>CARD 1</Card>
        <Card p={4}>CARD 2</Card>
        <Card p={4}>CARD 3</Card>
      </HStack>
    </>
  );
}
