"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
const port = process.env.PORT || 3333;
app_1.app.listen(port, () => console.log("Server running on port: " + port));
