const express = require('express');
const router = express.Router();

const {
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/category');

router.get('/', getAllCategories)
router.post('/', addCategory)
router.patch('/:categoryId', updateCategory)
router.delete('/:categoryId', deleteCategory)

module.exports = router;