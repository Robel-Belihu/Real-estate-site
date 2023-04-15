import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { fetchApi, baseUrl } from "../utils/fetchApi";
import Property from "../components/Property";

export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imgUrl,
}) => {
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
};

const Home = ({ propertiesForSale, propertiesForRent }) => {
  console.log(propertiesForSale, propertiesForRent);
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
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />

      <Flex flexWrap="wrap" style={{ backgroundColor: "black" }}>
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>

      <Banner
        purpose="Buy a home"
        title1="Find and buy the home of "
        title2="your dreams"
        desc1="explore Apartments, Villas and Homes"
        buttonText="Explore buying"
        linkName="Header"
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
};

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
