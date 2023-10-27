import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Delete from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export default function BasicPopover({onClick,button_key}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button  style={{width:"25px"}} aria-describedby={id} variant="contained" onClick={handleClick}>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
            <Button id={button_key} onClick={onClick} startIcon={<Delete fontSize='small'/>} color='error'>
                delete
            </Button>
            <Button id={button_key} onClick={onClick} startIcon={<Delete fontSize='small'/>}>
                Modify
            </Button>
      </Popover>
    </div>
  );
}