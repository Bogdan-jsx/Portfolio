const workModel = require("../models/workModel").model;

async function addWork(work) {
    const newWork = workModel(work);
    return await newWork.save();
}

async function getWorks() {
    const works = await workModel.find();
    return works;
}

async function updateWork(id, newInfo) {
    return await workModel.findByIdAndUpdate(id, newInfo);
}

async function deleteWork(id) {
    return await workModel.findByIdAndDelete(id);
}

module.exports = {
    addWork,
    getWorks,
    updateWork,
    deleteWork,
}
