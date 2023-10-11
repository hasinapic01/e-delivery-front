import { Box, Typography, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';

const MainContent = styled(Box)(
  () => `
      height: 100%;
      display: flex;
      flex: 1;
      overflow: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `
);

const Status404 = () => {
  return (
    <>
      <Helmet>
        <title>Status - 404</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h1" sx={{ my: 2 }}>
              404
            </Typography>
            <Typography variant="h2" sx={{ my: 2 }}>
              The page you were looking for doesn&apos;t exist.
            </Typography>
          </Box>
        </Container>
      </MainContent>
    </>
  );
};

export default Status404;
