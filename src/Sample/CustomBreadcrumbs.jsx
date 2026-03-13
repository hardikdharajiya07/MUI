import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function CustomBreadcrumbs() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('Breadcrumb clicked');
  };

  return (
    <Stack spacing={2} sx={{ p: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
          onClick={handleClick}
        >
          Home
        </Link>

        <Link
          underline="hover"
          color="inherit"
          href="/dashboard"
          onClick={handleClick}
        >
          Dashboard
        </Link>

        <Typography color="text.primary">
          Reports
        </Typography>
      </Breadcrumbs>
    </Stack>
  );
}
