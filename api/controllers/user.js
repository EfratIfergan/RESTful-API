module.exports = {
    login: (req, res) => {
        res.status(200).json({
            massage: "Login"
        })
    },
    signup: (req, res) => {
        res.status(200).json({
            massage: "Signup"
        })
    },
}