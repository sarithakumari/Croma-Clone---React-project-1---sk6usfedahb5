import { Box, Container, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getOrderHistory } from "../../helper/getOrderHistory";
import OrdersCard from "./OrdersCard";

function Orders() {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    getOrderHistory(userToken).then((data) => {
      if (data?.status === "success") {
        setOrders(data?.data);
      }
    });
  }, []);

  console.log("orders:", orders);
//   const date = new Date(orders[0].createdAt);
//   console.log(date)
//   const localTime = date.toLocaleDateString();
//   console.log(localTime);

  return (
    <Box flexGrow={1} sx={{ paddingTop: "6rem" }}>
      <Container maxWidth="lg">
        <>
          <Typography
            variant="h5"
            component="p"
            sx={{ fontWeight: "700", borderRadius: 1, padding: "1rem 0" }}
          >
            My Orders
          </Typography>
          <Divider sx={{borderColor: "#353535"}} />

          <Box sx={{ marginTop: 1, width: "100%" }}>
            {orders?.map((item, index) => (
              <OrdersCard key={index} item={item} />
            ))}
          </Box>
        </>
      </Container>
    </Box>
  );
}

export default Orders;
