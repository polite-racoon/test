import { Box, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState, useContext } from "react";
import { ReservasContext } from "../../context/reservas";

export const MyButton = ({ data }: any) => {
  const { addReserva } = useContext(ReservasContext);
  const { title, price, imageUrl, id } = data;
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant="contained"
        disableElevation
        color="info"
        size="small"
        disabled={isDisabled}
        sx={{
          textTransform: "none",
        }}
        endIcon={<AddCircleOutlineIcon />}
        onClick={() => {
          addReserva({ title, price, imageUrl, id });
          setIsDisabled(true);
        }}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};
