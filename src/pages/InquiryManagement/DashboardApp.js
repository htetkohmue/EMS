// @mui
import { useTheme } from '@mui/material/styles';
import { useState,useEffect } from 'react';
import { Grid, Container, Typography ,TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// components
import Page from '../../components/Page';
// sections
import {
  AppWidgetSummary,
} from '../../sections/InquiryManagement/@dashboard/app';
import  Loading from '../../common/LoadingPage/Loading';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [loadingOpen, setloadingOpen] = useState(false); // for values
  useEffect(() => {
      setloadingOpen(true);
      setTimeout(() => {
        setloadingOpen(false);
      }, 500)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [pathname]);
  
  return (
    <Page title="Dashboard">
      {loadingOpen && (<Loading loadingOpen={loadingOpen} />)}
      <Container maxWidth="xl"  >
        <Typography variant="h4" sx={{ mb: 5 }}>
          {t('welcome')} : Inquiry Management
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Students" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Students" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Students" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Students" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
