import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Paper,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';

export const Footer = () => {
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
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
    </Paper>
  );
};
