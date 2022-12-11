import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Box, IconButton, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import { Layout } from "../../components/layouts";

const AdminDashboard: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <Box display="flex" alignItems={"center"} flexDirection="column">
        <Box sx={{ margin: "1rem" }}>
          <Typography variant="h6">Administrador</Typography>
        </Box>
        <IconButton onClick={() => router.push("/admin-dashboard/uploader")}>
          <CameraAltIcon sx={{ fontSize: "2.5rem" }} />
        </IconButton>
        <IconButton onClick={() => router.push("/admin-dashboard/delete")}>
          <DeleteIcon sx={{ fontSize: "2.5rem" }} />
        </IconButton>
      </Box>
    </Layout>
  );
};

export default AdminDashboard;
