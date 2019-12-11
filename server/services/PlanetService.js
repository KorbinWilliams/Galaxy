import mongoose from "mongoose";
import Planet from "../models/Planet";

const _repository = mongoose.model("Planet", Planet);

class PlanetService {
  delete(id) {
    ;
  }
  update(id, body) {
    ;
  }
  create(body) {
    ;
  }
  getById(id) {
    ;
  }
  async getAll() {
    return await _repository.find({});
  }
}

const planetService = new PlanetService();
export default planetService;
