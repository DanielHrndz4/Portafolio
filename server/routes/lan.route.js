const express = require('express')
const lanSchema = require('../models/lan.model')
const router = express.Router();

router.post('/lan', (req, res) => {
    const lan = lanSchema(req.body)
    lan
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
});

router.get('/lan', (req, res) => {
    lanSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
});

router.get('/lan/:category', (req, res) => {
    const category = req.params.category;
    lanSchema
        .find({ 'category': category })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

router.get('/lan/:name', (req, res) => {
    const category = req.params.name;
    lanSchema
        .find({ 'name': category })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

module.exports = router