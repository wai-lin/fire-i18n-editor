import React from "react";
import { Link } from "react-router-dom";
import { Flex, HStack, Heading } from "@chakra-ui/react";

import { GoogleLogin } from "./GoogleLogin";
import { NavItem } from "./NavItem";

import { useAuthSubscriber } from "@/hooks/useAuth";

const Header: React.FC = () => {
  const user = useAuthSubscriber();

  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      px="4"
      py="2"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <HStack spacing="4">
        <Link to="/">
          <Heading as="h3" size="md" userSelect="none" cursor="pointer">
            Fire i18n editor
          </Heading>
        </Link>
        {/* Nav Items */}
        {user === null ? null : (
          <HStack spacing="4">
            <NavItem to="/projects">Projects</NavItem>
          </HStack>
        )}
      </HStack>

      <GoogleLogin />
    </Flex>
  );
};

export { Header };
