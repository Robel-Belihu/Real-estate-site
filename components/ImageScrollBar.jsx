import { useContext } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";
import {
  ScrollMenu,
  VisibilityContext,
} from "react-horizontal-scrolling-menu/dist/types";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowCircleLeft}
        onClick={scrollPrev}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginLeft="1">
      <Icon
        as={FaArrowCircleRight}
        onClick={scrollNext}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};
function ImageScrollBar({ data }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          width="910px"
          key={item.id}
          itemID={item.id}
          overflow="hidden"
          p="1"
        >
          <Image
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            alt="property"
            sizes="(max-width: 500px) 100px, (max-width):1024px 400px"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default ImageScrollBar;
