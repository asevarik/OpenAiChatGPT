import { Box, CircularProgress, FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import "./styles.css";
import { useRef, useState } from "react";
function CutomForm({ onFormSubmit, isLoading }) {
  const userStorytitleRef = useRef();
  const [role, setRole] = useState("developer");

  const handleChange = (event) => {
    setRole(event.target.value);
    console.log("selected value", event.target.value);
  };
  return (
    <div className={`form-container ${isLoading ? "loading" : ""}`}>
      <h1>User Story Creator</h1>
      <form className="form" action="#">
        <TextField
          id="outlined-basic"
          label="Write your user title here"
          variant="outlined"
          sx={{
            backgroundColor: "white",
          }}
          inputRef={userStorytitleRef}
        />
      
        <FormControl>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={role}
            label="Age"
            sx={{
              backgroundColor: "white",
            }}
            onChange={handleChange}
          >
            <MenuItem value={"developer"}>Developer</MenuItem>
            <MenuItem value={"manager"}>Manager</MenuItem>
            <MenuItem value={"tester"}>Tester</MenuItem>
            <MenuItem value={"user"}>User</MenuItem>
            <MenuItem value={"team lead"}>Team Lead</MenuItem>
          </Select>
        </FormControl>
        <button
          type="submit"
          className="submit-btn"
          onClick={() => onFormSubmit(userStorytitleRef.current.value, role)}
        >
          Generate Story
        </button>
      </form>
     {isLoading && <Box sx={{ display: "flex" ,position:"absolute",opacity:"1 !important"}}>
          <CircularProgress />
        </Box>
}
    </div>
  );
}
export default CutomForm;
