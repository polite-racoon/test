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
} from '@mui/material';

export const Uploader = () => {
  const [image, setImage] = useState(null);
  const [landscapeImg, setLandscapeImg] = useState(null);

  const [formData, setFormData] = useState({
    category: '',
    title: '',
    subtitle: '',
    description: '',
    price: '',
  });

  const [errorObj, setErrorObj] = useState({
    category: false,
    title: false,
    subtitle: false,
    description: false,
    price: false,
    image: false,
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

  const onLandscapeImgChange = (img) => {
    setLandscapeImg(img);
  };

  const formSubmit = () => {
    if (!isFormValid(formData, image, setErrorObj)) {
      return;
    }
    imageUplodaer(
      image,
      landscapeImg,
      formData,
      setLoading,
      setImage,
      setLandscapeImg,
      setFormData
    );
  };

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <form>
          <div>
            <FormControl fullWidth color="secondary">
              <InputLabel id="category">Categoría</InputLabel>
              <Select
                // labelId="category"
                id="selector"
                value={formData.category || ''}
                name="category"
                label="Categoría"
                onChange={onInputChange}
              >
                <MenuItem value={'accesorios'}>accesorios</MenuItem>
                <MenuItem value={'plantas'}>plantas</MenuItem>
                <MenuItem value={'galletas'}>galletas</MenuItem>
              </Select>
            </FormControl>
            <p className={errorObj.category ? 'error' : 'notError'}>
              category required
            </p>
            <br></br>
          </div>
          <div>
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
              <input
                type="text"
                name="subtitle"
                value={formData.subtitle}
                maxLength={50}
                onChange={onInputChange}
                placeholder={'Subtítulo (opcional)'}
              />
            </div>
            <p className={'notError'}>optional</p>
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
            <p className={errorObj.category ? 'error' : 'notError'}>
              description required
            </p>
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
            <p>Foto vertical</p>
            <ImageInput onChange={onImageChange} image={image} />
            <p className={errorObj.image ? 'error' : 'notError'}>
              image required
            </p>
          </div>
          <div>
            <p>Foto horizontal</p>
            <ImageInput onChange={onLandscapeImgChange} image={landscapeImg} />
          </div>
        </form>
        <Box sx={{ padding: '2rem' }}>
          {loading ? (
            <Loading />
          ) : (
            <Button
              onClick={formSubmit}
              variant={'outlined'}
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
            margin-top: 0.5rem;
            padding: 2rem;
            background-color: #ddddff;
            border-radius: 1rem;
            min-height: 63vh;
          }
          form > div {
            margin: 0.5rem;
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
