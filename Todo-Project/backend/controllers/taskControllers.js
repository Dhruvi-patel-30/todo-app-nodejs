import Task from "../models/Task.js";

// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    // validation
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newTask = await Task.create({
      title,
      description,
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get All Task
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task Not FOund" });
    }
    if (task.completed && req.body.completed === true) {
      return res.status(404).json({ message: "Task already completed" });
    }
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
