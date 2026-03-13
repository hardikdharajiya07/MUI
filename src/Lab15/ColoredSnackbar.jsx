// Show a colored alert inside Snackbar (Practice all 4 severities: success, info,
// warning, error) (A)
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
export default function ColoredSnackbar() {
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState('success');
    const handleClick = (sev) => () => {
    setSeverity(sev);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
    return (    
    <div>   
        <Button variant="outlined" onClick={handleClick('success')}>    
        Show Success Snackbar
      </Button>
      <Button variant="outlined" onClick={handleClick('info')}>
        Show Info Snackbar
      </Button>
      <Button variant="outlined" onClick={handleClick('warning')}>
        Show Warning Snackbar
        </Button>
        <Button variant="outlined" onClick={handleClick('error')}>
        Show Error Snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          This is a {severity} message!
        </Alert>
        </Snackbar>
    </div>
    );  
}   