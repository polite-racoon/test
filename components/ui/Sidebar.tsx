import { useContext } from "react";
import Link from "next/link";
import {
  Box,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  SwipeableDrawer,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";

import { UIContext } from "../../context/ui";
import { useAuth } from "../../context/auth";

type item = {
  text: string;
  icon: React.ReactNode;
  url: string;
};

const pages: item[] = [
  {
    text: "inicio",
    icon: <HomeOutlinedIcon />,
    url: "/",
  },
  {
    text: "carrito",
    icon: <ShoppingCartOutlinedIcon />,
    url: "/shopping-cart",
  },
];

const categories: item[] = [
  {
    text: "bodas y bautizos",
    icon: <ChurchOutlinedIcon />,
    url: "/bodas",
  },
  {
    text: "cumpleaños",
    icon: <CelebrationIcon />,
    url: "/cumpleaños",
  },
  {
    text: "enamorados",
    icon: <LoyaltyIcon />,
    url: "/enamorados",
  },
  {
    text: "navidad",
    icon: <AcUnitIcon />,
    url: "/navidad",
  },
];

export const Sidebar = () => {
  const { user, signout } = useAuth();
  const { sidemenuOpen, closeSidemenu, openSidemenu } = useContext(UIContext);
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      anchor="left"
      open={sidemenuOpen}
      onClose={closeSidemenu}
      onOpen={openSidemenu}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Box
            sx={{
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
              flexGrow: 2,
            }}
          >
            <Typography variant="body2">Menú</Typography>
          </Box>
          <IconButton onClick={closeSidemenu}>
            <ArrowBackIosNewOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider />
        <List>
          <br />
          {categories.map((category, index) => (
            <Link href={category.url} key={index}>
              <ListItem onClick={closeSidemenu}>
                <ListItemIcon>{category.icon}</ListItemIcon>
                <ListItemText primary={category.text} />
              </ListItem>
            </Link>
          ))}
          <br />
          <Divider />
          <br />
          <Link href="/mi-reserva">
            <ListItem
              onClick={closeSidemenu}
              sx={{ backgroundColor: "rgba(63, 184, 212, 0.2)" }}
            >
              <ListItemIcon>
                <CheckBoxOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"mi reserva"} />
            </ListItem>
          </Link>
          {pages.map((page, index) => {
            return (
              <Link href={page.url} key={index}>
                <ListItem onClick={closeSidemenu}>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.text} />
                </ListItem>
              </Link>
            );
          })}
          {user && (
            <>
              <ListItem
                onClick={() => {
                  closeSidemenu();
                  signout();
                }}
              >
                <ListItemIcon>
                  <LogoutOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="cerrar sesión" />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};
