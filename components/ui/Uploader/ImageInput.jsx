/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

export default function ImageInput(props) {
  const [localImageUrl, setLocalImageUrl] = useState('');

  // cuando cambia props.image devuelve una url local. Se utilizó useEffect para acceder a window
  useEffect(() => {
    if (props.image) {
      const url = window.URL.createObjectURL(props.image);
      setLocalImageUrl(url);
    } else {
      setLocalImageUrl('');
    }
  }, [props.image]);

  // determina si el archivo es una imagen
  const isFileImage = (file) => {
    return file.type.split('/')[0] === 'image';
  };

  // comprime y dimensiona la imagen ingresada y la entrega al componente padre
  const handleChange = (e) => {
    const image = e.target.files[0];
    if (!image) {
      return;
    }
    if (!isFileImage(image)) {
      alert('El archivo seleccionado no es una imagen.');
      props.onChange(null);
      return;
    }
    if (image.name.includes(' ')) {
      alert('El nombre del archivo no debe incluir espacios');
      props.onChange(null);
      return;
    }
    props.onChange(image);
  };

  return (
    <>
      <div className="main">
        <IconButton aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" onChange={handleChange} />
          <PhotoCamera sx={{ fontSize: '2.5rem', color: '#555' }} />
        </IconButton>
        {localImageUrl && (
          <img src={localImageUrl} height="200" alt="producto" />
        )}
        {props.image && (
          <p className="imageName">Imagen seleccionada: {props.image.name}</p>
        )}
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        img {
          margin-top: 1rem;
        }
        .imageName {
          font-size: 0.75rem;
        }
      `}</style>
    </>
  );
}
