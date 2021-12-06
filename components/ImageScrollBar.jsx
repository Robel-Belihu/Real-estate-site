import { useContext } from "react";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Text } from "@chakra-ui/react";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
        d={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginLeft="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
        d={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};

export default function ImageSrollbar() {
  return (
    <Box>
      {RightArrow}
      <Text fontSize="36px" color="red">
        Sorry, Failed to load the details. <span>Will be fixed soon</span>
      </Text>
    </Box>
  );
}
