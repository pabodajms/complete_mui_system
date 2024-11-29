// const mockOrders = [
//   {
//     orderId: "0010",
//     customerId: "078U",
//     products: [
//       {
//         productId: "P01",
//         name: "Stale Maxi - Gown",
//         image: "https://via.placeholder.com/100",
//         quantity: 1,
//         price: "$120.00",
//       },
//     ],
//     status: "Pending",
//     mobile: "0771234567",
//     pinCode: "11000",
//     orderedDate: "2024-03-25",
//     totalDiscount: "$10.00",
//     totalAmount: "$110.00",
//   },
//   {
//     orderId: "0020",
//     customerId: "023U",
//     products: [
//       {
//         productId: "P02",
//         name: "Stylish Heels",
//         image: "https://via.placeholder.com/100",
//         quantity: 1,
//         price: "$85.00",
//       },
//     ],
//     status: "Pending",
//     mobile: "0719876543",
//     pinCode: "10250",
//     orderedDate: "2024-03-25",
//     totalDiscount: "$5.00",
//     totalAmount: "$80.00",
//   },
// ];

// const OrderService = {
//   getOrders: async () => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(mockOrders), 500); // Simulate network delay
//     });
//   },

//   updateOrderStatus: async (orderId, newStatus) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const updatedOrders = mockOrders.map((order) =>
//           order.orderId === orderId ? { ...order, status: newStatus } : order
//         );
//         resolve(updatedOrders);
//       }, 500); // Simulate network delay
//     });
//   },

//   deleteOrder: async (orderId) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const remainingOrders = mockOrders.filter(
//           (order) => order.orderId !== orderId
//         );
//         resolve(remainingOrders);
//       }, 500); // Simulate network delay
//     });
//   },
// };

// export default OrderService;

const mockOrders = [
  {
    orderId: "0010",
    customerId: "078U",
    products: [
      {
        productId: "P01",
        name: "Stale Maxi - Gown",
        image: "https://via.placeholder.com/100",
        quantity: 1,
        price: "$120.00",
      },
    ],
    status: "Pending",
    mobile: "0771234567",
    pinCode: "11000",
    orderedDate: "2024-03-25",
    totalDiscount: "$10.00",
    totalAmount: "$110.00",
  },
  {
    orderId: "0020",
    customerId: "023U",
    products: [
      {
        productId: "P02",
        name: "Stylish Heels",
        image: "https://via.placeholder.com/100",
        quantity: 1,
        price: "$85.00",
      },
    ],
    status: "Pending",
    mobile: "0719876543",
    pinCode: "10250",
    orderedDate: "2024-03-25",
    totalDiscount: "$5.00",
    totalAmount: "$80.00",
  },
  {
    orderId: "0030",
    customerId: "045U",
    products: [
      {
        productId: "P03",
        name: "Casual Shirt",
        image: "https://via.placeholder.com/100",
        quantity: 2,
        price: "$40.00",
      },
      {
        productId: "P04",
        name: "Formal Trousers",
        image: "https://via.placeholder.com/100",
        quantity: 1,
        price: "$50.00",
      },
    ],
    status: "Accepted",
    mobile: "0704567890",
    pinCode: "11200",
    orderedDate: "2024-03-26",
    totalDiscount: "$15.00",
    totalAmount: "$115.00",
  },
];

const OrderService = {
  getOrders: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockOrders), 500); // Simulate network delay
    });
  },

  updateOrderStatus: async (orderId, newStatus) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedOrders = mockOrders.map((order) =>
          order.orderId === orderId ? { ...order, status: newStatus } : order
        );
        resolve(updatedOrders);
      }, 500); // Simulate network delay
    });
  },

  deleteOrder: async (orderId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const remainingOrders = mockOrders.filter(
          (order) => order.orderId !== orderId
        );
        resolve(remainingOrders);
      }, 500); // Simulate network delay
    });
  },
};

export default OrderService;
