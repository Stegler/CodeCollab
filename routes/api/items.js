const express = require('express');
const router = express.Router();

// Requiring Item model
const Item = require('../../models/Item')

// @route   GET api/items
// @desc    Retrieve all items
// @acces   Public
router.get('/', (req, res) => {
    // 'Item' is the model we defined above
    Item.find()
        // Mongoose allows us to use '.sort()' and -1 represents sorting in descending order
        .sort({ date: -1 })
        // Fetches 'items' from the db
        .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Send a new item
// @acces   Public
router.post('/', (req, res) => {
    // Construct an object to post to the db. 'Item({ })' is the name of the model
    const newItem = new Item({
        name: req.body.name,
        age: req.body.age
    });
    // Give us back the object we are saving in json format
    newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Remove an item
// @acces   Public
router.delete('/:id', (req, res) => {
    // Mongoose allows us to use 'findById()' method. Pass in id from paramter in URL ':id'
    Item.findById(req.params.id)
        // Give us item we are searching for then remove
        .then(item => item.remove().then(() => res.json({ success: true })))
        // If we pass an item that doesn't exist send a 404 error response then send 'success:false'
        .catch(err => res.status(404).json({ success: false }))
});

module.exports = router;