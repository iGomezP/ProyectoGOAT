import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import UserRegistration from "../models/UserRegistration";
import userServices from "../services/user.service";
const Register = () => {
    const initialValues: UserRegistration = {
        user:'',
        email:'',
        pwd: '',
        pwd_check: '',
    };
    const onSubmit = async (data: UserRegistration) => {
        //do something...
        console.log(data);
        if(data){
            //await userServices.register(data);
        }
    };
    const {
    handleSubmit,
    handleChange,
    errors,
    values,
    } = useFormik({
        initialValues,
        validationSchema:Yup.object({
            user: Yup.string().required("Este campo es requerido."),
            email: Yup.string().email().required('Seleccione un email valido.'),
            pwd: Yup.string().required('Este campo es requerido.'),
            pwd_check: Yup.string().oneOf([Yup.ref('pwd')], 'Las contraseñas deben coincidir').required('Este campo es requerido'),
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
                <Typography variant="h1" component="h2">Crear una cuenta</Typography>
                <Typography>Tu usuario:</Typography>
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
                <Typography>Vuelva a escribir la contraseña:</Typography>
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"
                    name="pwd_check"
                    value={values.pwd_check}
                    onChange={handleChange}
                    helperText={errors.pwd_check}
                    error={!!errors.pwd_check}
                />
                <Button
                    type="submit"
                >Crear tu cuenta</Button>
            </Paper>
            </Box>
        </>
    );
};
export default Register;