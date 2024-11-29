import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import UsersService from "../services/UsersService";
import GroupIcon from "@mui/icons-material/Group";

// Custom styles
const useStyles = makeStyles({
  tableRow: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f0f0f0", // Row highlight on hover
    },
  },
  orderSummary: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center align content
    justifyContent: "center", // Center align vertically
    gap: "4px", // Add spacing between products and total price
  },
  orderSummaryRow: {
    textAlign: "center",
  },
  detailItem: {
    marginBottom: "8px",
  },
});

export default function Users() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await UsersService.getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteUser = async () => {
    try {
      const remainingUsers = await UsersService.deleteUser(selectedUser.userId);
      setUsers(remainingUsers);
      setSelectedUser(null);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <PageHeader
        title="Users"
        subTitle="Manage all users"
        icon={<GroupIcon />}
      />
      <div style={{ margin: "20px" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "#d9d7d7" }}>
                <TableCell align="center">User ID</TableCell>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Order Summary</TableCell>
                <TableCell align="center">Mobile No.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.userId}
                  className={classes.tableRow}
                  onClick={() => handleRowClick(user)}
                >
                  <TableCell align="center">{user.userId}</TableCell>
                  <TableCell align="center">{user.username}</TableCell>
                  <TableCell align="center" className={classes.orderSummary}>
                    <div className={classes.orderSummaryRow}>
                      <strong>Products:</strong>{" "}
                      {user.orderSummary.products.join(", ")}
                    </div>
                    <div className={classes.orderSummaryRow}>
                      <strong>Total Price:</strong> $
                      {user.orderSummary.totalPrice.toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell align="center">{user.mobile}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* User Details Dialog */}
      <Dialog
        open={Boolean(selectedUser)}
        onClose={() => setSelectedUser(null)}
      >
        {selectedUser && (
          <>
            <DialogTitle>User Details</DialogTitle>
            <DialogContent>
              {[
                { label: "User ID", value: selectedUser.userId },
                { label: "Username", value: selectedUser.username },
                {
                  label: "Order Summary",
                  value: (
                    <>
                      <div>
                        <strong>Products:</strong>{" "}
                        {selectedUser.orderSummary.products.join(", ")}
                      </div>
                      <div>
                        <strong>Total Price:</strong> $
                        {selectedUser.orderSummary.totalPrice.toFixed(2)}
                      </div>
                    </>
                  ),
                },
                { label: "Mobile Number", value: selectedUser.mobile },
                { label: "Email Address", value: selectedUser.email },
                { label: "Address", value: selectedUser.address },
              ].map((detail, index) => (
                <div key={index} className={classes.detailItem}>
                  <strong>{detail.label}:</strong> {detail.value}
                </div>
              ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedUser(null)}>Close</Button>
              <Button color="error" onClick={handleDeleteUser}>
                Delete
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}
