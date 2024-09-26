import React from 'react'
import { colors, fontStyle, thanksPageStyle } from '../styles/globalStlye'
import { Box, Button, CardMedia, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';
import { NotFound } from './NotFound';
import thanksImg from '../assets/img/TesukkurImg.png'
import EdgeChipThnx from '../assets/img/EdgeChipThnx.gif'
import bonnaLogo from "../assets/img/logobonna_b.png"


const Thanks = () => {

    const { i18n, t } = useTranslation();
    const navigate = useNavigate()
    const state = useLocation()


    return (


        state.state ?
            (

                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>

                    <Box sx={{ width: '100%', maxHeight: '100%' }}>

                        <CardMedia
                            component='image'
                            image={EdgeChipThnx}
                            sx={{
                                objectFit:'cover',
                                height: {
                                    xs: '80vh',  // Ekran küçükse (mobile) yükseklik %40
                                    sm: '110vh',  // Ekran biraz daha büyükse %50
                                    md: '140vh',  // Orta büyüklükteki ekranlarda %100
                                    lg: '180vh',  // Büyük ekranlarda %100
                                },
                                width: '100%', // Resmin her zaman yatayda %100 genişliğe sahip olmasını sağlar
                                maxWidth: '100%', // Taşmayı önler
                                // maxHeight: '100%', // Taşmayı önler
                                display: 'block', // Resmin düzgün yerleşmesini sağlar
                            }}
                        />

                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 5,
                            p: 3,
                            backgroundColor: colors.bonna,
                            height: '100vh',
                            // justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >

                        <Typography
                            align='center'
                            fontFamily={fontStyle.catamaran}
                            fontWeight={700}
                            fontSize={22}
                            letterSpacing={3}
                        >
                            {t('text.thanks')}
                        </Typography>

                        <Typography
                            align='center'
                            fontFamily={fontStyle.catamaran}
                            fontSize={22}
                            letterSpacing={3}
                        >
                            {t('text.thanks2')} "<span style={{ fontWeight: 800 }}>{t('text.thanks3')}</span>" {t('text.thanks4')}
                        </Typography>


                        <CardMedia
                            component='img'
                            image={bonnaLogo}
                            loading='lazy'
                            sx={{
                                width: {
                                    xs: '40%',
                                    sm: '40%',
                                    md: '35%',
                                    lg: '30%',
                                    xl: '30%'
                                }
                            }}
                        />

                        <Button
                            type='click'
                            sx={{
                                letterSpacing: 3,
                                fontFamily: fontStyle.catamaran,
                                width: 80,
                                textDecoration: 'underline'
                            }}

                            variant='filled'
                            onClick={() => navigate('/')}
                        >
                            {t('text.back')}
                        </Button>

                    </Box>
                </Box>







            )
            :
            (
                <NotFound />
            )


    )
}

export default Thanks