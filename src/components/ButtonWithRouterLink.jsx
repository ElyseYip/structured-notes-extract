import React from "react";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ButtonWithRouterLink(props) {
  const {
    name,
    path,
    variant,
    isReadOnly = false,
    isBuyMoreAllowed = true,
    noteData = {},
  } = props;

  const nav = useNavigate();

  const handleClick = () => {
    nav(path, {
      state: {
        isReadOnly: isReadOnly,
        isBuyMoreAllowed: isBuyMoreAllowed,
        noteData: noteData,
      },
    });
  };

  return (
    <Grid container>
      <Button
        onClick={handleClick}
        variant={variant}
        fullWidth
        sx={{ padding: "5px", mb: "1.5px" }}
        disabled
      >
        {name}
      </Button>
    </Grid>
  );
}
