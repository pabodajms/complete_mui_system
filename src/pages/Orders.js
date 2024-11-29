import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import OrderService from "../services/OdersServics";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await OrderService.getOrders();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (e, orderId) => {
    const newStatus = e.target.value;
    try {
      // Update the specific order status
      const updatedOrders = orders.map((order) =>
        order.orderId === orderId ? { ...order, status: newStatus } : order
      );
      setOrders(updatedOrders); // Update the state with the modified orders array
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleDeleteOrder = async () => {
    try {
      const remainingOrders = await OrderService.deleteOrder(
        selectedOrder.orderId
      );
      setOrders(remainingOrders);
      setSelectedOrder(null);
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleRowClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <>
      <PageHeader
        title="Orders"
        subTitle="Manage all customer orders"
        icon={<ShoppingCartIcon />}
      />
      <div style={{ margin: "20px" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow
                style={{
                  backgroundColor: "#d9d7d7",
                }}
              >
                <TableCell align="center">Order ID</TableCell>
                <TableCell align="center">Customer ID</TableCell>
                <TableCell align="center">Products Ordered</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Change Order Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.orderId}
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      hoveredRow === order.orderId ? "#f0f0f0" : "inherit",
                  }}
                  onClick={() => handleRowClick(order)}
                  onMouseEnter={() => setHoveredRow(order.orderId)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <TableCell align="center">{order.orderId}</TableCell>
                  <TableCell align="center">{order.customerId}</TableCell>

                  <TableCell align="center">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column", // Arrange images vertically
                        alignItems: "center", // Center images horizontally
                        gap: "5px", // Add some space between images
                      }}
                    >
                      {order.products.map((product) => (
                        <img
                          key={product.productId}
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                      ))}
                    </div>
                  </TableCell>

                  <TableCell align="center">
                    {order.products.reduce(
                      (sum, product) => sum + product.quantity,
                      0
                    )}
                  </TableCell>

                  <TableCell align="center">
                    <Select
                      value={order.status}
                      onChange={(e) => handleStatusChange(e, order.orderId)}
                      onClick={(e) => e.stopPropagation()} // Prevent row click
                      style={{
                        color:
                          order.status === "Pending"
                            ? "#1e90ff"
                            : order.status === "Accepted"
                            ? "#32cd32"
                            : order.status === "Failed"
                            ? "#e62b12"
                            : "inherit", // Change font color when selected
                        fontWeight: "bold",
                        border: "none",
                        borderRadius: "40px",
                        padding: "0px 8px",
                      }}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            // Optional: You can add styling to the dropdown here if needed
                          },
                        },
                      }}
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Accepted">Accepted</MenuItem>
                      <MenuItem value="Failed">Failed</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Dialog
        open={Boolean(selectedOrder)}
        onClose={() => setSelectedOrder(null)}
      >
        {selectedOrder && (
          <>
            <DialogTitle>Order Details</DialogTitle>
            <DialogContent>
              {/* Order Information */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                {/* Left Column */}
                <div style={{ flex: 1 }}>
                  {[
                    "Order ID",
                    "Customer ID",
                    "Mobile Number",
                    "Pin Code",
                    "Ordered Date",
                    "Order Status",
                    "Total Discount",
                    "Total Amount",
                  ].map((label, index) => (
                    <Typography key={index}>
                      <strong>{label}:</strong>
                    </Typography>
                  ))}
                </div>
                {/* Right Column */}
                <div style={{ flex: 1 }}>
                  {[
                    selectedOrder.orderId,
                    selectedOrder.customerId,
                    selectedOrder.mobile,
                    selectedOrder.pinCode,
                    selectedOrder.orderedDate,
                    selectedOrder.status,
                    selectedOrder.totalDiscount,
                    selectedOrder.totalAmount,
                  ].map((value, index) => (
                    <Typography key={index}>{value}</Typography>
                  ))}
                </div>
              </div>

              {/* Product Details Table */}
              <Table style={{ marginTop: "20px" }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Product Image</TableCell>
                    <TableCell align="center">Product Name</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedOrder.products.map((product) => (
                    <TableRow key={product.productId}>
                      <TableCell align="center">
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </TableCell>
                      <TableCell align="center">{product.name}</TableCell>
                      <TableCell align="center">{product.quantity}</TableCell>
                      <TableCell align="center">{product.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedOrder(null)}>Close</Button>
              <Button color="error" onClick={handleDeleteOrder}>
                Delete
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}
