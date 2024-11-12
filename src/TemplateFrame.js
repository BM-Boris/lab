import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ToggleColorMode from './components/ToggleColorMode';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'absolute', // Fixed position at the top
  top: 0,
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 1,
}));

function TemplateFrame({ mode, toggleColorMode, children }) {
  return (
    <>
      <StyledAppBar>
        <Toolbar
          variant="dense"
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            px: 5, // Horizontal padding
          }}
        >
          <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
        </Toolbar>
      </StyledAppBar>
      {/* Add padding top to prevent content from being hidden behind the AppBar */}
      <Box sx={{ pt: (theme) => theme.spacing(6) }}>{children}</Box>
    </>
  );
}

TemplateFrame.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default TemplateFrame;
