module.exports = (sequelize, DataTypes) => {
    require('dotenv/config');

    const bcrypt = require('bcrypt');

    const Usuarios = sequelize.define('usuarios', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nomecompleto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        situacao: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        datacriacao: {
            type: DataTypes.DATE,
            allowNull: false
        },
        recebernewsletter: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        nivelacesso: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Usuarios.prototype.generateJWTToken = function() {
        const jwt = require('jsonwebtoken');
        
        const secondsByMinute = 60;
        const totalMinutes = 5;
        const oneMilisecond = 1000;
        const expires = secondsByMinute * totalMinutes * oneMilisecond;

        const token = jwt.sign({ 
            id: this.id,
            nome: this.nomecompleto,
            nivelacesso: this.nivelacesso,
            usuario: this.usuario,
            email: this.email
        }, process.env.JWT_SECRET, { expiresIn: expires });

        return {
            token,
            expires
        };
    };

    Usuarios.prototype.verifyPassword = async function(password) {
        if (!this.senha || !password) {
            return false;
        }
        
        const salt = process.env.BCRYPT_SALT;
        const passwordWithSalt = `${password}${salt}`;
        const comparation = await bcrypt.compare(passwordWithSalt, this.senha);

        return password && this.senha && comparation;
    };

    Usuarios.generatePassword = password => {
        const salt = process.env.BCRYPT_SALT;
        const numberOfRounds = 15;
        const passwordWithSalt = `${password}${salt}`;
        const hashedPassword = bcrypt.hashSync(passwordWithSalt, numberOfRounds);

        return hashedPassword;
    };

    return Usuarios;
};