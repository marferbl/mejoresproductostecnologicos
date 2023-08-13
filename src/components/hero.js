'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function Hero() {
    const URL = './hero.jpg' || 'https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265047_1280.jpg'
    return (
        <Flex
            w={'full'}
            h={'400'}
            backgroundImage={
                URL
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={'bold'}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>
                        Mejores productos tecnológicos 2023
                    </Text>

                </Stack>
            </VStack>
        </Flex>
    )
}