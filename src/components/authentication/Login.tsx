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
  Text,
} from "@chakra-ui/react";
import { useReducer } from "react";
import AutopayLogo from "../utilities/AutopayLogo";
import { h2 } from "framer-motion/client";
import ShowPasswordReducer from "../../state-management/ShowPasswordReducer";
import NeedHelp from "../utilities/NeedHelp";

function Login() {
  const [showPassword, dispatch] = useReducer(ShowPasswordReducer, false);
  return (
    <Container maxW="100wh" color="red" p={0}>
      <SimpleGrid columns={2} maxW="100wh" minH={"100vh"}>
        <Box
          backgroundImage="url('/images/login_image.jpeg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundAttachment="scroll"
          backgroundSize="cover"
          backgroundColor="blue.900"
          backgroundBlendMode="multiply"
          display={{ base: "none", sm: "block" }}
        >
          <Box mt={"200px"} width={"500px"} mx={"auto"} color={"white"}>
            <Heading as={h2} mb={"1.5"}>
              Seamless Payments for Your Business
            </Heading>
            <Text>Simple solutions for salary and vendor payments</Text>
            <Box mx={"auto"} px={"20"}>
              {/* <LoginImage /> */}
            </Box>
          </Box>
          <HStack
            justify={"space-between"}
            ml={"20px"}
            mr={"20px"}
            color={"white"}
            mt="200px"
          >
            <Box fontSize={"xs"} borderRight={'1px'} mr='4' pr={'4'}>
              <Text fontWeight={"bold"} mb={5}>
                Payments Workflows That Fit Your Internal Business Processes
              </Text>
              Customizable maker-checker workflows that align with your approval
              hierarchy
            </Box>
            <Box fontSize={"xs"} borderRight={'1px'} mr='4' pr={'4'}>
              <Text fontWeight={"bold"} mb={3}>
                Single and Bulk Payments Across Multiple Financial Institutions
              </Text>
              Transfer funds to up to 5,000 beneficiaries across multiple Bank
              accounts
            </Box>
            <Box fontSize={"xs"}>
              <Text fontWeight={"bold"} mb={5}>
                Make Payments from Multiple Bank Accounts
              </Text>
              Register multiple Bank accounts across Banks for funding payments
            </Box>
          </HStack>

          <Box fontSize={"xs"} pl={'10%'} mt={10}>
            <NeedHelp />
            <Box />
          </Box>
        </Box>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          //   borderRadius={{ base: "none", sm: "xl" }}
          color={"gray.500"}
        >
          <Stack spacing="6">
            <Stack spacing="6" direction={"column"}>
              <AutopayLogo />
              <Heading as={h2} size="lg" color={"#353F50"}>
                Welcome to AutoPay
              </Heading>
              <Text color={"#5F738C"}>
                Please enter the below credentials to log in
              </Text>

              <FormControl width={{base : '100%'}}>
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
            <HStack justify={{base : "center", md: "space-between" }}>
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" size="sm">
                Reset Password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button bg={"#A8D6EF"} color={"white"}>
                Log in
              </Button>
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
      </SimpleGrid>
    </Container>
  );
}

export default Login;