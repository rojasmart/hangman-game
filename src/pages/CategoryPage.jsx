import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

  const [lineBreaks, setLineBreaks] = useState(0);

  const [isWin, setIsWin] = useState(false);

  const [isMenu, setIsMenu] = useState(false);

  const [progress, setProgress] = useState(8);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [clickedLetters, setClickedLetters] = useState([]);

  const navigate = useNavigate();

  const handleLetterClick = useCallback(
    (letter) => {
      if (!clickedLetters.includes(letter)) {
        setClickedLetters((prevLetters) => {
          const updatedLetters = [...prevLetters, letter];

          const allCorrectLettersClicked = randomItem?.name
            .toUpperCase()
            .split("")
            .filter((l) => l.trim() !== "") // exclude spaces
            .every((letter) => updatedLetters.includes(letter));

          if (allCorrectLettersClicked) {
            setIsModalOpen(true);
            setIsMenu(false);
            setIsWin(true);
          }

          return updatedLetters;
        });

        if (!randomItem?.name.toUpperCase().includes(letter) && progress > 0) {
          setProgress(progress - 1);
        }

        if (
          progress === 1 &&
          !randomItem?.name.toUpperCase().includes(letter)
        ) {
          setIsModalOpen(true);
          setIsMenu(false);
          setIsWin(false);
        }
      }
    },
    [clickedLetters, progress, randomItem]
  );

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

  const handleQuit = () => {
    navigate("/");
  };

  const handleCategoryChange = () => {
    navigate("/game");
  };

  const handlePlayAgain = () => {
    setClickedLetters([]);
    setProgress(8);
    setIsModalOpen(false);
    const randomIndex = Math.floor(Math.random() * categoryData.length);
    setRandomItem(categoryData[randomIndex]);
  };

  const handleClickMenu = () => {
    setIsModalOpen(true);
    setIsMenu(true);
  };

  return (
    <>
      <Modal
        className="modal"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeOnOverlayClick={isMenu}
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
          alignSelf={"center"}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Text
              fontSize={"134px"}
              fontFamily={"Mouse Memoirs"}
              sx={{
                position: "absolute",
                top: "-111px",

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
              {isWin ? "You Win" : "You Lose"}
            </Text>
          </Box>
          <ModalBody
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <VStack gap={6}>
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
                  _hover: {
                    background:
                      "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
                    boxShadow:
                      "inset 0px -4px 0px 5px #243041, inset 0px -12px 0px 11px #9D2DF5",
                  },
                }}
                onClick={() => handlePlayAgain()}
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
                  _hover: {
                    background:
                      "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
                    boxShadow:
                      "inset 0px -4px 0px 5px #243041, inset 0px -12px 0px 11px #9D2DF5",
                  },
                }}
                onClick={() => handleCategoryChange()}
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
                  _hover: {
                    background:
                      "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
                    boxShadow:
                      "inset 0px -4px 0px 5px #243041, inset 0px -12px 0px 11px #9D2DF5",
                  },
                }}
                onClick={() => handleQuit()}
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
                    _hover: {
                      background: "#7ca1fc",
                      animation:
                        "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
                      transform: "translate3d(0, 0, 0)",
                      backfaceVisibility: "hidden",
                      perspective: "1000px",
                      "@keyframes shake": {
                        "10%, 90%": {
                          transform: "translate3d(-1px, 0, 0)",
                        },
                        "20%, 80%": {
                          transform: "translate3d(2px, 0, 0)",
                        },
                        "30%, 50%, 70%": {
                          transform: "translate3d(-4px, 0, 0)",
                        },
                        "40%, 60%": {
                          transform: "translate3d(4px, 0, 0)",
                        },
                      },
                    },
                  }}
                  onClick={() => handleClickMenu()}
                  cursor={"pointer"}
                >
                  <Image src={"/images/icon-menu.svg"} />
                </Box>
                <Text
                  ml={12}
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

                <Image src={"/images/icon-heart.svg"} w={"50px"} ml={"25px"} />
              </HStack>
            </Box>
          </HStack>

          <Flex
            justifyContent={"center"}
            pt={10}
            pb={10}
            gap={6}
            flexWrap={"wrap"}
          >
            {randomItem?.name
              .toUpperCase()
              .split("")
              .map((letter, index) => {
                if (letter.trim() === "" && lineBreaks < 2) {
                  setLineBreaks(lineBreaks + 1);
                  return <Box w={"100%"} key={index} />;
                }

                return (
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
                );
              })}
          </Flex>

          <HStack flexWrap={"wrap"} mt={12} gap={6}>
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
