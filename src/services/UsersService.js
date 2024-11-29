const usersData = [
  {
    userId: "001",
    username: "Alex Martin",
    orderSummary: {
      products: ["P001", "P005", "P010"], // Product IDs
      totalPrice: 150.0, // Total price
    },
    mobile: "07xxxxxxx",
    email: "abc@gmail.com",
    address: "No. 66, xxxxxxxxx",
  },
  {
    userId: "002",
    username: "John",
    orderSummary: {
      products: ["P002", "P003"], // Product IDs
      totalPrice: 75.5, // Total price
    },
    mobile: "07xxxxxxx",
    email: "john@gmail.com",
    address: "No. 24, xxxxxxxxx",
  },
];

const UsersService = {
  getUsers: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(usersData), 500);
    });
  },
  deleteUser: (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const remainingUsers = usersData.filter(
          (user) => user.userId !== userId
        );
        resolve(remainingUsers);
      }, 500);
    });
  },
};

export default UsersService;
