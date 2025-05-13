import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Grid, TableFooter, TablePagination } from "@mui/material";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";

import { dollarUS, getComparator } from "../../common/common";
import { offeringsList } from "../../mockdata/offerings";
import KeyDateComponent from "../../components/watchList/KeyDateComponent";
import WatchlistTableHead from "../../components/watchList/WatchlistTableHead";
import TablePaginationActions from "../../components/pagination/TablePaginationActions";
import ButtonWithRouterLink from "../../components/ButtonWithRouterLink";

export default function WatchList() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("symbol");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - offeringsList.length) : 0;

  const numOfNotes = offeringsList.length;

  return (
    <Grid sx={{ paddingRight: "10px" }}>
      <Typography variant="h6">Offerings</Typography>
      <Divider sx={{ mb: "20px" }} />

      <TableContainer>
        <Table>
          <WatchlistTableHead
            numOfNotes={numOfNotes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />

          <TableBody>
            {offeringsList
              .slice()
              .sort(getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((note) => {
                return (
                  <TableRow key={note.id}>
                    <TableCell sx={{ padding: 0 }}>
                      <Grid container display="flex">
                        <Grid item xs={10} display="flex">
                          <Box
                            sx={{
                              borderBottom: "none",
                              bgcolor: "#a3b18a",
                              width: "100%",
                              mr: "5px",
                              padding: "16px",
                              minWidth: 200,
                            }}
                          >
                            <Grid container direction="column">
                              <Grid item>
                                <Typography
                                  sx={{
                                    borderBottom: "none",
                                    padding: "0",
                                  }}
                                >
                                  {note.symbol}
                                </Typography>
                              </Grid>

                              <Grid item justifyContent="flex-end">
                                <Typography
                                  sx={{
                                    borderBottom: "none",
                                    padding: "0",
                                  }}
                                >
                                  {dollarUS.format(note.price)}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Typography>{note.desc}</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </TableCell>

                    <TableCell>
                      <Typography
                        align="right"
                        sx={{
                          borderBottom: "none",
                          padding: "0",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {note.issued?.toLocaleString("en-US")}
                      </Typography>
                    </TableCell>

                    <TableCell sx={{ minWidth: 220 }}>
                      <Grid
                        container
                        display="flex"
                        sx={{ justifyContent: "center" }}
                        gap={4}
                      >
                        <Grid item display="flex" justifyContent="center">
                          <Typography>
                            {dollarUS.format(note.min_invest)}
                          </Typography>
                        </Grid>
                        <Grid item display="flex" justifyContent="center">
                          <Typography>
                            {dollarUS.format(note.notes_min_topup)}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>

                    <TableCell sx={{ padding: 0, minWidth: 200 }}>
                      <Grid
                        container
                        display="flex"
                        sx={{ justifyContent: "center" }}
                        gap={1}
                      >
                        <Grid item display="flex" justifyContent="center">
                          <KeyDateComponent data={note.start_subscribe_at} />
                        </Grid>

                        <Grid item display="flex" justifyContent="center">
                          <KeyDateComponent data={note.end_subscribe_at} />
                        </Grid>
                      </Grid>
                    </TableCell>

                    <TableCell sx={{ padding: 0, minWidth: 250 }}>
                      <Grid
                        container
                        display="flex"
                        sx={{ justifyContent: "center" }}
                        gap={1}
                      >
                        <Grid item display="flex" justifyContent="left">
                          <KeyDateComponent data={note.start_at} />
                        </Grid>

                        <Grid item display="flex" justifyContent="left">
                          <KeyDateComponent data={note.maturity} />
                        </Grid>
                      </Grid>
                    </TableCell>

                    <TableCell align="right" sx={{ padding: 0 }}>
                      <Grid item sx={{ margin: "5px" }}>
                        <ButtonWithRouterLink
                          name="More"
                          variant={"contained"}
                          path={`/noteSummary/${note.symbol}`}
                          noteData={note}
                        />
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[
                  5,
                  10,
                  25,
                  {
                    label: "All",
                    value: -1,
                  },
                ]}
                colSpan={7}
                count={offeringsList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Grid>
  );
}
