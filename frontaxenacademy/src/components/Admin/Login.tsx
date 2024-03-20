import { Button } from "@mui/base";
import { Paper, TextField, Typography } from "@mui/material"
import  * as Yup from 'yup';
import { useFormik } from 'formik';
import {loginModel} from '../../models/loginModel';
import {login} from '../../services/user.service';
const Index = () => {
    const initialValues: loginModel = {
        "nickname": '',
        "email": '',
        "password": ''
    };
    const onSubmit = async (data: loginModel) =>{
        console.log('hola',data)
        if(data){
            // do something
            const respuesta = await login(data).then((response)=>{
                console.log('Todo ok');
                console.log(response.data);
            }).catch((error)=>{
                console.log('Todo MAL');
                console.log(error.response.status);
            });
            
        }
    };
    const { handleSubmit, handleChange, errors, values } = 
    useFormik({
        initialValues,
        validationSchema: Yup.object({//REGEX
            nickname: Yup.string().required("Este campo es requerido."),
            email: Yup.string().email().required("No es un email valido"),
            password: Yup.string().required('Ingrese una contrasena'),
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
                component="form"
                onSubmit={handleSubmit}
            >   
            <Typography>Usuario:</Typography>
                <TextField id="outlined-basic"  variant="outlined" 
                    name="nickname"
                    value={values.nickname}
                    onChange={handleChange}
                    helperText={errors.nickname}
                    error={!!errors.nickname}
                />
                <Typography>E-mail:</Typography>
                <TextField id="outlined-basic"  variant="outlined" 
                 name="email"
                 value={values.email}
                 onChange={handleChange}
                 helperText={errors.email}
                 error={!!errors.email}
                />
                <Typography>Contraseña:</Typography>
                <TextField id="outlined-basic"  variant="outlined" type="password"
                 name="password"
                 value={values.password}
                 onChange={handleChange}
                 helperText={errors.password}
                 error={!!errors.password}
                />
                <Button type="submit" >
                    Iniciar sesion
                </Button>
            </Paper>
            
        </>
    );
}

export default Index;