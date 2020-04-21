const axios = require('axios');

const getTomorrowsForecast = async (req, res) => {
  const { locationTime } = req.params;
  try {
    const data = await axios.get(`${process.env.DS_URL}/${process.env.DS_SECRET_KEY}/${locationTime}`);
    console.log(`${process.env.DS_URL}/${process.env.DS_SECRET_KEY}/forecast/${locationTime}`)
    console.log(data.data)
    return res.status(200).send(data.data)
  } catch (err) {
    console.log(err)
    return res.status(500).send(err);
  }
};


module.exports = {
  getTomorrowsForecast
};
