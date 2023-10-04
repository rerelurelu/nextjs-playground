'use client';

import { useEffect, useRef } from 'react'

import { Accordion, Button, Flex, Text, useBoolean } from '@chakra-ui/react'

export default function Home() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    console.log(textRef.current?.parentElement?.clientWidth);
    console.log(textRef.current?.scrollWidth);
    console.log(textRef.current?.nextElementSibling);
    console.log(
      `${textRef.current?.parentElement?.clientWidth} vs ${
        textRef.current!.scrollWidth + textRef.current!.nextElementSibling!.clientWidth + 5
      }`
    );
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <Flex w="200px">
        <Text ref={textRef} textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
          あいうえおかきくけこ
        </Text>
        <Text pl="5px">様</Text>
      </Flex>
      <Accordion>ボタン</Accordion>
    </>
  );
}
