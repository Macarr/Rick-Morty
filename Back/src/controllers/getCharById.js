const axios = require("axios");

const url = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios(`${url}${id}`);
    const data = response.data;

    let objeto = {
      id: data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
    };
    res.status(200).json(objeto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getCharById;
