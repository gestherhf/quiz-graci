/**
 * Created by graciela on 22/07/15.
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'Quiz',
        {
            pregunta: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "-> Falta Pregunta"}}
            },
            respuesta: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "-> Falta Respuesta"}}
            }
        }
    );
}