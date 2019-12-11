import mongoose from "mongoose";
import Moon from "../models/Moon";

const _repository = mongoose.model("Moon", Moon);

class MoonService {
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

const moonService = new MoonService();
export default moonService;
