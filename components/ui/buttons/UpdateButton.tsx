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
      sx={{ textTransform: 'none', position: 'absolute', bottom: '3rem' }}
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
