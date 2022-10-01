import { Link, AppBar, IconButton, Toolbar, Typography, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NextLink from 'next/link'

export const Navar = () => {
   return (
      <AppBar position='sticky' elevation={0}>
         <Toolbar>
            <IconButton size='large' edge='start'>
               <MenuIcon />
            </IconButton>

            <NextLink href='/' passHref>
               <Link>
                  <Typography variant='h6'>Cookie Master</Typography>
               </Link>
            </NextLink>

         <div style={{flex:1}}></div>
            <NextLink href='/theme-change' passHref>
               <Link>
                  <Typography variant='h6'>Cambiar tema</Typography>
               </Link>
            </NextLink>
         </Toolbar>
      </AppBar>
   )
}
