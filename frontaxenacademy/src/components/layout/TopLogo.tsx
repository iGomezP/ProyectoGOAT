import { Box, Toolbar } from "@mui/material"
import Typography from "../OuiCatalog/Display/Typography"
import { TextWhiteFontBold } from "../OuiCatalog/Theme"
import Link from '@mui/material/Link';

export const TopLogo = () => {

    const IconLogo = () => {
        return (
            <>
                <div className="top-logo-circle"></div>
            </>
        )
    }

    return (
        <>
            <Toolbar disableGutters className="flex justify-center">
                <Box className="flex justify-center">
                    <img src="/src/assets/images/mochila1.png" alt="" className="top-logo-icon" />
                    <Typography sx={TextWhiteFontBold}>SDE</Typography>
                </Box>
                <Box className="flex justify-center translate-x-7">
                    <Link href="/index">
                        <IconLogo />
                    </Link>
                </Box>
            </Toolbar>
        </>
    )
}