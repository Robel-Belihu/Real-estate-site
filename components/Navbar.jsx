import Link from "next/link";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  IconButton,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

function Navbar() {
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.200">
      <Box fontSize="3xl" color="brown" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Estatecoge
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            fontSize="3xl"
            as={IconButton}
            icon={<FcMenu />}
            variant="outlined"
            color="red.400"
          />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy a Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent a Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

export default Navbar;
