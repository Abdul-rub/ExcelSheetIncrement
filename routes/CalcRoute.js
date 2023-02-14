const { Router } = require("express");
const {
  getAllCalcData,
  PostInputData,
} = require("../controller/InputController");

const calrouter = Router();

calrouter.get("/", getAllCalcData);
calrouter.post("/", PostInputData);

module.exports = calrouter;
