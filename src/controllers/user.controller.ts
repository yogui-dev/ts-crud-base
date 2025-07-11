import UserService from "@/services/user.service";
import { Request, Response } from "express";

class UserController {
  static async get(_req: Request, res: Response) {
    const users = await UserService.get();
    res.status(200).json(users);
  }

  static async find(_req: Request, res: Response) {
    const user = await UserService.find(_req.params.id);
    res.status(200).json(user);
  }

  static async create(_req: Request, res: Response) {
    try {
      const user = await UserService.create(_req.body);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        res.status(500).json({ error });
      } else {
        console.error('Unknown error', error);
        res.status(500).json({ error });
      }
    }
  }

  static async update(_req: Request, res: Response) {
    try {
      const user = await UserService.update(_req.params.id, _req.body);
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        res.status(500).json({ error });
      } else {
        console.error('Unknown error', error);
        res.status(500).json({ error });
      }
    }
  }

  static async delete(_req: Request, res: Response) {
    try {
      const user = await UserService.delete(_req.params.id);
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        res.status(500).json({ error });
      } else {
        console.error('Unknown error', error);
        res.status(500).json({ error });
      }
    }
  }
}

export default UserController;
