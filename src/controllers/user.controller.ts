import { Request, Response } from "express";

class UserController {
  static async get(_req: Request, res: Response) {
    res.json([
      { id: 1, name: "Jorge" },
      { id: 2, name: "Lady" },
    ]);
  }

  static async find(_req: Request, res: Response) {
    res.json({
      id: 1,
      name: "Jorge",
    });
  }

  static async create(_req: Request, res: Response) {
    res.json({
      id: 1,
      name: "Jorge",
    });
  }

  static async update(_req: Request, res: Response) {
    res.json({
      id: 1,
      name: "Jorge",
    });
  }

  static async delete(_req: Request, res: Response) {
    res.json({
      id: 1,
      name: "Jorge",
    });
  }
}

export default UserController;
