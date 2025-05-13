import React from "react";
import menuItems from "../menuItems";
import NavMain from "./navMain/NavMain";
import Typography from "@mui/material/Typography";

export default function MenuList() {
  const navItems = menuItems.items.map((item) => {
    switch (item.type) {
      case "main":
        return <NavMain key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
}
