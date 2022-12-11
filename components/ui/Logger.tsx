//import { signIn } from 'next-auth/react';
import { Box } from '@mui/material';
import GoogleButton from 'react-google-button';
import { useAuth } from '../../context/auth';

export const Logger = () => {
  const { signinWithGoogle } = useAuth();
  return (
    <Box display="flex" justifyContent="center">
      <GoogleButton
        label="Acceder con Google"
        type="light"
        onClick={signinWithGoogle}
      />
    </Box>
  );
};
