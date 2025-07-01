import { Request, Response } from "express";

class UserController {
  static async get(_req: Request, res: Response) {
    // RED: devuelve status 500 en vez de 200, y respuesta vacía
    res.status(500).json({ error: "No implementado" });
  }

  static async find(_req: Request, res: Response) {
    res.status(404).json({ error: "Usuario no encontrado" });
  }

  static async create(_req: Request, res: Response) {
    res.status(400).json({ error: "Datos inválidos" });
  }

  static async update(_req: Request, res: Response) {
    res.status(500).json({ error: "No implementado" });
  }

  static async delete(_req: Request, res: Response) {
    res.status(501).json({ error: "No implementado" });
  }
}

export default UserController;
