import mongoose from "mongoose";
import Star from "../models/Star";

const _repository = mongoose.model("Star", Star);

class StarService {
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

const starService = new StarService();
export default starService;
