/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Compressor from 'compressorjs';
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
  const compress = (e) => {
    const image = e.target.files[0];
    if (!image) {
      return;
    }
    if (!isFileImage(image)) {
      alert('El archivo seleccionado no es una imagen.');
      props.onChange(null);
      return;
    }

    // eslint-disable-next-line no-new
    new Compressor(image, {
      quality: 1, // its not recommended to go below 0.6.
      width: 300,
      convertSize: 10000,
      success: (compressedResult) => {
        props.onChange(compressedResult);
      },
    });
  };

  return (
    <>
      <div className="main">
        <IconButton aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" onChange={compress} />
          <PhotoCamera sx={{ fontSize: '2.5rem', color: '#555' }} />
        </IconButton>
        {/* <label>
          <div className="imageSelectButton">
            <PhotoCameraIcon />
          </div>

          <input
            accept="image/*,capture=camera"
            capture="camera"
            type="file"
            onChange={compress}
            style={{ display: 'none' }}
          />
        </label> */}
        {localImageUrl && (
          <img src={localImageUrl} height="200" alt="caja de suculentas" />
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
        .imageSelectButton {
          background-color: rgb(196, 181, 253);
          border: 1px solid rgb(167, 139, 250);
          color: rgb(55, 65, 81);
          padding: 0.5rem 1rem;
          border-radius: 0.3rem;
        }
        .imageSelectButton:hover {
          background-color: rgb(167, 139, 250);
          border: 1px solid rgb(139, 92, 246);
          color: rgb(15, 16, 19);
          outline: none;
        }
        .imageSelectButton:focus {
          background-color: rgb(175, 100, 175);
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
