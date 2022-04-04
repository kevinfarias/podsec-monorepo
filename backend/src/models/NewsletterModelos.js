module.exports = (sequelize, DataTypes) => {
    const NewsletterModelos = sequelize.define('newsletter_modelos', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        copia: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        copiaoculta: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        corpo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        situacao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        datacriacao: {
            type: DataTypes.DATE,
            allowNull: false
        },
        usuariocriacao: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dataultimaalteracao: {
            type: DataTypes.DATE,
            allowNull: false
        },
        usuarioultimaalteracao: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idconfiguracao: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return NewsletterModelos;
};


// TODO: finalizar model