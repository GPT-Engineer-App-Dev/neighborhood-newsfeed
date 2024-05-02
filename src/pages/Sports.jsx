import { Box, Heading, Text, Image } from '@chakra-ui/react';

const Sports = () => (
  <Box p={4}>
    <Heading mb={4}>Sports</Heading>
    <Box>
      <Image src="https://source.unsplash.com/random/?soccer" alt="Soccer Game" />
      <Text mt={2}>Local Team Wins Championship After Dramatic Final</Text>
    </Box>
    <Box mt={4}>
      <Image src="https://source.unsplash.com/random/?basketball" alt="Basketball" />
      <Text mt={2}>High School Basketball Tournament Highlights Rising Stars</Text>
    </Box>
  </Box>
);

export default Sports;