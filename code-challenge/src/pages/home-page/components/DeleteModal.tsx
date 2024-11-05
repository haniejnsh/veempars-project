import { Box, Button,  Modal, Typography } from "@mui/material";
import useDelete from "../../../hooks/useDelete";

interface taskType { 
    id:number;
    todo:string;
    completed:boolean;
    userId:number;
}
interface propsType {
    open: boolean;
    handleClose: () => void;
    task:taskType;
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius:2, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center'

  };

export default function DeleteModal({open,handleClose,task}:propsType) {
    const {id,todo}=task
    const {mutate}=useDelete()
    const handleDelete=()=>{
        mutate(id)
        handleClose()
    }

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
    >
        <Box sx={{ ...style, width: 400, }}>
            <Typography variant="h2" sx={{ color: '#1d4632 ', fontSize: '20px' ,marginBottom:'10px'}}>
                Delete task
            </Typography>
            <Typography variant="h2" sx={{ color: 'gray', fontSize: '15px' ,marginY:'20px'}}>
                Are you sure you want to delete "{todo}" ?
            </Typography>
            <Box sx={{  marginTop: '10px' }}>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleDelete} sx={{ color: '#e43324' }}>
                    Delete
                </Button>
            </Box>
        </Box>
    </Modal>
  )
}
