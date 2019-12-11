import mongoose from "mongoose";
import Star from "../models/Star";

const _repository = mongoose.model("Star", Star);

class StarService {
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

const starService = new StarService();
export default starService;
