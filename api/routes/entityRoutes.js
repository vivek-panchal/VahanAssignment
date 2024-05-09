const express = require('express');
const router = express.Router();
const entityController = require('../controllers/entityController');

// Create a new entity
router.post('/', entityController.createEntity);

// Get all entities
router.get('/', entityController.getEntities);

// Get one entity
router.get("/:id", entityController.getEntity)

// Update an entity
router.put('/:id', entityController.updateEntity);

// Delete an entity
router.delete('/:id', entityController.deleteEntity);

module.exports = router;

