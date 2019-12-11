import mongoose from "mongoose";
import Galaxy from "../models/Galaxy";

const _repository = mongoose.model("Galaxy", Galaxy);

class GalaxyService {
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

const galaxyService = new GalaxyService();
export default galaxyService;
