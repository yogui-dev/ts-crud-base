import { Request, Response } from "express";

class UserController {
  static async getUsers(_req: Request, res: Response) {
    res.json([
      { id: 1, name: "Jorge" },
      { id: 2, name: "Lady" },
    ]);
  }
}

export default UserController;
