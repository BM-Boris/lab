import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';
import TemplateFrame from './TemplateFrame';

export default function Blog() {
  const [mode, setMode] = React.useState('light');

  // Use default Material-UI theme with light/dark mode
  const theme = React.useMemo(() => createTheme({ palette: { mode } }), [mode]);

  // Determine the system color preference on client side
  React.useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <TemplateFrame mode={mode} toggleColorMode={toggleColorMode}>
        <Container
          maxWidth="lg"
          component="main"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 4, // Reduced top margin
            mb: 4, // Reduced bottom margin
            gap: 4,
          }}
        >
          <MainContent />
          <Latest />
        </Container>
        <Footer />
      </TemplateFrame>
    </ThemeProvider>
  );
}
