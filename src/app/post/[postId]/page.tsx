'use client';

import { useParams } from 'next/navigation'
import { FC } from 'react'

import { Text } from '@chakra-ui/react'

const Page: FC = () => {
  const params = useParams();

  return <Text>{params.postId}</Text>;
};

export default Page;
