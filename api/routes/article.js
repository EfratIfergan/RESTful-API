const express = require('express');
const router = express.Router();

const {
    getAllArticles,
    addArticle,
    updateArticle,
    deleteArticle
} = require('../controllers/article');

router.get('/', getAllArticles)
router.post('/', addArticle)
router.patch('/:articleId', updateArticle)
router.delete('/:articleId', deleteArticle)

module.exports = router;