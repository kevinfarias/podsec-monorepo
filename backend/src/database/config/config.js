const config = {
    'development': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASS,
        'database': 'development',
        'host': process.env.DB_HOST,
        'port': process.env.DB_PORT,
        'dialect': 'postgres'
    },
    'test': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASS,
        'database': 'test',
        'host': process.env.DB_HOST,
        'port': process.env.DB_PORT,
        'dialect': 'mysql'
    },
    'production': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASS,
        'database': 'production',
        'host': process.env.DB_HOST,
        'port': process.env.DB_PORT,
        'dialect': 'mysql'
    }
};

export default config;