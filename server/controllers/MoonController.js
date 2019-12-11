import express from "express";
import moonService from "../services/MoonService";

export default class MoonController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.update)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await moonService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(res, req, next) {
    try {
      let data = await moonService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }

  async create(res, req, next) {
    try {
      let data = await moonService.create(req.body);
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }

  async update(res, req, next) {
    try {
      let data = await moonService.update(req.params.id, req.body);
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(res, req, next) {
    try {
      await moonService.delete(req.params.id)
      return res.send("It's dead, you killed it")
    } catch (error) {
      next(error)
    }
  }
}
