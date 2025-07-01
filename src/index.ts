import express from "express";
import router from "./routes";
import { sequelize } from "./config/.database/config";
import "./config/env.config";
import env from "./config/env.config";

const app = express();
const PORT = env.PORT;

app.use(express.json());
app.use("/api/v1", router);

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Conexión a la base de datos establecida.");

    return sequelize.sync({ force: true }).then(() => {
      console.log("🧨 Todas las tablas fueron eliminadas y recreadas.");
    });
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error al conectar a la base de datos:", err);
  });
