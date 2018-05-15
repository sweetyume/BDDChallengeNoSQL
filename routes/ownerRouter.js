import { Router } from 'express';
import bodyParser from 'body-parser';

import Owner from '../model/Owner';

const router = Router();

router.post('/add', bodyParser.urlencoded({ extended: false }), (req, res) => {
    const newOwner = new Owner(req.body);

    newOwner.save((err, owner) => {
        if (err) {res.send(err);}
        res.json({"success": `${owner.username} has been added...`});
    });
});

router.get('/', (req, res) => {
    Owner.find((err, owners) => {
        if (err) { res.send(err); }
        res.json(owners);
    });
});

router.get('/:id', (req, res) => {
    Owner.findById(req.params.id, (err, owner) => {
        if(err) {res.send(err)}
        res.json(owner);
    });
});

router.post('/:id/edit', bodyParser.urlencoded({ extended: true }), (req, res) => {
    Owner.findByIdAndUpdate(req.params.id, req.body, (err, updatedOwner) => {
        if (err) { res.send(err) }
        res.json({"success": `${updatedOwner.username} has been updated`})
    });
});

router.delete('/:id/delete', (req, res) => {
    Owner.remove({_id: req.params.id}, (err, owner) => {
        if(err){res.send(err)};
        res.json({message: `${owner.username} has been removed`});
    });
});
export default router;