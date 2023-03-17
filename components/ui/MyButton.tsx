import { Box, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useContext } from "react";
import { ReservasContext } from "../../context/reservas";
import { UIContext } from "../../context/ui";
import { Reserva } from "../../interfaces";

export const MyButton = ({ itemData }: { itemData: Reserva }) => {
  const { addReserva } = useContext(ReservasContext);
  const { openAddToCartModal } = useContext(UIContext);

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
          addReserva(itemData);
          openAddToCartModal();
        }}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};
