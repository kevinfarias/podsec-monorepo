module.exports = (sequelize, DataTypes) => {
    const NewsletterModelos = sequelize.define('newsletter_modelos', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return NewsletterModelos;
};

// TODO: finalizar model