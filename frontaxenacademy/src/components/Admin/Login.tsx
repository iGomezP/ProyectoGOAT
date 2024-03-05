import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import User from "../models/User";
import loginServices from "../services/login.service";

const Login = () => {
    const initialValues: User = {
        user:'',
        email:'',
        pwd: '',
    };
    const onSubmit = async (data: User) => {
        //do something...
        console.log(data);
        if(data){
            
            //await loginServices.login(data);
        }
    };
    const {
    handleSubmit,
    handleChange,
    validateForm,
    errors,
    values,
    } = useFormik({
        initialValues,
        validationSchema:Yup.object({
            user: Yup.string().required("Este campo es requerido."),
            email: Yup.string().email().required('Seleccione un email valido.'),
            pwd: Yup.string().required('Este campo es requerido.'),
        }),
        onSubmit,
    });
    return (
        <>
            <Box
                className="login"
            >
            <Paper
                sx={{
                    p: "24px",
                    borderRadius: 8,
                    marginBottom: "24px",
                    maxWidth:"25%"
                }}
                component="form"
                onSubmit={handleSubmit}
            >
                <Typography variant="h1" component="h2">Bienvenido</Typography>
                <Typography>Usuario:</Typography>
                <TextField id="outlined-basic" label="Alumna/o" variant="outlined" 
                    name="user"
                    value={values.user}
                    onChange={handleChange}
                    helperText={errors.user}
                    error={!!errors.user}
                />
                <Typography>E-mail:</Typography>
                <TextField id="outlined-basic" label="ejemplo@mail.com" variant="outlined" 
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    helperText={errors.email}
                    error={!!errors.email}
                />
                <Typography>Contraseña:</Typography>
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"
                    name="pwd"
                    value={values.pwd}
                    onChange={handleChange}
                    helperText={errors.pwd}
                    error={!!errors.pwd}
                />
                <Button
                    type="submit"
                >Iniciar sesion</Button>
            </Paper>
            </Box>
        </>
    )
}

export default Login;