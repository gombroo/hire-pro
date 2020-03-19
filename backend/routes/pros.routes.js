const express = require('express');
const router = express.Router();

const Pro = require('../models/pro.model');

router.get('/pros', async (req, res) => {
  try {
    const result = await Pro
      // .find({status: 'published'})
      .select('name genre category price image descripiton');
      // .sort({created: -1});
    if(!result) res.status(404).json({ pro: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/pros/:id', async (req, res) => {
  try {
    const result = await Pro
      .findById(req.params.id);
    if(!result) res.status(404).json({ pro: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
