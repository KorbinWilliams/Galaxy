import express from "express";
import planetService from "../services/PlanetService";

export default class PlanetController {
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
      let data = await planetService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(res, req, next) {
    try {
      let data = await planetService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }

  async create(res, req, next) {
    try {
      let data = await planetService.create(req.body);
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }

  async update(res, req, next) {
    try {
      let data = await planetService.update(req.params.id, req.body);
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(res, req, next) {
    try {
      await planetService.delete(req.params.id)
      return res.send("It's dead")
    } catch (error) {
      next(error)
    }
  }
}
