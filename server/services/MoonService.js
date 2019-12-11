import mongoose from "mongoose";
import Moon from "../models/Moon";

const _repository = mongoose.model("Moon", Moon);

class MoonService {
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

const moonService = new MoonService();
export default moonService;
