import { SetStateAction, useContext, useState } from 'react';
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  Modal,
  Typography,
} from '@mui/material';
import { Logo } from '../Logo';

import { UIContext } from '../../../context/ui';
import { SavePhoneButton } from '../buttons/SavePhoneButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export const PhoneModal = () => {
  const [phone, setPhone] = useState('');
  const { phoneModalOpen, showPhoneModal } = useContext(UIContext);

  const handleClose = () => {
    showPhoneModal(false);
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setPhone(e.target.value);
  };

  return (
    <Modal
      open={phoneModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Logo />
        <FormControl>
          <Box display="flex" alignItems="center">
            <Typography>+569&nbsp;</Typography>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={handleChange}
              value={phone}
              autoFocus
            />
          </Box>
          <FormHelperText id="my-helper-text" sx={{ paddingLeft: '2rem' }}>
            Déjanos un teléfono de contacto
          </FormHelperText>
          <SavePhoneButton
            phone={phone}
            disabled={phone.length !== 8 || !Number(phone)}
          />
        </FormControl>
      </Box>
    </Modal>
  );
};
