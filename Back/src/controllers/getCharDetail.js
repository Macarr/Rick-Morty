const axios = require("axios");

const getCharDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const response = (
      await axios(`https://rickandmortyapi.com/api/character/${id}`)
    ).data;

    let charDetail = {
      image: response.image,
      name: response.name,
      gender: response.gender,
      status: response.status,
      origin: response.origin,
      species: response.species,
    };
    res.status(200).json(charDetail);
  } catch (error) {
    res.status(500).send(`El personaje con id:${id} no fue encontrado`);
  }
};

module.exports = getCharDetail;
