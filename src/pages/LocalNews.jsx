import { Box, Heading, Text, Image } from '@chakra-ui/react';

const LocalNews = () => (
  <Box p={4}>
    <Heading mb={4}>Local News</Heading>
    <Box>
      <Image src="https://source.unsplash.com/random/?city,night" alt="City at Night" />
      <Text mt={2}>City Council Approves New Urban Development Plan</Text>
    </Box>
    <Box mt={4}>
      <Image src="https://source.unsplash.com/random/?park" alt="Local Park" />
      <Text mt={2}>Renovations Set to Begin on Historic Central Park</Text>
    </Box>
  </Box>
);

export default LocalNews;