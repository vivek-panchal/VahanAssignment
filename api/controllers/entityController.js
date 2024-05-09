const Entity = require("../models/entityModel");

// Create new entity
exports.createEntity = async (req, res) => {
  try {
    const newEntity = await Entity.create(req.body);
    await newEntity.save();
    res.status(201).json(newEntity);
  } catch (err) {
    console.error("Error creating entity:", err);
    res.status(500).json({ message: "Error creating entity" });
  }
};

// Get all entities
exports.getEntities = async (req, res) => {
  try {
    const entities = await Entity.find();
    res.status(200).json(entities);
  } catch (err) {
    console.error("Error getting entities:", err);
    res.status(500).json({ message: "Error getting entities" });
  }
};

// Get one entity
exports.getEntity = async (req, res) => {
  const id = req.params.id;
  try {
    const entity = await Entity.findOne({ _id: id });
    res.status(200).json(entity);
  } catch (err) {
    console.error("Error getting entities:", err);
    res.status(500).json({ message: "Error getting entity" });
  }
};

// Update an entity
exports.updateEntity = async (req, res) => {
  try {
    const id = req?.params?.id;
    const entryExists = await Entity.findById(id);
    if (!entryExists) {
      return res.status(404).json({ message: "Entity not found" });
    }
    const updatedEntity = await Entity.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedEntity);
  } catch (err) {
    console.error("Error updating entity:", err);
    res.status(500).json({ message: "Error updating entity" });
  }
};

// Delete an entity
exports.deleteEntity = async (req, res) => {
  try {
    const id = req?.params?.id;
    const entryExists = await Entity.findById(id);
    if (!entryExists) {
      return res.status(404).json({ message: "Entity not found" });
    }
    await Entity.findByIdAndDelete(id);

    res.status(200).json({ message: "Entity deleted successfully" });
  } catch (err) {
    console.error("Error deleting entity:", err);
    res.status(500).json({ message: "Error deleting entity" });
  }
};
