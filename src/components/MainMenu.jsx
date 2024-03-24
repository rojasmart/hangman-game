import { Button, Center, Flex, Container, Image, Link } from "@chakra-ui/react";

const MainMenu = () => {
  return (
    <>
      <Flex
        width={"100vw"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Center>
          <Container
            sx={{
              background:
                "linear-gradient(180deg, #344ABA 0%, rgba(0, 20, 121, 0.83) 100%)",
              boxShadow:
                "inset 0px -8px 0px 4px #140E66, inset 0px 6px 0px 8px #2463FF",
              borderRadius: "72px",
            }}
            h={"500px"}
            w={"592px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Image
              src={"/public/images/logo.svg"}
              sx={{ position: "absolute", top: "120px" }}
            />
            <Link
              href="/rules"
              display={"flex"}
              w={"100%"}
              justifyContent={"center"}
              _hover={{ textDecoration: "none" }}
            >
              <Center
                sx={{
                  background:
                    "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
                  boxShadow:
                    "inset 0px -4px 0px 5px #243041, inset 0px -12px 0px 11px #9D2DF5",
                  padding: "51px",
                  borderRadius: "180px",
                  position: "absolute",
                  top: "369px",
                  _hover: {
                    background:
                      "linear-gradient(180deg, #fdb0fd 16.42%, #ccd8f6 100%)",
                    boxShadow:
                      "inset 0px -4px 0px 5px #243041, inset 0px -12px 0px 11px #c685f8",
                    animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
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
              >
                <Link href="/game">
                  <Image src={"/public/images/icon-play.svg"} />
                </Link>
              </Center>
              <Button
                size="lg"
                w={"260px"}
                h={"62px"}
                pl={6}
                pr={6}
                pt={2}
                pb={2}
                sx={{
                  top: "160px",
                  background: "var(--blue)",
                  boxShadow:
                    "inset 0px -2px 0px 3px var(--dark-navy), inset 0px 1px 0px 6px var(--blue-transparent)",
                  color: "var(--white)",
                  borderRadius: "40px",
                  _hover: {
                    background:
                      "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
                    boxShadow:
                      "inset 0px -4px 0px 5px #243041, inset 0px -12px 0px 11px #9D2DF5",
                  },
                  textTransform: "uppercase",
                  fontSize: "30px",
                  letterSpacing: "2px",
                }}
              >
                How to play
              </Button>
            </Link>
          </Container>
        </Center>
      </Flex>
    </>
  );
};

export default MainMenu;
