const router = require('express').Router();
const Submissions = require("../../models/Submissions")
const participantCount = {
    recoil: { min: 5, max: 6 },
    encode: { max: 2 },
    qurious: { max: 2 },
}
router.post("", async (req, res) => {
    const { key, event, coordinator, participants } = req.body;
    let max = participantCount[event]["max"];
    let min = participantCount[event]["min"] || max;
    if (!event && !coordinator && !participants) {
        return res.status(206).send("Values are Missing");
    }
    if (!(participants.length >= min) && !(participants.length <= max)) {
        return res.status(206).send("Participant Count is not valid");
    }
    try {
        const newSubmission = new Submissions({
            key,
            event,
            coordinator,
            participants
        });
        await newSubmission.save();
    } catch (err) {
        console.log(err);
    }
    return res.send("OK");

})
module.exports = router;