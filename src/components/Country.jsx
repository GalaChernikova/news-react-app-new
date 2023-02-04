import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { createTheme } from "@mui/material/styles";
import India from "./../images/india.png"
import Australia from "./../images/australia.png"
import France from "./../images/france.png"
import Russia from "./../images/russia.png"
import UK from "./../images/uk.png"
import USA from "./../images/usa.png"

const theme = createTheme({
  palette: {
    primary: {
      main: "#475569",
    },
  },
});

export default function Country() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="font-sans text-slate-600">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="primary"
        variant="main"
      >
        COUNTRY
        <MdOutlineArrowDropDown />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}><img src={India}/> India</MenuItem>
        <MenuItem onClick={handleClose}><img src={USA}/> USA</MenuItem>
        <MenuItem onClick={handleClose}><img src={Australia}/> Australia</MenuItem>
        <MenuItem onClick={handleClose}><img src={Russia}/> Russia</MenuItem>
        <MenuItem onClick={handleClose}><img src={France}/> France</MenuItem>
        <MenuItem onClick={handleClose}><img src={UK}/> United Kingdom</MenuItem>
      </Menu>
    </div>
  );
}

