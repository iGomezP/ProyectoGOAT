import React from "react";
import { Box, Paper } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserRegistration from "../models/UserRegistration";
import userServices from "../services/user.service";
import { Typography } from "../OuiCatalog/Display/displayIndex";
import { TextField } from "../OuiCatalog/Inputs/inputsIndex";
import { TextSmallFont, TextTitleFont, TextWhiteFontBold } from "../OuiCatalog/Theme";
import { Button } from "../OuiCatalog/Buttons/indexButtons";

const Register = () => {
    const initialValues: UserRegistration = {
        nickname: '',
        email: '',
        password: '',
        pwd_check: '',
    };
    const onSubmit = async (data: UserRegistration) => {
        //do something...
        console.log(data);
        if (data) {
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
        validationSchema: Yup.object({
            nickname: Yup.string().required("Este campo es requerido."),
            email: Yup.string().email().required('Seleccione un email valido.'),
            password: Yup.string().required('Este campo es requerido.'),
            pwd_check: Yup.string().oneOf([Yup.ref('pwd')], 'Las contraseñas deben coincidir').required('Este campo es requerido'),
        }),
        onSubmit,
    });
    return (
        <>
            <Box
                className="flex justify-center flex-col gap-1 items-center login"
            >
                <Box className="flex flex-col items-center">
                    <img
                        src="/src/assets/images/saturn.png"
                        alt="Saturn"
                        className="login-logo-saturn -translate-y-[150px]"
                    />
                    <img
                        src="/src/assets/images/mochila1.png"
                        alt="mochila"
                        className="login-logo-mochila -translate-y-[180px]" />
                    <Typography sx={TextWhiteFontBold} className="-translate-y-[170px]">SDE</Typography>
                </Box>
                <Box className="-translate-y-[150px]">
                    <Paper
                        sx={{
                            p: "24px",
                            borderRadius: 8,
                            marginBottom: "24px"
                        }}
                        component="form"
                        onSubmit={handleSubmit}
                        className="border-solid border-black border-2"
                    >
                        <Typography sx={TextTitleFont} className="text-center">Crear una cuenta</Typography>
                        <Typography sx={TextSmallFont} style={{ marginTop: "10px" }}>Tu usuario:</Typography>
                        <TextField id="outlined-basic" label="Alumna/o" variant="outlined"
                            name="nickname"
                            value={values.nickname}
                            onChange={handleChange}
                            helperText={errors.nickname}
                            error={!!errors.nickname}
                            className="w-full"
                        />
                        <Typography>E-mail:</Typography>
                        <TextField id="outlined-basic" label="ejemplo@mail.com" variant="outlined"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            helperText={errors.email}
                            error={!!errors.email}
                            className="w-full"
                        />
                        <Typography>Contraseña:</Typography>
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            helperText={errors.password}
                            error={!!errors.password}
                            className="w-full"
                        />
                        <Typography>Vuelva a escribir la contraseña:</Typography>
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"
                            name="pwd_check"
                            value={values.pwd_check}
                            onChange={handleChange}
                            helperText={errors.pwd_check}
                            error={!!errors.pwd_check}
                            className="w-full"
                        />
                        <Button
                            type="submit"
                            sx={{ marginTop: "15px" }}
                        >Crear tu cuenta</Button>
                    </Paper>
                </Box>
            </Box>
        </>
    );
};
export default Register;