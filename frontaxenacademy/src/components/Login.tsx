import { Button } from "@mui/base";
import { Paper, TextField, Typography } from "@mui/material"
import  * as Yup from 'yup';
import { useFormik } from 'formik';
import {loginModel} from '../../models/loginModel';
const Index = () => {
    const initialValues: loginModel = {
        "nickname": '',
        "email": '',
        "password": ''
      };
    const onSubmit = (data: loginModel) =>{
        if(data){
            // do something
            
        }
    };
    const { handleSubmit, handleChange, errors, values } = 
    useFormik({
        initialValues,
        validationSchema: Yup.object({
            
        }),
        onSubmit
    });
    return (
        <>
            <Paper
                sx={{
                    p: "24px",
                    borderRadius: 8,
                    maxWidth:'24%'
                }}
            >   <Typography>Usuario:</Typography>
                <TextField id="outlined-basic"  variant="outlined" />
                <Typography>E-mail:</Typography>
                <TextField id="outlined-basic"  variant="outlined" />
                <Typography>Contrasena:</Typography>
                <TextField id="outlined-basic"  variant="outlined" />
                <Button>
                    Iniciar sesion
                </Button>
            </Paper>
            
        </>
    );
}

export default Index;
