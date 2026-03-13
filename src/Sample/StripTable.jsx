import React from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from "@mui/material";

const users = [
  { name: "Hardik", email: "hardik@gmail.com", role: "Admin" },
  { name: "Amit", email: "amit@gmail.com", role: "Manager" },
  { name: "Neha", email: "neha@gmail.com", role: "User" }
];

export default function StripTable() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 500, m: "40px auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Email</b></TableCell>
            <TableCell><b>Role</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((u, i) => (
            <TableRow
              key={i}
              sx={{ backgroundColor: i % 2 === 0 ? "pink" : "white" }}
            >
              <TableCell>{u.name}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
