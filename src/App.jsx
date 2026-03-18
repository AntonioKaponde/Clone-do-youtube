
import { Box, ThemeProvider,createTheme } from '@mui/material';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';




export default function App() {

  
  const theme = createTheme({
    palette:{
      primary:{
        main:"#f44335"
      },
      secondary:{
        main:"#3f51b5"
      }
    }
  })
  return (

    <ThemeProvider theme={theme} > 
        <Box display={"flex"}>
          <Home />
          <SideBar/>
          <NavBar />

        </Box>
    </ThemeProvider>
     
    
  )
}
