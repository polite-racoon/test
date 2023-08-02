import { useState, Dispatch } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import firebase from '../../../firebase/client';
import { getImageNameFromImageUrl } from '../../../functions';

interface DeleteButtonProps {
  id: string;
  imageUrl: string;
  landscapeImgUrl: string;
}

export const DeleteButton = ({
  id,
  imageUrl,
  landscapeImgUrl,
}: DeleteButtonProps) => {
  const [disabled, setDisabled] = useState(false);

  const db = firebase.firestore();

  const onDelete = async (
    id: string,
    imageUrl: string,
    setDisabled: Dispatch<boolean>
  ) => {
    setDisabled(true);
    const imageName = getImageNameFromImageUrl(imageUrl);
    const landscapeImgName = getImageNameFromImageUrl(landscapeImgUrl);

    const desertRef1 = firebase
      .storage()
      .ref()
      .child(`fotosDeProductos/${imageName}`);

    const desertRef2 = firebase
      .storage()
      .ref()
      .child(`fotosDeProductos/${landscapeImgName}`);

    try {
      await desertRef1.delete();
      await desertRef2.delete();
      await db.collection('productos').doc(id).delete();
      console.log('document deleted');
    } catch (error) {
      console.log(error);
      alert(error);
      setDisabled(false);
    }
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
