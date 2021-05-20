module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
            //defaultValue: '$2a$10$7UQ9misfwDmfZTathSEqa.FAYGHXMfe/wqEBJ7zV/S.ybaNRR53bO'
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    })
}