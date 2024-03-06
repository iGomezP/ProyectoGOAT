import { Avatar, Badge, Toolbar } from "@mui/material"
import Typography from "../OuiCatalog/Display/Typography"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from '@mui/material/Link';

interface IUserData {
    userEmail: string;
    userNickname: string;
}

export const TopBar = ({ userData }: any) => {

    const parsedData: IUserData = JSON.parse(userData);

    return (
        <>
            <Toolbar className="flex justify-end custom-background-linear gap-6">
                <Badge badgeContent={2} color="error">
                    <img src="/src/assets/images/Icons/TopNotificacionesColor.png" alt="TopNotificacionesColor" className="top-bar-icons" />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <img src="/src/assets/images/Icons/TopMensajesColor.png" alt="TopMensajesColor" className="top-bar-icons" />
                </Badge>
                <Typography noWrap component="div">{parsedData.userNickname}</Typography>
                <Link href="/index">
                    <KeyboardArrowDownIcon sx={{ color: "#FFF" }} />
                </Link>
                <Avatar sx={{ width: 50, height: 50 }} />
            </Toolbar>
        </>
    )
}