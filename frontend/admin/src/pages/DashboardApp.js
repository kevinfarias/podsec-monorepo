// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { useState, useEffect } from 'react';
import { AppTasks,
    AppNewUsers,
    AppBugReports,
    AppItemOrders,
    AppNewsUpdate,
    AppWeeklySales,
    AppOrderTimeline,
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppCurrentSubject,
    AppConversionRates } from '../components/_dashboard/app';
import backendApi from '../utils/backendApi';
import CircularProgress from '@mui/material/CircularProgress';
// ----------------------------------------------------------------------

export default function DashboardApp() {
    const [ initialData, setInitialData ] = useState({
        content: 'Loading...',
        loading: true 
    });

    useEffect(() => {
        backendApi.get('/').then(res => {
            setInitialData({
                content: res.data.content,
                loading: false
            });
        }).catch(err => {
            setInitialData({
                content: err?.response?.data?.message || 'Undefined error at backend',
                loading: false
            });
        });
    }, []);

    return (
        <Page title="Dashboard | Minimal-UI">
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">
                        Olá, seja bem vindo de volta ao painel administrativo do TeInforma Tech 🙂
                    </Typography>
                    <Typography variant="subtitle1">
                        Aqui existirão gráficos super bacanas 
                        sobre o acesso às postagens e tudo mais de bom que possamos
                        trazer para os nossos criadores de conteúdo 🚀
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography>
                            Este conteúdo está vindo do backend: 
                            {initialData.loading === true ? 
                                <CircularProgress color="inherit" /> : 
                                ` 🚀  ${initialData.content}`
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppWeeklySales />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppNewUsers />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppItemOrders />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBugReports />
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppWebsiteVisits />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AppCurrentVisits />
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppConversionRates />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AppCurrentSubject />
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppNewsUpdate />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AppOrderTimeline />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AppTrafficBySite />
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppTasks />
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}
