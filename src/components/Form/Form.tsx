import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
  return (
    <div>
      <form action="">
        <TextField id="outlined-basic" label="Event" variant="outlined" />
        <Button variant="contained">Add Event</Button>;
      </form>
    </div>
  );
};

export default Form;
