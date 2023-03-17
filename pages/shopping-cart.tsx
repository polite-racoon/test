import { useContext } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { Layout } from "../components/layouts";
import { ReservasContext } from "../context/reservas";
import { ItemB } from "../components/ui";

const ShoppingCartPage = () => {
  const { reservas } = useContext(ReservasContext);
  let total = 0;
  reservas.forEach((reserva) => (total += Number(reserva.price)));

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "1rem",
          paddingBottom: "1.5rem",
        }}
      >
        <Typography variant={"h6"}>Mi Carrito</Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {reservas.map((reserva, i) => {
            return <ItemB key={i} reserva={reserva} />;
          })}
        </Grid>
      </Box>
      <Box>
        <Typography>Total</Typography>
        <Typography>{total}</Typography>
      </Box>
    </Layout>
  );
};

export default ShoppingCartPage;
