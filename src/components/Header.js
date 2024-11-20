import {
  AppBar,
  Toolbar,
  Grid2,
  InputBase,
  IconButton,
  Badge,
} from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid2 container>
          <Grid2 item>
            <InputBase />
          </Grid2>
          <Grid2 item sm></Grid2>
          <Grid2 item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlineIcon />
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
