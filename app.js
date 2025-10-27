import express from "express";
import employees from "#db/employees";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello employees!");
});
app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});
app.get("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((emp) => emp.id === id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});
app.get("/employees", (req, res) => {
  res.json(employees);
});
export default app;
