const homePage = (_req, res) => 
    // host do banco: ${process.env.DB_HOST}, usuario: ${process.env.DB_USER}
    res.status(200).send('teste');


export { homePage };