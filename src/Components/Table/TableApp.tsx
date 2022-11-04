import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import NavApp from "../AppBar/AppBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TableApp() {
  // eslint-disable-next-line
  const [token, setToken] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/8c3dfcf2-a4a6-4b09-b46d-15199d7faeab")
      .then((response) => {
        setToken(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <NavApp />
      <div>
        <TableContainer sx={{ padding: "2rem" }} component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
                <StyledTableCell align="right">Volume</StyledTableCell>
                <StyledTableCell align="right">Current Price</StyledTableCell>
                <StyledTableCell align="right">High 24</StyledTableCell>
                <StyledTableCell align="right">Low 24</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {token.map((item, index) => (
                <StyledTableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      {item.id}
                      <img src={item.image} alt={item.name} width="25px" />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.total_volume}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.current_price}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.high_24h}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.low_24h}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default TableApp;
