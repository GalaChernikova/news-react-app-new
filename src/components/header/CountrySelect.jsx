import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import India from "./../../images/india.png";
import Australia from "./../../images/australia.png";
import France from "./../../images/france.png";
import Russia from "./../../images/russia.png";
import UK from "./../../images/uk.png";
import USA from "./../../images/usa.png";
import { createTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#475569",
    },
  },
});

export default function CountrySelect() {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 200 }} className="lg:mx-8 lg:mb-8 md:w-72 md:mx-0 sm:order-last">
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          color="primary"
          focused={false}
        >
          Country
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label=""
          variant="standard"
          onChange={handleChange}
        >
          <MenuItem value={India} disabled>
            <div>
              <NavLink to='/ind/general' className="flex items-center"><img src={India} /> India</NavLink>
            </div>
          </MenuItem>
          <MenuItem value={USA} disabled>
            <div>
              <NavLink to="/usa/general" className="flex items-center"><img src={USA} /> USA</NavLink>
            </div>
          </MenuItem>
          <MenuItem value={Australia} disabled>
            <div>
              <NavLink to="/aus/general" className="flex items-center"><img src={Australia} /> Australia</NavLink>
            </div>
          </MenuItem>
          <MenuItem value={Russia} disabled>
            <div>
              <NavLink to="/rus/general" className="flex items-center"><img src={Russia} /> Russia</NavLink>
            </div>
          </MenuItem>
          <MenuItem value={France} disabled>
            <div>
              <NavLink to="/fr/general" className="flex items-center"><img src={France} /> France</NavLink>
            </div>
          </MenuItem>
          <MenuItem value={UK} selected>
            <div>
              <NavLink to='/uk/general' className="flex items-center"><img src={UK} /> United Kingdom</NavLink>
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
