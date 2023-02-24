import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { UIContext } from "../../context/ui";
import { useAuth } from "../../context/auth";
import { ReservasContext } from "../../context/reservas";

export const Navbar = () => {
  const { user } = useAuth();
  const { openSidemenu } = useContext(UIContext);
  const { reservas } = useContext(ReservasContext);
  const router = useRouter();

  const onUserIconClick = async () => {
    try {
      const response = await fetch("/api/door", {
        method: "POST",
        body: JSON.stringify({ user }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { url } = await response.json();
      console.log(url);
      if (url) router.push(url);
    } catch {
      return;
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton size="large" edge="start" onClick={openSidemenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <Box onClick={() => router.push("/")}>
          <Typography variant="h5">sweet</Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          {router.pathname !== "/" && (
            <IconButton
              size="large"
              edge="end"
              sx={{ position: "absolute", left: "-6rem" }}
              onClick={() => router.push("/")}
            >
              <HomeOutlinedIcon />
            </IconButton>
          )}

          <IconButton
            size="large"
            edge="end"
            sx={{ position: "absolute", left: "-3rem" }}
            onClick={() => router.push("/shopping-cart")}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
          {!!reservas.length && (
            <div
              style={{
                position: "absolute",
                left: "-1.5rem",
                top: "1.5rem",
                fontSize: "0.75rem",
                backgroundColor: "red",
                borderRadius: "100%",
                height: "1rem",
                width: "1rem",
                textAlign: "center",
                color: "white",
              }}
            >
              {reservas.length}
            </div>
          )}

          {user ? (
            <IconButton size="large" edge="end" onClick={onUserIconClick}>
              <Image
                src={user.photoUrl}
                height={24}
                width={24}
                alt="user image"
                className="userImage"
              />
            </IconButton>
          ) : (
            <IconButton size="large" edge="end">
              <AccountCircleOutlinedIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};
