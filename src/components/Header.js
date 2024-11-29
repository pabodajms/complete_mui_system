import React from "react";
import {
  AppBar,
  Toolbar,
  Grid2,
  InputBase,
  IconButton,
  Badge,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)",
        transform: "translateZ(0)",
      }}
    >
      <Toolbar>
        <Grid2 container alignItems="center">
          {/* Search Input */}
          <Grid2 item>
            <InputBase
              placeholder="Search here"
              sx={{
                opacity: 0.6,
                padding: "0px 8px",
                fontSize: "0.8rem",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
                "&:MuiSvgIcon-root": {
                  marginRight: "8px",
                },
              }}
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid2>

          {/* Spacer */}
          <Grid2 xs></Grid2>

          {/* Icons Section */}
          <Grid2 item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlineIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <LogoutIcon />
            </IconButton>
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
}
