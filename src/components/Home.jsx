import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';


export default function Home() {
  return (
    <div style={{background:"#fcf7f7ce", height:"100vh"}}>
    <Box sx={{ display: 'flex' }}>
      <AppBar  position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} color='inherit' >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{paddingLeft:"spacing(5)", paddingRight:"spacing(4)"}}/>
          </IconButton>
          <img src="/img/preto.png" alt="logo" style={{height:"25px"}}/>
            <div style={{flexGrow:1}}/>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <VideoCallIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AppsIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MoreVertIcon />
          </IconButton>
          <Button startIcon={<AccountCircleIcon />} variant='outlined'  color="secondary">Fazer Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}
