import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';

export default function AddForm() {

  return (
    <Formik
        initialValues={{todo:"",completed:"",userId:"" }}
        onSubmit={(values,{ resetForm }) => {
            console.log(values);
            resetForm()
        }}
        validationSchema={
            Yup.object({
            todo:Yup.string().required("field to do is important"),
            completed:Yup.string().required("field completed is important"),
            userId:Yup.number().required("field userId is important"),
            })
        }
        validateOnChange={false} 
        validateOnBlur={false}
    >
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <Form>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            gap: 1,
            paddingX: 4,
            paddingY:6,
            backgroundColor:"#f9f9f9",
            borderRadius: 2,
            boxShadow: 5,
        }}>

            <TextField
                label="Task"
                name="todo"
                value={values.todo}
                onChange={handleChange}
                fullWidth
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#296330',
                      },
                      '&:hover fieldset': {
                        borderColor: '#296330',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#296330',
                      },
                    },
                  }}
                  slotProps={{
                    input: {
                      sx: {
                        color: 'gray',
                        fontSize: '15px',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'gray',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: "#296330",
                        },
                      },
                    },
                  }}
            />
            <Box sx={{color:"red",fontSize:"13px"}}>{errors.todo}</Box>
            <TextField
                label="User ID"
                name="userId"
                type="number"
                value={values.userId}
                onChange={handleChange}
                fullWidth
                sx={{
                    marginTop:"20px",
                    backgroundColor: 'white',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'gray',
                      },
                      '&:hover fieldset': {
                        borderColor: '#296330',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#296330',
                      },
                    },
                  }}
                  slotProps={{
                    input: {
                      sx: {
                        color: 'gray',
                        fontSize: '15px',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'gray',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: "#296330",
                        },
                      },
                    },
                  }}
            />
            <Box sx={{color:"red",fontSize:"13px"}}>{errors.userId}</Box>

            <RadioGroup
                name="completed"
                value={values.completed}
                onChange={handleChange}
                sx={{ display: 'flex', flexDirection: 'row', gap: 2,marginTop:2}}
            >
                <FormControlLabel value="true" control={<Radio sx={{ '& svg': { fontSize: 20 ,color:"#296330"} }} />} sx={{ '& span': { fontSize: '15px',color:"#4f4f4f" } }} label="Completed" />
                <FormControlLabel value="false" control={<Radio sx={{ '& svg': { fontSize: 20 ,color:"#296330"} }} />} sx={{ '& span': { fontSize: '15px' ,color:"#4f4f4f"} }} label="Not Completed" />
            </RadioGroup>
            <Box sx={{color:"red",fontSize:"13px"}}>{errors.completed}</Box>

            <Button type="submit" variant="contained" color="primary" sx={{fontSize:"15px",marginTop:"20px",backgroundColor: '#428c4b',width:"150px",paddingY:"10px",fontWeight:'bold','&:hover': {backgroundColor: '#105a19' },borderRadius:2,marginX:"auto"}}>
                Add
            </Button>
        </Box>
      </Form>
      )}
    </Formik>
  );
}

