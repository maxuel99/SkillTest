import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const options = ["Dashboard", "Table"];

const ITEM_HEIGHT = 48;

function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="menu"
        size="large"
        edge="start"
        color="inherit"
        sx={{ mr: 2 }}
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "15ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option === "Table" ? (
              <Link
                to="/table"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                }}
              >
                {option}
              </Link>
            ) : (
              <Link
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                }}
              >
                {option}
              </Link>
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default LongMenu;
