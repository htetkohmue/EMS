import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton,Typography } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
//
import Searchbar from './Searchbar';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({onOpenSidebar , props}) {
  return (
    <RootStyle>
      <ToolbarStyle>
      <Stack  sx={{ px: 2, py: 1.5}}>
        <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
          <Logo /> 
          <Typography variant="h4" color={'black'} sx={{ ml:3,mr:2 }}>
          Education Management System
          </Typography>
        </Box>
      </Stack>
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />
       
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <LanguagePopover props={props}/>
          <NotificationsPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
