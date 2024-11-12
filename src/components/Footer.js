import * as React from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <Container
      sx={{
        py: 4,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack direction="row" spacing={2}>
        <IconButton
          color="inherit"
          href="https://github.com/BM-Boris"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://twitter.com/xinhuphd&ved=2ahUKEwjLqq-OrKKJAxUTLtAFHY8nFoIQFnoECBQQAQ&usg=AOvVaw1ig2GKrJ6Kuv-4EXAzZVEs"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.linkedin.com/in/xin-hu-9a92992a&ved=2ahUKEwigus6ZrKKJAxU7M9AFHbH7BLsQFnoECBcQAQ&usg=AOvVaw2stTK2GR2RYOfzsxEqI9M5"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Container>
  );
}
