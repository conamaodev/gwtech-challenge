"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const routes_1 = require("./src/routes");
const app = express();
app.use(cors({ origin: process.env.ORIGIN || '*' }));
app.use(express.json());
app.use(routes_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.info(`App listening on port ${port}`);
});
//# sourceMappingURL=app.js.map