import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Grid, TableSortLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableHead from "@mui/material/TableHead";

export default function WatchlistTableHead(props) {
  const { numOfNotes, order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell>
            <Grid container sx={{ height: "20px" }} />
            <Grid
              container
              display="flex"
              direction="column"
              alignItems="flex-start"
            >
              <Grid item>
                <TableSortLabel
                  active={orderBy === "symbol"}
                  direction={orderBy === "symbol" ? order : "asc"}
                  onClick={createSortHandler("symbol")}
                >
                  <Typography variant={"body2"}>
                    {"Note ( " + numOfNotes + " )"}
                  </Typography>
                </TableSortLabel>
              </Grid>
              <Grid item display="flex" justifyContent="flex-end">
                <TableSortLabel
                  active={orderBy === "price"}
                  direction={orderBy === "price" ? order : "asc"}
                  onClick={createSortHandler("price")}
                >
                  <Typography variant={"body2"}>Price per Note ($)</Typography>
                </TableSortLabel>
              </Grid>
            </Grid>
          </TableCell>

          <TableCell>
            <Grid container sx={{ height: "20px" }} />
            <TableSortLabel
              active={orderBy === "issued"}
              direction={orderBy === "issued" ? order : "asc"}
              onClick={createSortHandler("issued")}
            >
              <Typography variant={"body2"}>Total Issued</Typography>
            </TableSortLabel>
          </TableCell>

          <TableCell>
            <Box sx={{ borderBottom: "none", padding: "0" }}>
              <Grid container sx={{ height: "20px" }} justifyContent="center">
                <Typography>Minimum Investment Amount</Typography>
              </Grid>

              <Grid
                container
                display="flex"
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={6} display="flex" justifyContent="center">
                  <TableSortLabel
                    active={orderBy === "min_invest"}
                    direction={orderBy === "min_invest" ? order : "asc"}
                    onClick={createSortHandler("min_invest")}
                  >
                    <Typography variant={"body2"}>Initial</Typography>
                  </TableSortLabel>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="center">
                  <TableSortLabel
                    active={orderBy === "notes_min_topup"}
                    direction={orderBy === "notes_min_topup" ? order : "asc"}
                    onClick={createSortHandler("notes_min_topup")}
                  >
                    <Typography variant={"body2"}>Increment</Typography>
                  </TableSortLabel>
                </Grid>
              </Grid>
            </Box>
          </TableCell>

          <TableCell>
            <Box sx={{ borderBottom: "none", padding: "0" }}>
              <Grid container sx={{ height: "20px" }} justifyContent="center">
                <Typography>Subscription</Typography>
              </Grid>

              <Grid
                container
                display="flex"
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={6} display="flex" justifyContent="center">
                  <TableSortLabel
                    active={orderBy === "start_subscribe_at"}
                    direction={orderBy === "start_subscribe_at" ? order : "asc"}
                    onClick={createSortHandler("start_subscribe_at")}
                  >
                    <Typography variant={"body2"}>Start</Typography>
                  </TableSortLabel>
                </Grid>

                <Grid item xs={6} display="flex" justifyContent="center">
                  <TableSortLabel
                    active={orderBy === "end_subscribe_at"}
                    direction={orderBy === "end_subscribe_at" ? order : "asc"}
                    onClick={createSortHandler("end_subscribe_at")}
                  >
                    <Typography variant={"body2"}>Deadline</Typography>
                  </TableSortLabel>
                </Grid>
              </Grid>
            </Box>
          </TableCell>

          <TableCell>
            <Box sx={{ borderBottom: "none", padding: "0" }}>
              <Grid container sx={{ height: "20px" }} justifyContent="center">
                <Typography>Your Investment</Typography>
              </Grid>

              <Grid
                container
                display="flex"
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={6} display="flex" justifyContent="center">
                  <TableSortLabel
                    active={orderBy === "start_at"}
                    direction={orderBy === "start_at" ? order : "asc"}
                    onClick={createSortHandler("start_at")}
                  >
                    <Typography variant={"body2"}>Start Date</Typography>
                  </TableSortLabel>
                </Grid>

                <Grid item xs={6} display="flex" justifyContent="center">
                  <TableSortLabel
                    active={orderBy === ".mature_at"}
                    direction={orderBy === "mature_at" ? order : "asc"}
                    onClick={createSortHandler("mature_at")}
                  >
                    <Typography variant={"body2"}>Maturity Date</Typography>
                  </TableSortLabel>
                </Grid>
              </Grid>
            </Box>
          </TableCell>
        </TableRow>
      </TableHead>
    </>
  );
}
