import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

const users = [
  { name: "Hardik", email: "hardik@gmail.com", role: "Admin" },
  { name: "Amit", email: "amit@gmail.com", role: "Manager" },
  { name: "Neha", email: "neha@gmail.com", role: "User" }
];

export default function TableDemo() {
  return (
    <TableContainer component={Paper} style={{ maxWidth: 600, margin: "40px auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Email</b></TableCell>
            <TableCell><b>Role</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
