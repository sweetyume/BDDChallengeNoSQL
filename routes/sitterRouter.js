import { Router } from 'express';
import bodyParser from 'body-parser';

import Sitter from '../model/Sitter';

const router = Router();

router.get('/', (req, res) => {
    Sitter.find((err, sitters) => {
        if(err){res.send(err);}
        res.json(sitters);
    });
});

router.post('/add', bodyParser.urlencoded({ extended: false }), (req, res) => {
    const newSitter = new Sitter(req.body);

    newSitter.save((err, sitter) => {
        if (err) { res.send(err); }
        res.json({ "success": `${sitter.username} has been added...` });
    });
});

router.get('/:id', (req, res) => {
    Sitter.findById(req.params.id, (err, Sitter) => {
        if (err) {res.send(err)}
        res.json(sitter);
    })
})
router.post('/:id/edit', bodyParser.urlencoded({ extended: false }), (req, res) => {
    Sitter.findByIdAndUpdate( req.params.id, req.body, (err, updatedSitter) => {
        if (err) { res.send(err); }
        res.json({ "success": `${updatedSitter.username} has been updated...` });
    });
});

export default router;
