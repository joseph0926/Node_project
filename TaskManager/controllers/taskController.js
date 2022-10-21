exports.getAllTasks = (req, res, next) => {
  res.send("all tasks");
};

exports.getTask = (req, res, next) => {
  res.send("get task");
};

exports.createTask = (req, res, next) => {
  res.send("create task");
};

exports.updateTask = (req, res, next) => {
  res.send("update task");
};

exports.deleteTask = (req, res, next) => {
  res.send("delete task");
};
