import React, { useState } from 'react';
import ImageInput from './ImageInput';
import Loading from './Loading';
import { isFormValid } from '../../../functions';
import { imageUplodaer } from '../../../functions';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

export const Uploader = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    tipo: '',
  });
  const [errorObj, setErrorObj] = useState({
    title: false,
    description: false,
    price: false,
    image: false,
    tipo: false,
  });
  const [loading, setLoading] = useState(false);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    const inputError = !value;

    const newErrorObj = { ...errorObj, [name]: inputError };
    setErrorObj(newErrorObj);
  };

  const onImageChange = (img) => {
    setImage(img);
    const imageError = !img;
    const newErrorObj = { ...errorObj, image: imageError };
    setErrorObj(newErrorObj);
  };

  const formSubmit = () => {
    if (!isFormValid(formData, image, setErrorObj)) {
      return;
    }
    imageUplodaer(image, formData, setLoading, setImage, setFormData);
  };

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <form>
          <div>
            <FormControl fullWidth color="secondary">
              <InputLabel id="tipo">Tipo</InputLabel>
              <Select
                // labelId="tipo"
                id="selector"
                value={formData.tipo}
                name="tipo"
                label="Tipo"
                onChange={onInputChange}
              >
                <MenuItem value={'bodas y bautizos'}>bodas y bautizos</MenuItem>
                <MenuItem value={'cumpleaños'}>cumpleaños</MenuItem>
                <MenuItem value={'enamorados'}>enamorados</MenuItem>
                <MenuItem value={'navidad'}>navidad</MenuItem>
              </Select>
            </FormControl>
            <p className={errorObj.tipo ? 'error' : 'notError'}>
              tipo required
            </p>
            <br></br>
            <div className="inputDiv">
              <input
                type="text"
                name="title"
                value={formData.title}
                maxLength={50}
                onChange={onInputChange}
                placeholder={'Título'}
              />
            </div>
            <p className={errorObj.title ? 'error' : 'notError'}>
              title required
            </p>
          </div>
          <div>
            <div className="inputDiv">
              <textarea
                name="description"
                value={formData.description}
                maxLength={200}
                onChange={onInputChange}
                placeholder={'Descripción'}
                rows={7}
              />
            </div>
            <p className="notError">field not required</p>
          </div>
          <div>
            <div className="inputDiv">
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={onInputChange}
                placeholder={'Precio'}
              />
            </div>
            <p className={errorObj.price ? 'error' : 'notError'}>
              price required
            </p>
          </div>

          <div>
            <ImageInput onChange={onImageChange} image={image} />
            <p className={errorObj.image ? 'error' : 'notError'}>
              image required
            </p>
          </div>
        </form>
        <Box sx={{ padding: '2rem' }}>
          {loading ? (
            <Loading />
          ) : (
            <Button
              variant={'outlined'}
              onClick={formSubmit}
              color={'secondary'}
            >
              enviar
            </Button>
          )}
        </Box>
      </Box>

      <style jsx>
        {`
          form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 1.5rem;
            padding: 1rem;
            background-color: rgb(245, 243, 255);
            border-radius: 1rem;
            min-height: 63vh;
          }
          form > div {
            margin: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          }
          .inputDiv {
            position: relative;
            display: flex;
            justify-content: center;
            width: 19rem;
          }
          input,
          textarea {
            width: 14rem;
            border: antiquewhite;
            font-size: 1rem;
            font-family: inherit;
            border-radius: 0.2rem;
            text-indent: 1rem;
          }
          i {
            position: absolute;
            right: 0rem;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .error {
            color: red;
            font-size: 0.7rem;
            position: relative;
            top: 0px;
            left: 0px;
            height: 0px;
          }
          .notError {
            visibility: hidden;
            font-size: 0.7rem;
            position: relative;
            top: 0px;
            left: 0px;
            height: 0px;
          }
        `}
      </style>
    </>
  );
};
