import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import Typography from "../OuiCatalog/Display/Typography";
import {
    ClasesIcon,
    InicioIcon,
    HorariosIcon,
    CalificacionesIcon,
    CalendarioIcon,
    PagosIcon,
    FotografiasIcon,
    NotificacionesIcon,
    AdministracionIcon
} from "../OuiCatalog/Icons/CustomIcons";
import { cloneElement, useState } from "react";
import { TopLogo } from "./TopLogo";
import { TopBar } from "./TopBar";



const MainBar = () => {
    const menuItems = ["Inicio", "Clases", "Horarios", "Calificaciones", "Calendario", "Pagos", "Fotografías", "Notificaciones", "Administración"];
    const drawerWidth = 240;
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

    const menuIcons = {
        Inicio: <InicioIcon />,
        Clases: <ClasesIcon />,
        Horarios: <HorariosIcon />,
        Calificaciones: <CalificacionesIcon />,
        Calendario: <CalendarioIcon />,
        Pagos: <PagosIcon />,
        Fotografías: <FotografiasIcon />,
        Notificaciones: <NotificacionesIcon />,
        Administración: <AdministracionIcon />,
    } as Record<string, JSX.Element>;

    const userData = localStorage.getItem('userData' ?? "");

    const handleClick = (menuItem: string) => {
        setActiveMenuItem(menuItem);
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <TopBar userData={userData}></TopBar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
                PaperProps={{ className: "custom-background-mainbar" }}
            >
                <TopLogo />
                <Box></Box>
                <List>
                    {menuItems.map((menuItem) => (
                        <ListItem key={menuItem} disablePadding className={`${menuItem === activeMenuItem ? 'isActive' : ''}`}>
                            <ListItemButton onClick={() => handleClick(menuItem)} className="flex flex-col justify-center content-center">
                                <ListItemIcon className="flex justify-center">
                                    {menuIcons[menuItem] && cloneElement(menuIcons[menuItem], { color: menuItem === activeMenuItem })}
                                </ListItemIcon>
                                <ListItemText primary={menuItem} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Box>
        </Box>
    )
}

export default MainBar;