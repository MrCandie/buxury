import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function NavItem({ link, title, icon }) {
  return (
    <NavLink
      to={`/${link}`}
      className={(navData) => (navData.isActive ? "menu-active" : "menu")}
    >
      <Box>{icon}</Box>
      {title}
    </NavLink>
  );
}
