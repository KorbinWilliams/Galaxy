import mongoose from "mongoose";
import Galaxy from "../models/Galaxy";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Galaxy", Galaxy);

class GalaxyService {
  async getAll() {
    return await _repository.find({});
  }
  async create(body) {
    let data = await _repository.create(body);
    return data
  }
  async delete(id) {
    let data = _repository.findOneAndDelete(id);
    if (!data) {
      throw new ApiError("Invalid Id", 400)
    }
    return data
  }
  async update(id, body) {
    let data = await _repository.findOneAndUpdate({ _id: id }, body, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid ID", 400)
    }
    return data
  }

  async getById(id) {
    let data = await _repository.findOne({ _id: id });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data
  }

}

const galaxyService = new GalaxyService();
export default galaxyService;
