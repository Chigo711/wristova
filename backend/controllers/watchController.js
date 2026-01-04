const Watch = require("../models/watchModel");

// Create a new watch
exports.createWatch = async (req, res) => {
  try {
    const existingWatch = await Watch.findOne({ model: req.body.model });
    if (existingWatch) {
      return res.status(400).json({ message: "Watch model already exists" });
    } else {
      const newWatch = await Watch.create(req.body);

      res.status(201).json({
        status: "success",
        data: {
          newWatch,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.getAllWatches = async (req, res) => {
  try {
    const watches = await Watch.find();
    res.status(200).json({
      status: "success",
      data: {
        watches,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// Get a watch by ID
exports.getWatch = async (req, res) => {
  try {
    const watch = await Watch.findById(req.params.id);
    if (!watch) {
      return res
        .status(404)
        .json({ status: "fail", message: "Watch not found" });
    }

    res.status(200).json({
      status: "success",
      data: {
        watch,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Update a watch by ID
exports.updateWatch = async (req, res) => {
  try {
    const updatedWatch = await Watch.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedWatch) {
      return res
        .status(404)
        .json({ status: "fail", message: "Watch not found" });
    }
    res.status(200).json({
      status: "success",
      data: {
        updatedWatch,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// Delete a watch by ID
exports.deleteWatch = async (req, res) => {
  try {
    const deleteWatch = await Watch.findByIdAndDelete(req.params.id);
    if (!deleteWatch) {
      return res
        .status(404)
        .json({ status: "fail", message: "Watch not found" });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
