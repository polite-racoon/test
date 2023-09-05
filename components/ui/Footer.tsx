import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Box,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';

export const Footer = () => {
  return (
    <Box
      style={{
        position: 'sticky',
        bottom: 0,
        width: '100%',
        margin: 0,
      }}
    >
      <Divider />
      <BottomNavigation>
        <BottomNavigationAction
          // label="Recents"
          icon={<InstagramIcon />}
        />
        <BottomNavigationAction
          // label="Recents"
          icon={<WhatsAppIcon />}
        />
        <BottomNavigationAction
          // label="Recents"
          icon={<PinterestIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};
