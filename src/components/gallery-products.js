'use client'

import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react'
import ProductCard from './card'


function StatsCard(props) {
    const { title, stat } = props
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'} isTruncated>
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
        </Stat>
    )
}

export default function GalleryProducts({ title }) {
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1 fontFamily={'Poppins'} textAlign={'center'} fontSize={'4xl'} py={3} fontWeight={'bold'}>
                {title}
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
                <ProductCard image={'https://m.media-amazon.com/images/I/51M+qQwzrdL._AC_SL1500_.jpg'} name={"Google Chromecast TV"} description={"Disfruta de todo un mundo de entretenimiento.​​ Envía contenido directamente desde tu teléfono o tablet a tu televisor."} link={"https://www.amazon.es/dp/B08KRV7S22?psc=1&crid=3004RMOT9DVZK&keywords=Chromecast+con+Google+TV+(4K)+Cielo&sprefix=chromecast+con+google+tv+4k+cielo,aps,698&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFKNlNZSTBNM0xFUEMmZW5jcnlwdGVkSWQ9QTA0Mzc0NDc0WTkxUlJJQU1LM0kmZW5jcnlwdGVkQWRJZD1BMDc4ODEwMjEwWVlIUk8wVjBYVFAmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&language=en_US&ref_=as_li_ss_tl&sr=8-2-spons&linkCode=gg2&linkId=73a9360b7588db93f03a61f1bacc994c&tag=twbw01-20"} />
                <ProductCard height={180} image={'https://m.media-amazon.com/images/I/71+BP1gTN2L._AC_SL1500_.jpg'} name={"Reloj inteligente"} description={"Smartwatch con 112 Modos Deportivos, Monitor de Ritmo Cardíaco y Sueño."} link={"https://www.amazon.es/Ddidbi-Inteligente-Smartwatch-Deportivos-Impermeable/dp/B0C1N9VDMM/ref=sr_1_6?keywords=reloj+inteligente+hombre&qid=1691932930&sprefix=reloj+in%2Caps%2C310&sr=8-6"} />
                <ProductCard height={200} image={'https://m.media-amazon.com/images/I/61SZZ9s8BFL._AC_SL1200_.jpg'} name={"Bellroy Tech Kit"} description={"Estuche con cremallera para accesorios tecnológicos (power bank, cargador de móvil, cables, auriculares)."} link={"https://www.amazon.es/dp/B098SNNWL4?crid=25TZLN40MCT1D&keywords=Bellroy%2BTech%2BKit&sprefix=bellroy%2Btech%2Bkit%2Caps%2C793&ref_=as_li_ss_tl&language=en_US&sr=8-5&linkCode=gg2&linkId=1294208314b78252bfdd71fc8de1cf59&tag=twbw01-20&th=1"} />
                <ProductCard image={'https://s.alicdn.com/@sc04/kf/H468131a1ab3742f9b1bc923237e61cbaF.jpg_280x280.jpg'} name={"Ronyme portavasos"} description={"Copa inteligente para el calor y el frío del automóvil."} link={"https://www.amazon.es/Ronyme-Portavasos-Inteligente-Calentador-portavasos/dp/B0C5XH25HL"} />



            </SimpleGrid>
        </Box>
    )
}