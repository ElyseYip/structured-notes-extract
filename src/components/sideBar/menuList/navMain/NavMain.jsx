import React, { forwardRef } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import NavCollapse from "../navCollapse/NavCollapse";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";

export default function NavMain(props) {
  const { item } = props;

  let itemTarget = "_self";
  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} to={item.url} target={itemTarget} />
    )),
  };

  const items =
    item?.children !== undefined &&
    item?.children?.map((menu) => {
      switch (menu.type) {
        case "collapse":
          return <NavCollapse key={menu.id} collapseItem={menu} level={1} />;
        default:
          return (
            <Typography key={menu.id} variant="h6" color="error" align="center">
              Menu Items Error
            </Typography>
          );
      }
    });

  return (
    <>
      <List
        subheader={
          item.title && (
            <ListItemButton
              {...listItemProps}
              color="inherit"
              sx={{
                mb: 0.5,
                alignItems: "flex-start",
                py: 1,
                pl: "24px",
              }}
            >
              <Typography color="#FCF6F5FF">{item.title}</Typography>
            </ListItemButton>
          )
        }
      >
        {items}
      </List>
    </>
  );
}
