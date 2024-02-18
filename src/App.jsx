import { Button, Center } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Center>
        <Button
          size="lg"
          w={"260px"}
          h={"62px"}
          pl={6}
          pr={6}
          pt={2}
          pb={2}
          sx={{
            background: "var(--blue)",
            boxShadow:
              "inset 0px -2px 0px 3px var(--dark-navy), inset 0px 1px 0px 6px var(--blue-transparent)",
            color: "var(--white)",
            borderRadius: "40px",
            _hover: {
              background: "var(--blue)",
              boxShadow:
                "inset 0px -2px 0px 3px var(--blue), inset 0px 1px 0px 6px var(--dark-navy)",
            },
            textTransform: "uppercase",
            fontSize: "30px",
            letterSpacing: "2px",
          }}
        >
          How to play
        </Button>
      </Center>
    </>
  );
}

export default App;
