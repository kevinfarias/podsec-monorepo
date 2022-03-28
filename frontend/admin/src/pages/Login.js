// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Container, Typography } from '@mui/material';
// layouts
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({ [theme.breakpoints.up('md')]: { display: 'flex' } }));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
    return (
        <RootStyle title="Login | Minimal-UI">
            <MHidden width="mdDown">
                <SectionStyle>
                    <Typography variant="h3" sx={{
                        px: 5,
                        mt: 10,
                        mb: 5 
                    }}>
                        Olá, seja bem vindo de volta 🙂 
                    </Typography>
                    <img src="/static/illustrations/illustration_login.png" alt="login" />
                </SectionStyle>
            </MHidden>

            <Container maxWidth="sm">
                <ContentStyle>
                    <Stack sx={{ mb: 5 }}>
                        <Typography variant="h4" gutterBottom>
                            Entrar no Painel Administrativo do TeInforma TECH
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Preencha os detalhes abaixo.
                        </Typography>
                    </Stack>
                    <LoginForm />
                </ContentStyle>
            </Container>
        </RootStyle>
    );
}
