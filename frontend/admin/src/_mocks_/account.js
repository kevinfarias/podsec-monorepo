// ----------------------------------------------------------------------
const jwt = require('jsonwebtoken');

const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
const user = jwt.decode(userData.jwtToken);
const account = userData.jwtToken ? {
    displayName: user.nome,
    email: user.email,
    photoURL: '/static/mock-images/avatars/avatar_default.jpg'
} : {
    displayName: 'Logar',
    email: 'demo@minimals.cc',
    photoURL: '/static/mock-images/avatars/avatar_default.jpg'
};

export default account;
