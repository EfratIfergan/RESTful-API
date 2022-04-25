module.exports = {
    getAllArticles: (req, res) => {
        res.status(200).json({
            massage: "Get all articles"
        })
    },
    addArticle: (req, res) => {
        res.status(200).json({
            massage: "Add new article"
        })
    },
    updateArticle: (req, res) => {
        const articleId = req.params.articleId;

        res.status(200).json({
            massage: `Update article - ${articleId}`
        })
    },
    deleteArticle: (req, res) => {
        const articleId = req.params.articleId;

        res.status(200).json({
            massage: `Delete article - ${articleId}`
        })
    }
}