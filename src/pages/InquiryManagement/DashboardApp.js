// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography ,TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
// components
import Page from '../../components/Page';
// sections
import {
  AppWidgetSummary,
} from '../../sections/InquiryManagement/@dashboard/app';


// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  const { t } = useTranslation();
  
  return (
    <Page title="Dashboard">
      
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
