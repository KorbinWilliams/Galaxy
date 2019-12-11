import mongoose from "mongoose";
import Planet from "../models/Planet";

const _repository = mongoose.model("Planet", Planet);

class PlanetService {
  delete(id) {
    throw new Error("Method not implemented.");
  }
  update(id, body) {
    throw new Error("Method not implemented.");
  }
  create(body) {
    throw new Error("Method not implemented.");
  }
  getById(id) {
    throw new Error("Method not implemented.");
  }
  async getAll() {
    return await _repository.find({});
  }
}

const planetService = new PlanetService();
export default planetService;
