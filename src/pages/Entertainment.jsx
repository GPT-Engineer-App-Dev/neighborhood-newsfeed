import { Box, Heading, Text, Image } from '@chakra-ui/react';

const Entertainment = () => (
  <Box p={4}>
    <Heading mb={4}>Entertainment</Heading>
    <Box>
      <Image src="https://source.unsplash.com/random/?concert" alt="Concert" />
      <Text mt={2}>Summer Concert Series Returns to Downtown</Text>
    </Box>
    <Box mt={4}>
      <Image src="https://source.unsplash.com/random/?theater" alt="Theater" />
      <Text mt={2}>Local Theater Group to Perform Classic Shakespeare</Text>
    </Box>
  </Box>
);

export default Entertainment;