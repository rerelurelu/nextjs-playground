'use client';

import Link from 'next/link'

import { Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <Flex mt={20} gap={10}>
        <Link href={'/post/13'}>Post 13</Link>
        <Link href={'/post/33'}>Post 33</Link>
        <Link href={'/post/43'}>Post 43</Link>
        <Link href={'/post/53'}>Post 53</Link>
      </Flex>
    </>
  );
}
