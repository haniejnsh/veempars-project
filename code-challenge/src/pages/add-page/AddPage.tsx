import { Box, Typography } from "@mui/material";
import AddForm from "./components/AddForm";

export default function AddPage() {
  return (
    <Box sx={{ padding: 3, maxWidth:"600px",marginX:"auto"}}>
      <Typography variant="h4" sx={{ marginBottom: 2,display: 'flex',justifyContent: 'center',color:"#296330", marginY:"30px"}}>
        Add Task
      </Typography>
      <AddForm />
    </Box>
  )
}
