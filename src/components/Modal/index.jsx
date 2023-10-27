import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Grid, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import Iconify from '../iconify';
import Field from '../field/Field';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: '1px ',
  boxShadow: 24,
  p: 4,
  justifyContent:"space-between",
};

export default function Basicmodal({open,handleClose,handleOpen,children,onSubmit,label_button}) {
  return (
    <>
      <Button variant="contained" color="primary" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpen}>
          New 
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={onSubmit} >
        <Stack sx={{direction:"flex",justifyContent:"space-between"}} spacing={3}>
          </Stack>
          {children}
          <Button fullWidth variant="contained" color="primary" type='submit'>
            {label_button}
          </Button>
            </Box>
      </Modal>
    </>
  );
}

Basicmodal.propTypes={
 handleOpen:PropTypes.any,
 handleClose:PropTypes.any,
 onSubmit:PropTypes.any,
 open:PropTypes.any,
 children:PropTypes.array,
 label_button:PropTypes.any

}
/*const mychildren=React.Children.map(children,(child)=>{
  return React.cloneElement(child,{ref:ref})
})*/