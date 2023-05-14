import { useState, Dispatch } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import firebase from '../../../firebase/client';
import { getImageNameFromImageUrl } from '../../../functions';

interface DeleteButtonProps {
  id: string;
  imageUrl: string;
}

export const DeleteButton = ({ id, imageUrl }: DeleteButtonProps) => {
  const [disabled, setDisabled] = useState(false);

  const db = firebase.firestore();

  const onDelete = (
    id: string,
    imageUrl: string,
    setDisabled: Dispatch<boolean>
  ) => {
    setDisabled(true);
    const imageName = getImageNameFromImageUrl(imageUrl);
    const desertRef = firebase
      .storage()
      .ref()
      .child(`fotosDeProductos/${imageName}`);

    desertRef
      .delete()
      .then(() => {
        db.collection('productos').doc(id).delete();
      })
      .then(() => {
        console.log('document deleted');
      })
      .catch((error) => {
        console.log(error);
        setDisabled(false);
      });
  };
  return (
    <Button
      variant="outlined"
      disableElevation
      color="info"
      size="small"
      sx={{ textTransform: 'none', position: 'absolute', bottom: '0.5rem' }}
      endIcon={<DeleteIcon />}
      onClick={() => onDelete(id, imageUrl, setDisabled)}
      disabled={disabled}
    >
      Borrar
    </Button>
  );
};
