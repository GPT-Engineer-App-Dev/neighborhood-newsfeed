import { Box, Heading, Text, Image } from '@chakra-ui/react';

const Technology = () => (
  <Box p={4}>
    <Heading mb={4}>Technology</Heading>
    <Box>
      <Image src="https://source.unsplash.com/random/?technology" alt="Innovative Tech" />
      <Text mt={2}>Local Startups Lead the Charge in Green Technology</Text>
    </Box>
    <Box mt={4}>
      <Image src="https://source.unsplash.com/random/?computer" alt="Computer" />
      <Text mt={2}>Community Workshop Offers Free Coding Classes</Text>
    </Box>
  </Box>
);

export default Technology;