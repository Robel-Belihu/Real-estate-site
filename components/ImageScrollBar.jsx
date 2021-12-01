import { useContext } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";
import {
  ScrollMenu,
  VisibilityContext,
} from "react-horizontal-scrolling-menu/dist/types";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function ImageScrollBar() {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  };
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      <Flex justifyContent="center" alignItems="center" marginRight="1">
        <Icon
          as={FaArrowCircleLeft}
          onClick={scrollPrev}
          fontSize="2xl"
          cursor="pointer"
        />
        <Icon
          as={FaArrowCircleRight}
          onClick={scrollNext}
          fontSize="2xl"
          cursor="pointer"
        />
      </Flex>
    </ScrollMenu>
  );
}

export default ImageScrollBar;
