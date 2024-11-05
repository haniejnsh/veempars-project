import { Box, Button,  Modal, Typography } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    // margin: 'auto',
    borderRadius:2, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center'

  };
interface propsType {
    open: boolean;
    handleClose: () => void;
}

export default function DeleteModal({open,handleClose}:propsType) {
    const handleDelete=()=>{
        alert("yeees")
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
            {/* <h2 id="parent-modal-title" sx={{ color: 'blue !important', fontSize: '44px !important' }}>Delete task</h2> */}
            <Typography variant="h2" sx={{ color: '#1d4632 ', fontSize: '20px' ,marginBottom:'10px'}}>
                Delete task
            </Typography>
            <Typography variant="h2" sx={{ color: 'gray', fontSize: '15px' ,marginY:'20px'}}>
                Are you sure you want to delete this task?
            </Typography>
            {/* <p id="parent-modal-description">
                Are you sure you want to delete this task?
            </p> */}
            {/* <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleDelete} sx={{ color: '#e43324' }} >
                Delete
            </Button> */}
            <Box sx={{  marginTop: '10px' }}>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleDelete} sx={{ color: '#e43324' }}>
                    Delete
                </Button>
            </Box>
            {/* <ChildModal /> */}
        </Box>
    </Modal>
  )
}
