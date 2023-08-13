'use client'

import {
    Box,
    Heading,
    Image,
    Text,
    Link,
    useColorModeValue,
    Container,
    Divider,
    Center
} from '@chakra-ui/react'







const ArticleDetails = ({ product, hideDivider }) => {
    return (
        <Container maxW={'7xl'} p="3">
            <Box
                marginTop={{ base: '1', sm: '1' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Center textDecoration="none" _hover={{ textDecoration: 'none' }} height={300}>
                            <Image
                                borderRadius="lg"
                                src={product.image}
                                alt="some good alt text"
                                height={"100%"}
                                objectFit="cover"
                            />
                        </Center>
                    </Box>

                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    position="relative"
                    alignItems={'flex-start'}
                    py={8}
                    marginTop={{ base: '3', sm: '0' }}>
                    <Heading marginTop="1">
                        <Text fontFamily={'Poppins'} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            {product.name}
                        </Text>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        textAlign={'left'}
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontFamily={'Poppins'}
                        fontSize="m">
                        {product.description}
                    </Text>
                    <Link position={'absolute'} bottom={0} right={0} fontSize={'sm'} href={product.link} target={'_blank'}>
                        Ver en Amazon
                    </Link>
                </Box>
            </Box>
            {!hideDivider && <Divider mt={12} />}
        </Container>
    )
}

export default ArticleDetails