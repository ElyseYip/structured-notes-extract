import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuList from "./menuList/MenuList";
import Drawer from "@mui/material/Drawer";

export default function SideBar() {
  const drawer = (
    <>
      <Box>
        <Toolbar>
          <Typography variant="h5" color="#FCF6F5FF">
            Elyse Yip
          </Typography>
        </Toolbar>
      </Box>
      <MenuList />
    </>
  );
  return (
    <>
      <Drawer
        sx={{
          width: "250px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "250px",
            boxSizing: "border-box",
            bgcolor: "#9E9E9E",
            border: "none",
          },
        }}
        variant="permanent"
        anchor="left"
        className={"sidebar"}
      >
        {drawer}
      </Drawer>
    </>
  );
}
