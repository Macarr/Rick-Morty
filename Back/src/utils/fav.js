let favs = [];

const favsPost = (req, res) => {
  const { id, image, name, gender, species } = req.body;
  const nuevoObj = { id, image, name, gender, species };
  favs.push(nuevoObj);
  res.status(200).send("Agregado a favoritos");
};

const favGet = (req, res) => {
  res.status(200).json(favs);
};

const favDelete = (req, res) => {
  const { id } = req.params;

  let favFiltered = favs.filter((fav) => fav.id !== Number(id));
  favs = favFiltered;
  res.status(200).json(favs);
};

module.exports = {
  favsPost,
  favGet,
  favDelete,
};
