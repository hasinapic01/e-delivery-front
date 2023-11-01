import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

import PopoverPopupState from '../popover/popover';
// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  avatarUrl,
  status,
  handleClick,
  design,
  delivery_address,
  delivery_status,
  order_date,
  onClick,
  button_key
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={design} src={avatarUrl} />
            <Typography variant="subtitle2" noWrap>
              {design}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{delivery_address}</TableCell>

        <TableCell>{order_date}</TableCell>

        <TableCell align="center">{delivery_status}</TableCell>

        <TableCell>
        <PopoverPopupState onClick={onClick} button_key={button_key}/>
        </TableCell>
      </TableRow>
    </>
  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  selected: PropTypes.any,
  design:PropTypes.any,
  delivery_address:PropTypes.any,
  delivery_status:PropTypes.any,
  order_date:PropTypes.any,
  onClick:PropTypes.any,
  button_key:PropTypes.any,
};

/*
<Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
       slotProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>

*/