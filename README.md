# TS CRUD Base

¡Bienvenido al proyecto base para una API REST con TypeScript, Node.js y Express! Este proyecto te permitirá comenzar rápidamente a desarrollar tu aplicación con todas las configuraciones básicas ya establecidas.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu computadora:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [pnpm](https://pnpm.io/) (gestor de paquetes)
- Un editor de código como [Visual Studio Code](https://code.visualstudio.com/)

## 🚀 Instalación

Sigue estos pasos para configurar el proyecto:

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/ts-crud-base.git
   cd ts-crud-base
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   ```
   Esto instalará todos los paquetes necesarios para que el proyecto funcione.

## 🔧 Configuración

1. **Variables de entorno**
   - Crea un archivo llamado `.env` en la raíz del proyecto
   - Copia el contenido de `.env.example` (si existe) o crea las variables necesarias

   Ejemplo:
   ```
   PORT=3000
   NODE_ENV=development
   ```

## 🖥️ Ejecución

### Modo desarrollo
Para iniciar el servidor en modo desarrollo con recarga automática:

```bash
pnpm dev
```

El servidor estará disponible en: http://localhost:3000

### Modo producción
Para construir y ejecutar la versión de producción:

```bash
pnpm build
pnpm start
```

## 📂 Estructura del Proyecto

```
src/
├── controllers/    # Controladores de la aplicación
├── routes/         # Rutas de la API
├── services/       # Lógica de negocio y acceso a datos
├── models/         # Definición de modelos y ORM
├── config/         # Configuración de base de datos y entorno
├── __tests__/      # Pruebas unitarias
├── index.ts        # Punto de entrada de la aplicación
└── types/          # Tipos de TypeScript
```


## 🌐 Endpoints Disponibles

| Método | Endpoint      | Descripción                   |
|--------|--------------|-------------------------------|
| GET    | /            | Página de inicio              |
| GET    | /users       | Obtener todos los usuarios    |
| GET    | /users/:id   | Obtener un usuario por ID     |
| POST   | /users       | Crear un nuevo usuario        |
| PUT    | /users/:id   | Actualizar un usuario         |
| DELETE | /users/:id   | Eliminar un usuario           |

### Ejemplo de respuesta para `POST /users`
```json
{
  "uuid": "e2f1...",
  "firstName": "Jorge Miguel",
  "lastName": "Arias",
  "email": "jorge.m.arias.p@gmail.com",
  ...
}
```

### Ejemplo de error
```json
{
  "error": "Mensaje de error"
}
```

## 🧪 Pruebas y Colección Postman

- Las pruebas unitarias están en `src/__tests__/` y se ejecutan con:
  ```bash
  pnpm test
  ```
- Puedes importar la colección `MODULO 3.postman_collection.json` en Postman para probar todos los endpoints fácilmente. Incluye scripts para guardar el `uuid` de usuario creado y facilitar pruebas encadenadas.

## 🛠️ Herramientas Utilizadas

- **Runtime:** Node.js
- **Framework:** Express
- **Lenguaje:** TypeScript
- **Gestor de Paquetes:** pnpm
- **Variables de Entorno:** dotenv

## 🤝 Contribuir

Si deseas contribuir al proyecto, por favor:

1. Haz un Fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -am 'Añade nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## ✉️ Contacto

- **Autor:** Yogui Dev
- **Email:** jorge.m.arias.p@gmail.com

---

¡Gracias por usar TS CRUD Base! Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarme.
