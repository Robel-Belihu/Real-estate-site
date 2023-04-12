import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { wrap } from "framer-motion";

export function Banner({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imgUrl,
}) {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imgUrl} width={500} height={400} alt="banner" />

      <Box p="5">
        <Text color="gray.400" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text color="gray.400" fontSize="3xl" fontWeight="bold">
          {title1} <br /> {title2}
        </Text>
        <Text
          color="gray.400"
          fontSize="lg"
          paddingTop="3"
          paddingBottom="3"
          fontWeight="medium"
        >
          {desc1} <br /> {desc2}
        </Text>
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
}

export default function Home() {
  return (
    <Box>
      <h3>worked</h3>
      <Banner
        purpose="Rent a home"
        title1="Rental homes for"
        title2="Everyone"
        desc1="explore Apartments, Villas and Homes"
        buttonText="Find out the ratings"
        linkName="Header"
        imgUrl="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />

      <Flex flexWrap="wrap"></Flex>

      <Banner
        purpose="Buy a home"
        title1="Find and buy the home of "
        title2="your dreams"
        desc1="explore Apartments, Villas and Homes"
        buttonText="Explore buying"
        linkName="Header"
        imgUrl="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
    </Box>
  );
}
