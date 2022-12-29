const express = require("express");
const multer = require("multer");

const workRepository = require("../db/repositories/workRepository");
const imageRepository = require("../db/repositories/imageRepository");

const upload = multer({ storage: multer.memoryStorage() });

module.exports = () => {
    const router = express.Router();

    router.get("/", async (req, res) => {
        const works = await workRepository.getWorks();
        res.json(works);
    })

    router.post("/", upload.single("work-image"), async (req, res) => {
        const { name, description, link } = req.body;
        const file = req.file;
        const usedTechnologies = JSON.parse(req.body.usedTechnologies);
        const image = await imageRepository.createFile({ file })
        await workRepository.addWork({ name, description, usedTechnologies, link, image })
        res.sendStatus(200);
    })

    router.get("/image/:id", async (req, res) => {
        const { id } = req.params;
        await imageRepository.findFile(id, res);
    })

    return router;
}