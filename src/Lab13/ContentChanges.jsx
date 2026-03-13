
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
export default function ContentChanges() {
  const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
    setValue(newValue);
  }
    return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Dashboard" />
        <Tab label="Users" />
        <Tab label="Settings" />
        </Tabs>
        {value === 0 && <Typography sx={{ p: 2 }}>This is the Dashboard content.</Typography>}
        {value === 1 && <Typography sx={{ p: 2 }}>This is the Users content.</Typography>}
        {value === 2 && <Typography sx={{ p: 2 }}>This is the Settings content.</Typography>}
    </Box>
    );
}   
