import Image from "next/legacy/image";
import { Box, Button, Card, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Stars } from "./Stars";

export const Item = ({ title, imageUrl, price }) => {
  return (
    <Card
      sx={{ height: "28rem", backgroundColor: "#eee", position: "relative" }}
    >
      <Image src={imageUrl} width={680} height={1020} alt="" />
      <Box sx={{ padding: "0.5rem" }}>
        <Typography variant="subtitle2">{title}</Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0rem",
          padding: "0.5rem",
        }}
      >
        <Typography variant="h6" sx={{ color: "gray" }}>
          ${price}
        </Typography>
        <Stars />
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            disableElevation
            color="info"
            size="small"
            sx={{
              textTransform: "none",
            }}
            endIcon={<AddCircleOutlineIcon />}
            onClick={() => {}}
          >
            Agregar al carrito
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
