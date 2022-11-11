import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { Option } from "@/types";

interface Props {
  options: Option[];
  label: string;
  value: string;
  onHandleSelect: (id: string) => void;
}

export default function BasicSelect({
  options,
  label,
  onHandleSelect,
  value
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    onHandleSelect(selectedValue);
  };

  return (
    <Box sx={{ minWidth: 420 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options.map(({ key, value }) => (
            <MenuItem key={key} value={key}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
