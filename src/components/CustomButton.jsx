import { Button, IconButton } from "@mui/material";
import React from "react";
import "./button.styles.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const CustomButton = () => {
  return (
    <div>
      <section id="class variant" className="button-section">
        <h1>Button Variants</h1>
        <Button variant="text">Send</Button>
        <Button variant="contained">Click Me</Button>
        <Button variant="outlined">Send Message</Button>
      </section>

      <section id="color-section" className="button-section">
        <h1>Button Color</h1>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="error" variant="contained">
          Error
        </Button>
        <Button color="warning" variant="contained">
          Warning
        </Button>
        <Button color="info" variant="contained">
          Info
        </Button>
        <Button sx={{ background: "#b7714d", color: "#fff" }}>Random </Button>
      </section>

      <section id="button-size" className="button-section">
        <h1>Button Size</h1>
        <Button variant="contained" color="warning" size="small">
          Small
        </Button>
        <Button variant="contained" color="warning" size="medium">
          Medium
        </Button>
        <Button variant="contained" color="warning" size="large">
          Large
        </Button>
      </section>

      <section className="button-with-icon">
        <h1>Button with icon</h1>
        <Button
          sx={{ textTransform: "capitalize" }}
          variant="outlined"
          color="success"
          endIcon={<EditOutlinedIcon />}
        >
          Edit Product
        </Button>
        <Button
          sx={{ textTransform: "capitalize" }}
          variant="contained"
          color="error"
          startIcon={<DeleteOutlineOutlinedIcon />}
          onClick={() => {
            console.log("Deleted");
            alert("Deleted");
          }}
        >
          Delete Product
        </Button>
      </section>

      <section className="icon-button">
        <h1>Icon Button</h1>
        <IconButton color="error">
          <DeleteOutlineOutlinedIcon />
        </IconButton>

        <IconButton color="primary">
          <EditOutlinedIcon />
        </IconButton>
      </section>
    </div>
  );
};

export default CustomButton;
