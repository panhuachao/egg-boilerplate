module.exports = app => {
  const { STRING, BIGINT, JSON, DATE } = app.Sequelize

  const stations = app.model.define('stations', {
    id: {
      type: BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    station_alias: {
      type: STRING(50),
      allowNull: false
    },
    station_name: STRING(100),
    station_setting: {
      type: JSON
    },
    created_at: DATE,
    updated_at: DATE
  })

  return stations
}
