const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const { favsPost, favGet, favDelete } = require("../utils/fav");

const router = Router();

router.get("/rickandmorty/onsearch/:id", getCharById);
router.get("/rickandmorty/detail/:id", getCharDetail);
router.post("/rickandmorty/fav", favsPost);
router.get("/rickandmorty/fav", favGet);
router.delete("/rickandmorty/fav/:id", favDelete);

module.exports = router;
