import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const NavItem: React.FC<{ to: string }> = ({ to, children }) => {
  const location = useLocation();

  const isCurrentUrl = location.pathname === to;

  return (
    <Link to={to}>
      <Text
        fontWeight={isCurrentUrl ? "700" : "400"}
        color={isCurrentUrl ? "blue.700" : ""}
        _hover={{ textDecoration: "underline" }}
      >
        {children}
      </Text>
    </Link>
  );
};

export { NavItem };
