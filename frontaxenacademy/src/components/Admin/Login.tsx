
import { Box, Paper } from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";
import User from "../models/User";
import { Typography } from "../OuiCatalog/Display/displayIndex";
import { TextField } from "../OuiCatalog/Inputs/inputsIndex";
import { TextSmallFont, TextTitleFont, TextWhiteFontBold } from "../OuiCatalog/Theme";
import { Button } from "../OuiCatalog/Buttons/indexButtons";
import userServices from "../services/user.service";
import { IToastMessage, showToast } from "../OuiCatalog/Feedback/CustomToast";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const initialValues: User = {
        nickname: '',
        email: '',
        password: '',
    };

    const toastMessage: IToastMessage = {
        message: '',
        severity: 'info',
        autoHideDuration: 4000
    }

    const navigate = useNavigate();

    const onSubmit = async (data: User) => {
        //do something...
        console.log(data);
        if (data) {
            const loginResponse = await userServices.login(data);

            if ('error' in loginResponse) {
                const { message } = loginResponse.error;
                toastMessage.message = message;
                toastMessage.severity = 'error';

                showToast(toastMessage);
            } else {
                const { nickname, email } = loginResponse;
                localStorage.setItem("userEmail", email);
                const welcomeMessage = `Bienvenido ${nickname}`;
                toastMessage.message = welcomeMessage;
                toastMessage.severity = 'success';
                setFieldValue("nickname", '');
                setFieldValue("email", '');
                setFieldValue("password", '');
                setFieldTouched("nickname", false)
                setFieldTouched("email", false)
                setFieldTouched("password", false)
                data = {
                    email: '',
                    nickname: '',
                    password: ''
                }

                showToast(toastMessage);
                navigate("/index");
            }
        }
    };

    const handleRegister = () => {
        navigate("/register")
    }

    const {
        handleSubmit,
        handleChange,
        errors,
        values,
        setFieldValue,
        setFieldTouched
    } = useFormik({
        initialValues,
        validationSchema: Yup.object({
            nickname: Yup.string().required("Este campo es requerido."),
            email: Yup.string().email().required('Seleccione un email valido.'),
            password: Yup.string().required('Este campo es requerido.'),
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
                            marginBottom: "24px",
                        }}
                        component="form"
                        onSubmit={handleSubmit}
                        className="border-solid border-black border-2"
                    >
                        <Typography sx={TextTitleFont} className="text-center">Bienvenido a SDE</Typography>
                        <Typography sx={TextSmallFont} style={{ marginTop: "10px" }}>Usuario:</Typography>
                        <TextField id="outlined-basic" label="Alumna/o" variant="outlined"
                            name="nickname"
                            value={values.nickname}
                            onChange={handleChange}
                            helperText={errors.nickname}
                            error={!!errors.nickname}
                            className="w-full"
                        />
                        <Typography sx={TextSmallFont} style={{ marginTop: "10px" }}>E-mail:</Typography>
                        <TextField id="outlined-basic" label="ejemplo@mail.com" variant="outlined"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            helperText={errors.email}
                            error={!!errors.email}
                            className="w-full"
                        />
                        <Typography sx={TextSmallFont} style={{ marginTop: "10px" }}>Contraseña:</Typography>
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            helperText={errors.password}
                            error={!!errors.password}
                            className="w-full"
                        />
                        <Box className="flex gap-4">
                            <Button
                                variant="outlined"
                                type="submit"
                                sx={{ marginTop: "15px" }}
                                onClick={handleRegister}
                            >
                                Regístrate
                            </Button>
                            <Button
                                type="submit"
                                sx={{ marginTop: "15px" }}
                            >
                                Iniciar sesión
                            </Button>
                        </Box>
                    </Paper>
                </Box>

            </Box>
        </>
    )
}

export default Login;