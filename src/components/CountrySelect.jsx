import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import India from "./../images/india.png";
import Australia from "./../images/australia.png";
import France from "./../images/france.png";
import Russia from "./../images/russia.png";
import UK from "./../images/uk.png";
import USA from "./../images/usa.png";
import { createTheme } from "@mui/material/styles";

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
    <Box sx={{ minWidth: 200 }}>
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
          <MenuItem value={India}>
            <div className="flex items-center">
              <img src={India} /> India
            </div>
          </MenuItem>
          <MenuItem value={USA}>
            <div className="flex items-center">
              <img src={USA} /> USA
            </div>
          </MenuItem>
          <MenuItem value={Australia}>
            <div className="flex items-center">
              <img src={Australia} /> Australia
            </div>
          </MenuItem>
          <MenuItem value={Russia}>
            <div className="flex items-center">
              <img src={Russia} /> Russia
            </div>
          </MenuItem>
          <MenuItem value={France}>
            <div className="flex items-center">
              <img src={France} /> France
            </div>
          </MenuItem>
          <MenuItem value={UK}>
            <div className="flex items-center">
              <img src={UK} /> United Kingdom
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
