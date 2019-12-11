import mongoose from "mongoose";
import Galaxy from "../models/Galaxy";

const _repository = mongoose.model("Galaxy", Galaxy);

class GalaxyService {
  delete() {
    throw new Error("Method not implemented.");
  }
  update() {
    throw new Error("Method not implemented.");
  }
  create() {
    throw new Error("Method not implemented.");
  }
  getById() {
    throw new Error("Method not implemented.");
  }
  async getAll() {
    return await _repository.find({});
  }
}

const galaxyService = new GalaxyService();
export default galaxyService;
