import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import { Link,
    Stack,
    Checkbox,
    TextField,
    IconButton,
    InputAdornment,
    FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { saveLocalToken } from '../../../utils/useToken';
import api from '../../../utils/backendApi';

// ----------------------------------------------------------------------

export default function LoginForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema = Yup.object().shape({
        username: Yup.string().required('Usuário é obrigatório'),
        password: Yup.string().required('Senha é obrigatória')
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            remember: true
        },
        validationSchema: LoginSchema,
        onSubmit: () => {
            api.post('/auth/login', {
                username: values.username,
                password: values.password
            }).then(response => {
                const dados = response.data;

                if (dados.jwtToken) {
                    saveLocalToken(dados);
                    navigate('/dashboard', { replace: true });
                } else {
                    alert(`Erro desconhecido 2! ${JSON.stringify(dados)}`);
                }
            }).catch(e => {
                alert(`Erro desconhecido! ${JSON.stringify(e)}`);
            });
        }
    });

    const {
        errors, touched, values, isSubmitting, handleSubmit, getFieldProps 
    } = formik;

    const handleShowPassword = () => {
        setShowPassword(show => !show);
    };

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="text"
                        label="Usuário"
                        {...getFieldProps('username')}
                        error={Boolean(touched.username && errors.username)}
                        helperText={touched.username && errors.username}
                    />

                    <TextField
                        fullWidth
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label="Senha"
                        {...getFieldProps('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleShowPassword} edge="end">
                                        <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                    />
                </Stack>

                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                    <FormControlLabel
                        control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
                        label="Lembrar de mim"
                    />

                    <Link component={RouterLink} variant="subtitle2" to="#">
                        Esqueceu a senha?
                    </Link>
                </Stack>

                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                >
                    Entrar
                </LoadingButton>
            </Form>
        </FormikProvider>
    );
}
