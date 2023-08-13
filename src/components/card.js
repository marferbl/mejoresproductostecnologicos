'use client'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Link
} from '@chakra-ui/react'



export default function ProductCard({ image, description, name, page, height, link }) {
    return (
        <Center py={12} >
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    >
                    <Image
                        rounded={'lg'}
                        height={height || 220}
                        width={282}
                        objectFit={'contain'}
                        src={image}
                        alt="#"
                    />
                </Box>
                <Stack pt={2} align={'center'}>
                    <Heading fontFamily={'Poppins'} fontSize={'xl'} letterSpacing={0.01} fontWeight={500}>
                        {name}
                    </Heading>
                    <Stack direction={'row'} fontSize={11} justify={'center'} height={90}>
                        <Text fontFamily={'Poppins'}>{description}</Text>
                    </Stack>
                    <Stack direction={'column'} align={'center'}>
                        <Link fontSize={'sm'} href={link} target={'_blank'}>
                            Ver en Amazon
                        </Link>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    )
}