import React from 'react'
import { Box, Heading } from "@chakra-ui/react"
import ArticleDetails from './product-details'

const ArticleList = () => {
    const articleList = [
        {
            name: 'Luna flotante',
            description: 'La lámpara de luna giratoria magnética Ruixinda destaca por su tecnología de levitación magnética que permite que una luna en 3D gire en suspensión, emitiendo luz sin contacto. Su diseño minimalista y realista simula la textura lunar y ofrece tres tonos de luz: amarillo cálido, blanco frío y amarillo claro, adecuados para ambientes relajantes o espacios de trabajo tranquilos. Alimentada por inducción electromagnética, no necesita cables ni baterías, siendo altamente eficiente en energía. Además de ser un regalo único para entusiastas del universo y la astronomía, esta luna levitante magnética actúa como una decoración excepcional en oficinas, salas de estar y dormitorios, creando una experiencia cautivadora y futurista.',
            image: 'https://m.media-amazon.com/images/I/712joUxQFIS._AC_SL1500_.jpg',
            link: 'https://www.amazon.com/RUIXINDA-Levitating-Magnetic-Floating-Spinning/dp/B092DFPQT1/ref=sr_1_33?keywords=Best%2BTech%2BGadgets&qid=1691938003&sr=8-33&th=1'
        },
        {
            name: 'Cargador inalámbrico',
            description: 'El cargador Aeinidi Mag-Safe ofrece una solución completa de carga inalámbrica 3 en 1 para iPhone, Apple Watch y AirPods. Compatible con los últimos modelos, este cargador rápido cuenta con un adaptador de fuente de alimentación QC3.0 de 15 W para cargar tu iPhone en un 50% en una hora y todos tus dispositivos en 2-3 horas. Su fuerte fuerza magnética garantiza una conexión segura en posiciones horizontal o vertical, y su diseño se transforma en un soporte ajustable girando el cabezal 40°. Certificado por FCC y CE, proporciona carga segura con protección contra sobrecorriente, sobretensión, sobretemperatura y detección de objetos extraños. La luz LED indica estados anormales para mayor seguridad. Simplifica tu vida con este cargador elegante y funcional para todos tus dispositivos.',
            image: 'https://m.media-amazon.com/images/I/61DGNv3rtNL._AC_SL1500_.jpg',
            link: 'https://www.amazon.com/Wireless-Charging-Multiple-Aeinidi-Mag-Safe/dp/B0C23QNK4F/ref=sr_1_1_sspa?keywords=cargador%2Binalambrico%2Bpara%2Biphone&qid=1691938090&sprefix=cargador%2Bin%2Caps%2C248&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&language=es_US&currency=EUR&th=1'
        }, {
            name: 'Batería inalámbrica',
            description: 'El banco de energía Anker 325 tiene una capacidad excepcional de 20,000 mAh para cargar dispositivos varias veces. Proporciona más de 5 cargas al iPhone XS, cerca de 5 al Samsung Galaxy S10, más de 4 al iPhone 11 y más de 2.5 al iPad mini 5. Su tecnología avanzada de carga PowerIQ y VoltageBoost optimiza la carga y ofrece un modo de carga lenta para accesorios de baja potencia.Ofrece carga simultánea a través de puertos USB dobles; el USB-C es solo para recargar el PowerCore. Se recarga a través de puertos USB-C o Micro USB, tomando aproximadamente 10.5 horas con un cargador de 10 W o 20 horas con uno de 5 W. En el paquete se incluye el PowerCore 20K, un cable micro USB, guía de bienvenida, garantía de 18 meses y servicio al cliente amigable. Los cables USB-C, Lightning y el cargador de pared no están incluidos. El Anker 325 es ideal para viajes y uso diario, manteniendo tus dispositivos cargados con su gran capacidad.',
            image: 'https://m.media-amazon.com/images/I/71s9NDno3FL._AC_SL1193_.jpg',
            link: 'https://www.amazon.com/-/es/PowerCore-Essential-tecnolog%C3%ADa-capacidad-compatible/dp/B07S829LBX/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1593S7JJJ02WY&keywords=bateria%2Bportatil%2B20000&qid=1691938262&s=electronics&sprefix=bateria%2Bportatil%2B20000%2Celectronics-accessories%2C208&sr=1-1&th=1'
        }, {
            name: 'Camara de videoviligancia',
            description: 'La cámara de video WYZE Cam Pan v3 es versátil para interiores y exteriores, con clasificación IP65 resistente al agua. Puede operar en un rango de temperatura de -4.0 °F a 122.0 °F (-20°C a 50°C) y se conecta a Wi-Fi 2.4 GHz. Ofrece video en Full HD de 1080p con capacidad de panorámica, inclinación y zoom controlado por la app WYZE. Puede seguir automáticamente el movimiento y tiene un rango de panorámica de 360° y de inclinación de 180°.  Funciona con suavidad y silencio, y presenta visión nocturna a color. Se requiere un adaptador de corriente WYZE Outdoor v2 (se vende por separado) para uso en exteriores. La cámara WYZE Cam Pan v3 es una opción avanzada y versátil para monitoreo en diversos entornos.',
            image: 'https://m.media-amazon.com/images/I/51VRgeFtfsL._AC_SL1500_.jpg',
            link: 'https://www.amazon.com/-/es/WYZE-Cam-Pan-inteligente-seguimiento/dp/B0B9TWY11Q/ref=sr_1_4?qid=1691938346&s=electronics&sr=1-4&th=1'
        }, {
            name: 'Mini proyector',
            description: 'El mini proyector actualizado para 2022 ofrece un brillo de 7000 Lux y soporte para Full HD 1080P en pantallas de 60-100 pulgadas. Utiliza tecnología LED avanzada y uniforme para imágenes más nítidas y brillantes, con protección contra fatiga visual a través de la reflexión difusa. De diseño elegante y portátil (6.74 x 5.28 x 2.96 pulgadas y 1.6 lbs), es fácil de llevar gracias a su asa. Conecta con dispositivos vía HDMI, USB y AV, compatibles con iPhone, Android, tabletas, laptops, reproductores de Blu-ray y consolas. No admite streaming directo, pero funciona con Amazon Fire Stick o Roku.Ofrece una experiencia de cine en casa con audio estéreo de alta fidelidad, y la disminución del ruido del ventilador en 80% mejora el confort. Perfecto para cine, juegos y actividades al aire libre.',
            image: 'https://m.media-amazon.com/images/I/51AQ01HrQPL._AC_SL1200_.jpg',
            link: 'https://www.amazon.com/-/es/CLOKOWE-proyector-actualizado-pel%C3%ADculas-compatible/dp/B09Q5GJ7J7/ref=sr_1_17?qid=1691938397&s=electronics&sr=1-17'
        },
        {
            name: 'Ebook Kobo Clara',
            description: 'Este es el Kobo Clara 2E, el primer lector electrónico con más del 85% de plástico reciclado, incluido un 10% proveniente del océano. Nuestro compromiso es evitar que más de 200,000 botellas de plástico contaminen los océanos cada año. El Clara 2E presenta una pantalla táctil HD E INK Carta 1200 de 6 pulgadas con ComfortLight PRO, ajustando la luz azul para descansar tus ojos y mejorar el sueño. La tecnología de tinta E ofrece giros de página más rápidos y contraste profundo, garantizando una lectura cómoda bajo la luz solar. Además, con 16 GB de almacenamiento, lleva toda tu biblioteca donde vayas. Kobo Clara 2E no solo ofrece una experiencia de lectura avanzada, sino que también promueve la sostenibilidad y el respeto al medio ambiente.',
            image: 'https://m.media-amazon.com/images/I/71FVDk5m0zL._AC_SL1500_.jpg',
            link: 'https://www.amazon.com/-/es/Reducci%C3%B3n-ComfortLight-almacenamiento-Tecnolog%C3%ADa-Resistente/dp/B0BCXLQNCC/ref=sr_1_4?qid=1691939930&s=electronics&sr=1-4'
        },
    ]
    return (
        <Box pb={20}>
            <Heading fontFamily={'Poppins'} as="h1">Mejores productos tecnológicos del año 2023 </Heading>
            {articleList.map((product, index) => <ArticleDetails hideDivider={index === articleList.length - 1} product={product} />)}
        </Box>
    )
}

export default ArticleList