
import { Box, Paper } from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";
import User from "../models/User";
import { Typography } from "../OuiCatalog/Display/displayIndex";
import { TextField } from "../OuiCatalog/Inputs/inputsIndex";
import { TextSmallFont, TextTitleFont, TextWhiteFontBold } from "../OuiCatalog/Theme";
import { Button } from "../OuiCatalog/Buttons/indexButtons";
//import userServices from "../services/user.service";

const Login = () => {
    const initialValues: User = {
        user: '',
        email: '',
        pwd: '',
    };
    const onSubmit = async (data: User) => {
        //do something...
        console.log(data);
        if (data) {

            //await userServices.login(data);
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
            user: Yup.string().required("Este campo es requerido."),
            email: Yup.string().email().required('Seleccione un email valido.'),
            pwd: Yup.string().required('Este campo es requerido.'),
        }),
        onSubmit,
    });
    return (
        <div>
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
                        className="border-solid border-2"
                    >
                        <Typography sx={TextTitleFont} className="text-center">Bienvenido a SDE</Typography>
                        <Typography sx={TextSmallFont} style={{ marginTop: "10px" }}>Usuario:</Typography>
                        <TextField id="outlined-basic" label="Alumna/o" variant="outlined"
                            name="user"
                            value={values.user}
                            onChange={handleChange}
                            helperText={errors.user}
                            error={!!errors.user}
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
                            name="pwd"
                            value={values.pwd}
                            onChange={handleChange}
                            helperText={errors.pwd}
                            error={!!errors.pwd}
                            className="w-full"
                        />
                        <Button
                            type="submit"
                            sx={{ marginTop: "15px" }}
                        >
                            Iniciar sesión
                        </Button>
                    </Paper>
                </Box>

            </Box>
        </div>
    )
}

export default Login;