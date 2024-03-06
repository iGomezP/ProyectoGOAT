import { Box, Card, Stack } from "@mui/material";
import { TextField } from "./Inputs/inputsIndex";
import Typography from "./Display/Typograhpy";
import { TextSmallFont } from "./Theme";

const OuiCatalog = () => {

    return (
        <Box className="w-full h-full p-5" sx={{ backgroundColor: "lightgray" }}>
            <Typography textAlign="center" className="w-full" variant="h1">
                Presentación Axen Academy - oui
            </Typography>
            <InputDemo></InputDemo>
            <TypographyDemo></TypographyDemo>
        </Box>
    )
}

const InputDemo = () => {
    return (
        <>
            <Typography textAlign="left" variant="h2" className="w-full">
                ✅ Input - WIP
            </Typography>
            <Card raised className="w-full p-2 mb-3">
                <Stack spacing={1}>
                    <Typography sx={{ ...TextSmallFont, marginLeft: "2px" }} className="p-5">
                        Input Label
                    </Typography>
                    <Typography>Inputs</Typography>
                    <TextField defaultValue="Some value" helperText="Some helper text" />
                </Stack>
            </Card>
        </>
    )
}

const TypographyDemo = () => {
    return (
        <>
            <Typography textAlign="left" variant="h2" className="w-full">
                ✅ Typography
            </Typography>
            <Card raised className="w-full p-2 mb-3">
                <Stack>
                    <Typography sx={TextSmallFont}>ejemplo</Typography>
                </Stack>
            </Card>
        </>)
}

export default OuiCatalog;