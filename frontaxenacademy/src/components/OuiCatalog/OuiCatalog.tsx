import { Box, Typography } from "@mui/material";
import { TextField } from "./Inputs";

const OuiCatalog = () => {

    return (
        <>
            <Box>
                <Typography>Inputs</Typography>
                <TextField defaultValue="Some value" helperText="Some helper text" />
            </Box>
        </>
    )
}

export default OuiCatalog;