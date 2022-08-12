const router = require('express').Router();
const Keys = require("../../models/Key")
router.post("", async (req, res) => {
    const key = req.headers["authorization"];
    try {
        const isKeyValid = await Keys.findOne({ key: key })
        if (!isKeyValid) {
            return res.status(400).send("Invalid Key")
        }
    } catch (err) {
        return res.status(400).send("Invalid Key")
    }
    return res.send("OK")

}
)
module.exports = router;