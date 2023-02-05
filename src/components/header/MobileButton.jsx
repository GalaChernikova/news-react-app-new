import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import menu from './../../images/menu.png'
import SearchForm from './SearchForm';
import CountrySelect from './CountrySelect';
import IconLinks from './IconLinks';
import Sidebar from '../Sidebar';

export default function MobileButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <div >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src={menu}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><SearchForm /></MenuItem>
        <MenuItem onClick={handleClose}><CountrySelect /></MenuItem>
        <MenuItem onClick={handleClose}><IconLinks /></MenuItem>
        <MenuItem onClick={handleClose}><Sidebar /></MenuItem>
      </Menu>
    </div>
  );
}