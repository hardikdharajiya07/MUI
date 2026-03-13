// Create loading screen: (A)
// o CircularProgress centered on screen
// o LinearProgress at top
// o Toggle visibility using a button
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
export default function CircularIndeterminate() {
  const [loading, setLoading] = React.useState(false);
    const handleToggle = () => {
    setLoading(!loading);
    };
    return (    
    <div>   
        <Button variant="outlined" onClick={handleToggle}>
        {loading ? 'Hide' : 'Show'} Loading
      </Button>
      {loading && ( 
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh',
                }}
            >
              <CircularProgress />
            </Box>
        </Box>
      )}
    </div>
    );  
}
