import { Box, Button, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Toolbar, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function NavBar() {
  return (
    <div>
       <Drawer

        variant="permanent"
        sx={{
          width: "drawerWidth",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: "drawerWidth", boxSizing: 'border-box', borderRight:"none" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItemButton>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText  primary={<Typography sx={{fontSize:"20px"}}>Inicio</Typography>}></ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon >{<WhatshotIcon />}</ListItemIcon>
                <ListItemText  primary={<Typography sx={{fontSize:"20px"}}>Em alta</Typography>}></ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:"20px"}}>Inscrições</Typography>} ></ListItemText>
            </ListItemButton>
          </List>
          <Divider />
           <List>
            <ListItemButton>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText  primary={<Typography sx={{fontSize:"20px"}}>Biblioteca</Typography>}></ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon >{<HistoryIcon />}</ListItemIcon>
                <ListItemText  primary={<Typography sx={{fontSize:"20px"}}>Histórico</Typography>}></ListItemText>
            </ListItemButton>
            <Divider />
             <Box p={3}>
                <Typography variant='body2' sx={{fontSize:15}}>
                    Faça Login para curtir <br/>
                    videos,comentar e se <br/>
                    inscrever.
                </Typography>
                <Box mt={2}>
                <Button variant='outlined' color='secondary' startIcon={<AccountCircleIcon/>}>
                        Fazer login
                </Button>
                </Box>
            </Box>   
            <Divider />
            <List component={"nav"}
            aria-labelledby='nested-list-subheader'
            subheader={
                <ListSubheader component={"div"} id='nested-list-subheader'>
                O melhor do youtube
                </ListSubheader>
        }>
            <ListItemButton>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:"20px"}}>Música</Typography>} ></ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:"20px"}}>Esportes</Typography>} ></ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:"20px"}}>Jogo</Typography>} ></ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:"20px"}}>Filmes</Typography>} ></ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:"20px"}}>Notícias</Typography>} ></ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:"20px"}}>Ao vivo</Typography>} ></ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:"20px"}}>Destaque</Typography>} ></ListItemText>
            </ListItemButton>
             <ListItemButton>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:"20px"}}>Videos 360</Typography>} ></ListItemText>
            </ListItemButton>
             <ListItemButton>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:"20px"}}>Procurar mais</Typography>} ></ListItemText>
            </ListItemButton>
        </List>
          </List>
        </Box>
        
      </Drawer>
    </div>
  )
}
