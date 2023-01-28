import Image from "next/legacy/image";
import { Card, Grid, Typography } from "@mui/material";

export const ItemB = ({ reserva }: any) => {
  const { title, price, imageUrl } = reserva;
  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          backgroundColor: "#eee",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Image src={imageUrl} width={680} height={1020} alt="" />
          </Grid>
          <Grid item xs={8}>
            <Typography>{title}</Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
