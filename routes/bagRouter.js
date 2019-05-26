const express = require('express');
const bagRouter = express.Router();
const BagService = require('../services/bagService');

bagRouter.post('/', (req, res, next) => {
    const { trip_id, type_id } = req.body;

    BagService.create(trip_id, type_id)
        .then(({ id }) => {
            res.status(200);
            res.json({ id });
        })
        .catch(err => {
            next(err);
        })
});

bagRouter.put('/:id', (req, res, next) => {
    const { id } = req.params;

    BagService.update(req.body, id) 
    .then( _  => {
        res.status(200);
        res.json({
            message: 'update successful'
        });
    })
    .catch( err => {
        next(err);
    });
});

module.exports = bagRouter;