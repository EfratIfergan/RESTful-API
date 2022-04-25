module.exports = {
    getAllCategories: (req, res) => {
        res.status(200).json({
            massage: "Get all categories"
        })
    },
    addCategory: (req, res) => {
        res.status(200).json({
            massage: "Add new category"
        })
    },
    updateCategory: (req, res) => {
        const categoryId = req.params.categoryId;

        res.status(200).json({
            massage: `Update category - ${categoryId}`
        })
    },
    deleteCategory: (req, res) => {
        const categoryId = req.params.categoryId;

        res.status(200).json({
            massage: `Delete category - ${categoryId}`
        })
    }
}