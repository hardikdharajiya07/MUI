// import React, { useState } from "react";
// import {
//   Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Paper, TablePagination
// } from "@mui/material";

// const students = [
//   { name: "Hardik", marks: 85 },
//   { name: "Amit", marks: 72 },
//   { name: "Neha", marks: 91 },
//   { name: "Riya", marks: 68 },
//   { name: "Karan", marks: 77 }
// ];

// export default function StuTable() {
//   const [page, setPage] = useState(0);

//   return (
//     <TableContainer component={Paper} sx={{ maxWidth: 400, m: "40px auto" }}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell><b>Name</b></TableCell>
//             <TableCell><b>Marks</b></TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {students.slice(page * 2, page * 2 + 2).map((s, i) => (
//             <TableRow key={i}>
//               <TableCell>{s.name}</TableCell>
//               <TableCell>{s.marks}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       <TablePagination
//         component="div"
//         count={students.length}
//         rowsPerPage={2}
//         page={page}
//         onPageChange={(e, p) => setPage(p)}
//         rowsPerPageOptions={[]}
//       />
//     </TableContainer>
//   );
// }


import React, { useState } from "react";
import {
  Table, TableBody, TableCell,
  TableHead, TableRow, Paper, Button
} from "@mui/material";

const students = [
  { name: "Hardik", marks: 85 },
  { name: "Amit", marks: 72 },
  { name: "Neha", marks: 91 },
  { name: "Riya", marks: 68 },
   { name: "Hardik", marks: 85 },
  { name: "Amit", marks: 72 },
  { name: "Neha", marks: 91 },
  { name: "Riya", marks: 68 }
];

export default function StuTable() {
  const [page, setPage] = useState(0);

  return (
    <Paper sx={{ width: 300, m: "40px auto", p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Marks</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {students.slice(page * 2, page * 2 + 2).map((s, i) => (
            <TableRow key={i}>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.marks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button disabled={page === 0} onClick={() => setPage(page - 1)}>
        Prev
      </Button>
      <Button disabled={page === 1} onClick={() => setPage(page + 1)}>
        Next
      </Button>
    </Paper>
  );
}
