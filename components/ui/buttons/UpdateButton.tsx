import { Button } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import firebase from '../../../firebase/client';

interface UploadButtonProps {
  id: string;
  newStock: string;
  disabled: boolean;
}

export const UpdateButton = ({ id, newStock, disabled }: UploadButtonProps) => {
  const updateStock = (id: string, newStock: string) => {
    if (Number(newStock) < 0) return alert('El stock no puede ser menor a 0');
    const db = firebase.firestore();
    db.collection('productos')
      .doc(id)
      .update({ stock: Number(newStock) })
      .catch((error) => console.log(error));
  };

  return (
    <Button
      variant="outlined"
      disableElevation
      color="info"
      size="small"
      sx={{
        textTransform: 'none',
        marginTop: '0.5rem',
      }}
      endIcon={<UpdateIcon />}
      onClick={() => {
        updateStock(id, newStock);
      }}
      disabled={disabled}
    >
      Actualizar Stock
    </Button>
  );
};
