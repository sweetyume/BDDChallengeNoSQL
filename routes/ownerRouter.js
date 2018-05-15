import { Router } from 'express';
import bodyParser from 'body-parser';

import Owner from '../model/owner';
import Comment from '../model/comment';

const router = Router();

router.post('/add', bodyParser.urlencoded({ extended: false }), (req, res) => {
    const newOwner = new Owner(req.body);

    newOwner.save((err, owner) => {
        if (err) {res.send(err);}
        res.json({"success": `${owner.username} has been added...`});
    });
});

router.get('/', (req, res) => {
    debugger
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

// comments
router.post('/:id/comment/create', bodyParser.urlencoded({ extended: true }), (req, res) => {
    // Création du nouveau commentaire
    const newComment = new Comment(req.body);
    // sauvegarde du commentaire dans la collection
    newComment.save((err, comment) => {
        console.log(comment)
        if (err) { res.send(err) }
        // on trouve l'owner en question pour mettre à jour
        // le tableau de commentaires
        Owner.findByIdAndUpdate(
            // id de l'owner en question
            req.params.id,
            // MAJ du tableau de commentaire avec id du nouveau commentaire
            { $push: { comments: comment._id } },
            (err, comment) => {
                err ?  res.send(err)
                    : res.json({ "message": "a comment has been created" })

            })
    })
});

// get  all comments for one owner

router.get('/:id/comments', (req, res) => {
    Owner.findById(req.params.id)
        .populate('comments') // remplace les id trouvés dans tableau comments par le contenu du doc
        .exec((err, owner) => {
            if (err) res.send(err);
            console.log(owner)
            res.send(owner.comments);
        })
});

export default router;