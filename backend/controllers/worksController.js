const express = require("express");

const workRepository = require("../db/repositories/workRepository");

module.exports = () => {
    const router = express.Router();

    router.get("/", async (req, res) => {
        const works = await workRepository.getWorks();
        res.json(works);
    })

    return router;
}