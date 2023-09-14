import { Dispatch, SetStateAction, useContext, useState } from 'react';
import {
  Box,
  FormGroup,
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

interface Props {
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  repeatedPhone: string;
  setRepeatedPhone: Dispatch<SetStateAction<string>>;
}

export const PhoneModal = ({
  phone,
  setPhone,
  repeatedPhone,
  setRepeatedPhone,
}: Props) => {
  const { phoneModalOpen, showPhoneModal } = useContext(UIContext);

  const handleClose = () => {
    showPhoneModal(false);
  };

  const onPhoneChange = (e: { target: { value: SetStateAction<string> } }) => {
    setPhone(e.target.value);
  };

  const onRepeatedPhoneChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setRepeatedPhone(e.target.value);
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
        <FormGroup>
          <Box display="flex" alignItems="center">
            <Typography>+569&nbsp;</Typography>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={onPhoneChange}
              value={phone}
              type="number"
              autoFocus={!phone}
            />
          </Box>
          <FormHelperText id="my-helper-text" sx={{ paddingLeft: '2rem' }}>
            &nbsp;&nbsp;&nbsp;Déjanos un teléfono de contacto
          </FormHelperText>
          <Box display="flex" alignItems="center">
            <Typography>+569&nbsp;</Typography>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={onRepeatedPhoneChange}
              value={repeatedPhone}
              type="number"
            />
          </Box>
          <FormHelperText id="my-helper-text" sx={{ paddingLeft: '2rem' }}>
            &nbsp;&nbsp;&nbsp;Confirmar número{' '}
            {phone !== repeatedPhone && (
              <span style={{ color: 'darkred' }}>(No coinciden)</span>
            )}
          </FormHelperText>
          <SavePhoneButton
            phone={phone}
            disabled={
              phone.length !== 8 || !Number(phone) || phone !== repeatedPhone
            }
          />
        </FormGroup>
      </Box>
    </Modal>
  );
};
