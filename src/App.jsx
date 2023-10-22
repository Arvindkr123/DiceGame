import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [dice, setDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);
  const startGameHandler = () => {
    setGameStarted(true);
  };

  // console.log("selected Number clicked ", selectedNumber);
  const onNumberClick = (value) => {
    setSelectedNumber(value);
    setError(null);
  };
  const generateRandomNumber = () => {
    if (selectedNumber) {
      let generatedNumber = Math.ceil(Math.random() * 6);
      setDice(generatedNumber);

      if (selectedNumber === generatedNumber) {
        setScore((prev) => prev + generatedNumber);
        toast.success("You are winning score");
      } else {
        setScore((prev) => prev - 2);
        toast.error(`You are losing score ${-2}`);
      }
    } else {
      setError("Please select a number");
    }
  };

  let numberArray = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {gameStarted ? (
        <Box height={"100vh"}>
          <Stack
            justify={"center"}
            align={"center"}
            maxW={"1300px"}
            mx={"auto"}
          >
            <Heading
              as={"h2"}
              fontSize={"6xl"}
              mt="18"
              color={error ? "red" : "black"}
            >
              {error ? error : "Select Number"}
            </Heading>
            <Flex pb={10}>
              {numberArray?.map((value) => (
                <Flex
                  fontSize={"2xl"}
                  justify={"center"}
                  align={"center"}
                  h={"50px"}
                  w={"50px"}
                  bg={selectedNumber === value ? "green" : "black"}
                  color={"white"}
                  key={value}
                  mr={5}
                  borderRadius={"md"}
                  onClick={() => onNumberClick(value)}
                  cursor={"pointer"}
                >
                  {value}
                </Flex>
              ))}
            </Flex>
            <Box cursor={"pointer"} onClick={generateRandomNumber}>
              <Image src={`/dice/dice${dice}.png`} />
            </Box>
            <Text as="p" fontSize={"xl"}>
              Click on the dice to roll
            </Text>
            <Text
              fontSize={"8xl"}
              fontWeight={"bold"}
              color={score > 0 ? "green" : "red"}
            >
              {score}
            </Text>
            <Text fontSize={"6xl"}>Total Score</Text>
            <Button onClick={() => setScore(0)}>Reset Score</Button>
          </Stack>
          <Stack maxW={"900px"} mx={"auto"} mb={"5"}>
            <Heading as={"h2"}>Game Rules :-</Heading>
            <List>
              <ListItem>Select any number</ListItem>
              <ListItem>Cick on Image dice to roll it</ListItem>
              <ListItem>Select any number</ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur perferendis necessitatibus vero optio facilis
                explicabo eos quis id.
              </ListItem>
            </List>
          </Stack>
        </Box>
      ) : (
        <Flex justify={"center"} align={"center"}>
          <Image width={"50%"} src="./dices.png" />
          <Stack>
            <Heading fontSize={"7xl"} as={"h1"}>
              The Dice Game
            </Heading>
            <Button
              alignSelf={"end"}
              bg={"black"}
              color={"white"}
              _hover={{ bg: "gray" }}
              onClick={startGameHandler}
            >
              Start Game
            </Button>
          </Stack>
        </Flex>
      )}
    </>
  );
};

export default App;
