import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function RatingCard() {
  const [value, setValue] = React.useState(2);

  return (
    <>
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
    </>
  );
}
