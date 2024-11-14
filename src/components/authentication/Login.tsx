import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
    Stack,
  Text
} from "@chakra-ui/react";
import { useReducer } from "react";
import AutopayLogo from "../utilities/AutopayLogo";
import LoginImage from "../utilities/LoginImage";
import { h2 } from "framer-motion/client";
import ShowPasswordReducer from "../../state-management/ShowPasswordReducer";
import NeedHelp from "../utilities/NeedHelp";

function Login() {
  const [showPassword, dispatch] = useReducer(ShowPasswordReducer, false);
  return (
    <Container maxW="100wh" color="red" p={0}>
      <SimpleGrid columns={2} maxW="100wh" minH={"100vh"}>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          //   borderRadius={{ base: "none", sm: "xl" }}
          color={"gray.500"}
          
        >
          <Stack spacing="6">
            <Stack spacing="6">
                          <AutopayLogo />
                          <Heading as={h2} size="lg" color={"#353F50"}>
                              Login to Autopay
                          </Heading>
                          <Text color={"#5F738C"}>Provide the following credentials</Text>

              <FormControl>
                <FormLabel htmlFor="email">Username</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement width="4.5rem" mr="-5">
                    <IconButton
                      icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      h="100%"
                      size="sm"
                      onClick={() => dispatch({ type: "TOGGLE" })}
                      aria-label={""}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="institutionCode">
                  Institution Code
                </FormLabel>
                <Input id="institutionCode" type="text" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="otp">OTP</FormLabel>
                <Input id="otp" type="text" />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" size="sm">
                Reset Password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button bg={"#A8D6EF"} color={"white"}>Log in</Button>
              {/* <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack> */}
              {/* <OAuthButtonGroup /> */}
            </Stack>
          </Stack>
        </Box>
        <Box bg={"#A8D6EF"}>
          <Box mt={"200px"} width={"500px"} mx={"auto"}>
            <Heading as={h2} mb={"12"} color={"#072F40"}>
              Seamless auto remitance
            </Heading>
            <Box mx={"auto"} px={"20"}>
              <LoginImage />
            </Box>
          </Box>
          <Box textAlign={"right"}  pl={100} mt={200}>
            <NeedHelp />
            <Box />
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default Login;
