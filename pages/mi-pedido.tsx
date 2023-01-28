import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { Layout } from "../components/layouts";

export const MiPedido: NextPage = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6">Mi pedido</Typography>
      </Box>
    </Layout>
  );
};

export default MiPedido;
