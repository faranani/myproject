module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      tittle : {
          type : Sequelize.STRING

      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Tutorial;
  };
  