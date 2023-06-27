import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function NavItem({ link, title, icon }) {
  return (
    <NavLink to={`/${link}`} className="menu">
      <Box>{icon}</Box>
      {title}
    </NavLink>
  );
}
