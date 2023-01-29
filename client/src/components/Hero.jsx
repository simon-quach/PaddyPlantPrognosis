import {Box, Typography, Stack, Button} from '@mui/material';
import {Parallax} from 'react-parallax';

const url = '/bg.webp';
const Hero = () => {
  return (
    <Parallax bgImage={url} strength={400} blur={2}>
      <Box
        height="100vh"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          flexDirection: 'column',
        }}
      >
        <Stack
          maxWidth="1000px"
          direction="column"
          alignItems="center"
          spacing={2}
          justifyContent="center"
        >
          <Typography variant="h4" sx={{color: 'black'}} align="center">
            Paddy Plant Prognosis
          </Typography>
          <Typography variant="h7" sx={{color: 'black'}} align="center">
            Say goodbye to the hassle of manually inspecting your paddy plants
            for diseases. With our new technology, all you have to do is take a
            picture of your plant and upload it to our system. We'll quickly
            analyze the photo and let you know what's wrong with your plant,
            without the need for lab samples or complicated inspections.
          </Typography>
          <Button
            variant="contained"
            href="/diagnose"
            sx={{
              backgroundColor: 'green',
            }}
          >
            Get Started Now!
          </Button>
        </Stack>
      </Box>
    </Parallax>
  );
};

export default Hero;