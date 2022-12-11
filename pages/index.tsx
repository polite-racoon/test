import type { NextPage } from "next";
import Image from "next/legacy/image";
import { Box, Grid, Typography } from "@mui/material";
import { Logger } from "../components/ui";
import { useAuth } from "../context/auth";
import { ItemList } from "../components/ui";

const Home: NextPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Box sx={{ margin: "1rem 0 2rem 0" }}>{!user && <Logger />}</Box>
      <Box display="flex" justifyContent="center">
        <Image
          src="/cookie2.jpg"
          width={680}
          height={454}
          alt="caja con galletas de navidad"
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant={"h5"} fontStyle="italic" sx={{ margin: "2rem" }}>
          - galletas artesanales -
        </Typography>
      </Box>
      {/* <ItemList /> */}
    </>
  );
};

export default Home;

/* <Typography
  variant={'h5'}
  sx={{
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }}
>
  -COMPRAR-
</Typography>; */
