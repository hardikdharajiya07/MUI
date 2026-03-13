import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from "@mui/material";

const students = [
  { name: "Hardik", marks: 85 },
  { name: "Amit", marks: 72 },
  { name: "Neha", marks: 91 },
  { name: "Riya", marks: 68 }
];

export default function Student() {
  const [sortBy, setSortBy] = useState("name");
  const [asc, setAsc] = useState(true);

  const sorted = [...students].sort((a, b) => {
    if (sortBy === "name")
      return asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    return asc ? a.marks - b.marks : b.marks - a.marks;
  });

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 400, m: "40px auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={() => { setSortBy("name"); setAsc(!asc); }}>
              <b>Name (click)</b>
            </TableCell>
            <TableCell onClick={() => { setSortBy("marks"); setAsc(!asc); }}>
              <b>Marks (click)</b>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sorted.map((s, i) => (
            <TableRow key={i}>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.marks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
