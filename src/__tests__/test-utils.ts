import express, { Express } from 'express';
import { createServer, Server } from 'http';

export class TestServer {
  public app: Express;
  private server: Server;
  private port: number;

  constructor(app: Express, port = 4000) {
    this.app = app;
    this.port = port;
    this.server = createServer(this.app);
  }

  start(): Promise<void> {
    return new Promise((resolve) => {
      this.server.listen(this.port, () => {
        console.log(`Test server running on port ${this.port}`);
        resolve();
      });
    });
  }

  stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.close((err) => {
        if (err) {
          console.error('Error closing test server:', err);
          return reject(err);
        }
        console.log('Test server closed');
        resolve();
      });
    });
  }
}

export const setupApp = (): Express => {
  const app = express();
  app.use(express.json());
  return app;
};
