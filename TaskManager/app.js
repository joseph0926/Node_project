const express = require("express");
const app = express();

const tasks = require("./routes/task");

app.use(express.json());

app.use("api/v1/tasks", tasks);

app.listen(3000);
