import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Index = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Welcome to Our News Portal</Heading>
      <Flex direction="column" align="center" justify="center">
        <Link as={RouterLink} to="/local-news" p={2}>Local News</Link>
        <Link as={RouterLink} to="/sports" p={2}>Sports</Link>
        <Link as={RouterLink} to="/technology" p={2}>Technology</Link>
        <Link as={RouterLink} to="/entertainment" p={2}>Entertainment</Link>
      </Flex>
    </Box>
  );
};

export default Index;