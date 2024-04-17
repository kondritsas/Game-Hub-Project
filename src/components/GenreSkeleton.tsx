import { HStack, List, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GenreSkeleton = () => {
  return (
        <HStack>
            <Skeleton></Skeleton>
            <SkeletonText></SkeletonText>
        </HStack>
  )
}

export default GenreSkeleton
