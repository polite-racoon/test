import { Box, Typography } from "@mui/material";
import { Layout } from "../components/layouts";

export const MiReserva = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6">Mi Reserva</Typography>
      </Box>
    </Layout>
  );
};

export default MiReserva;
