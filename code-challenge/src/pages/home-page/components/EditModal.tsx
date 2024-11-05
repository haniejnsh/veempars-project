import { Box, Button,  FormControlLabel,  FormLabel,  Modal, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import useDelete from "../../../hooks/useDelete";
import { useEffect, useState } from "react";

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

export default function EditModal({open,handleClose,task}:propsType) {
    const {id,todo,completed}=task
    console.log("ini",todo);
    
    const [inputValue,setInputValue]=useState("")
    useEffect(
       ()=> {setInputValue(todo) },
       [todo]
    )
    const [radioValue, setRadioValue] = useState("false");
    useEffect(
        ()=> {
            if(completed==true){
                setRadioValue("true")
            }
            else if(completed==false){
                setRadioValue("false")
            } },
        [completed]
    )
    console.log("radio=>",radioValue,"-----","text=>",inputValue);
    

    const handleChangeRadio = (e) => {
        setRadioValue(e.target.value);
    };
    const handleEdit=()=>{
        alert("edit")
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
            <Typography variant="h2" sx={{ color: '#1d4632 ', fontSize: '20px' ,marginBottom:'20px'}}>
                Edit task
            </Typography>

            <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    sx={{ marginY: '20px',color:"red "}}
                    slotProps={{
                        input: {
                            sx: {
                                color: 'gray', 
                                fontSize: '15px', 
                                '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'gray',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ccc038',
                            },
                            }
                        },
                    }}
            />

            <RadioGroup
                value={radioValue}
                onChange={handleChangeRadio}
                sx={{ display: 'flex', flexDirection: 'row', gap: 2,marginBottom:3}}
            >
                <FormControlLabel value="true" control={<Radio sx={{ '& svg': { fontSize: 18 } }} />} label="Completed" sx={{ '& span': { fontSize: '13px' } }}/>
                <FormControlLabel value="false" control={<Radio sx={{ '& svg': { fontSize: 18 } }} />} label="Not completed" sx={{ '& span': { fontSize: '13px' } }}/>
            </RadioGroup>

            <Box sx={{  marginTop: '10px' }}>
                <Button onClick={handleClose} sx={{ color: '#296330' }}>
                    Cancel
                </Button>
                <Button onClick={handleEdit} sx={{ color: '#ccc038' }}>
                    Edit
                </Button>
            </Box>
        </Box>
    </Modal>
  )
}