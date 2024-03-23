import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../services/game";

import {
  Container,
  Text,
  HStack,
  Box,
  Image,
  Progress,
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
  ModalBody,
  VStack,
  Button,
} from "@chakra-ui/react";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [randomItem, setRandomItem] = useState(null);

  const [progress, setProgress] = useState(8);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [clickedLetters, setClickedLetters] = useState([]);

  const handleLetterClick = (letter) => {
    if (!clickedLetters.includes(letter)) {
      setClickedLetters((prevLetters) => [...prevLetters, letter]);

      if (!randomItem?.name.toUpperCase().includes(letter) && progress > 0) {
        setProgress(progress - 1);
      }

      if (progress === 1 && !randomItem?.name.toUpperCase().includes(letter)) {
        setIsModalOpen(true);
      }
    }
  };

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

  return (
    <>
      <Modal
        className="modal"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent
          w={"592px"}
          h={"445px"}
          sx={{
            background:
              "linear-gradient(180deg, #344ABA 0%, rgba(0, 20, 121, 0.83) 100%)",
            boxShadow:
              "inset 0px -8px 0px 4px #140E66, inset 0px 6px 0px 8px #2463FF",
            borderRadius: "72px",
          }}
        >
          <Text
            fontSize={"134px"}
            fontFamily={"Mouse Memoirs"}
            sx={{
              position: "absolute",
              top: "-111px",
              left: "31px",
              letterSpacing: "-0.005em",
              backgroundColor: "#67B6FF",
              backgroundImage:
                "linear-gradient(180deg, #67B6FF 16.42%, #FFFFFF 100%)",
              backgroundSize: "100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",

              border: "border: 8px solid #243041",
              "-webkit-text-stroke": "5px black",
            }}
          >
            You Loose
          </Text>

          <ModalBody
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <VStack>
              <Button
                sx={{
                  background: "#2463FF",
                  boxShadow:
                    "inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF",
                  borderRadius: "40px",
                  width: "251px",
                  height: "62px",
                  fontSize: "32px",
                  fontWeight: "400",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "white",
                }}
              >
                Play Again
              </Button>
              <Button
                sx={{
                  background: "#2463FF",
                  boxShadow:
                    "inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF",
                  borderRadius: "40px",
                  width: "251px",
                  height: "62px",
                  fontSize: "32px",
                  fontWeight: "400",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "white",
                }}
              >
                New Category
              </Button>
              <Button
                sx={{
                  background: "#2463FF",
                  boxShadow:
                    "inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF",
                  borderRadius: "40px",
                  width: "251px",
                  height: "62px",
                  fontSize: "32px",
                  fontWeight: "400",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "white",
                }}
              >
                Quit Game
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
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
                    boxShadow:
                      "inset 0px -6px 0px 7px rgba(157, 45, 245, 0.25)",
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
                <Progress
                  value={(progress / 8) * 100}
                  background={"white"}
                  sx={{
                    backgroundColor: "white",
                    padding: "3px",
                    height: "20px",
                  }}
                  w={"200px"}
                  borderRadius={"20px"}
                  colorScheme="customColor"
                />

                <Image
                  src={"/public/images/icon-heart.svg"}
                  w={"50px"}
                  ml={"25px"}
                />
              </HStack>
            </Box>
          </HStack>

          <Flex
            justifyContent={"center"}
            gap={4}
            pt={20}
            pb={20}
            flexWrap="wrap"
          >
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
                  borderColor={
                    letter.trim() !== "" ? "gray.200" : "transparent"
                  }
                  p={2}
                  marginRight={letter.trim() === "" ? "100%" : "0"}
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
          </Flex>

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
                onClick={() => handleLetterClick(letter)}
                cursor={
                  clickedLetters.includes(letter) ? "not-allowed" : "pointer"
                }
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
    </>
  );
};

export default CategoryPage;
