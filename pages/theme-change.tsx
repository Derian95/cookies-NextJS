import { FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Layout } from '../components/layouts/Layout';
import Cookies from 'js-cookie'

interface Props{
    theme:string
    name:string
}

const ThemeChange:FC<Props> = ({ theme, name}) => {

    const [currentTheme, setCurrentTheme] = useState(theme)
  
    const onThemeChange=( e:React.ChangeEvent<HTMLInputElement> ) => {
        const selectedTheme = e.target.value;

        console.log({ selectedTheme })
        setCurrentTheme( selectedTheme );

        localStorage.setItem('theme', selectedTheme );
        Cookies.set('theme', selectedTheme );
    }

    useEffect(() => {
        console.log( 'LocalStorage:', localStorage.getItem('theme') );
        console.log( 'Cookies:', Cookies.get('theme') );
    }, [])
    
    return (
    <Layout>
        <Card>
            <CardContent>
                <FormControl>
                    <FormLabel>Tema</FormLabel>
                    <RadioGroup
                    value={currentTheme}
                    onChange={onThemeChange}
                    >
                        <FormControlLabel value='light' control={<Radio/>} label='Light'/>
                        <FormControlLabel value='dark' control={<Radio/>} label='Dark'/>
                        <FormControlLabel value='custom' control={<Radio/>} label='Custom'/>
                        </RadioGroup>
                </FormControl>
            </CardContent>

        </Card>
    </Layout>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    
    const { theme = 'light', name = 'No name' } = req.cookies;
    const validThemes = ['light','dark','custom'];


    return {
        props: {
            theme: validThemes.includes( theme ) ? theme : 'dark',
            name,
        }
    }
}

export default ThemeChange