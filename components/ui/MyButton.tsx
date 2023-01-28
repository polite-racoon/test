import { Box, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useContext } from "react";
import { ReservasContext } from "../../context/reservas";

export const MyButton = ({ data }: any) => {
  const { addReserva } = useContext(ReservasContext);
  const { title, price, imageUrl, id } = data;

  return (
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
        onClick={() => {
          addReserva({ title, price, imageUrl, id });
        }}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};
