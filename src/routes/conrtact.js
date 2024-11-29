const express = require('express');
const { listContracts, listUnpaidJobs } = require('../controllers/contractController');
const { depositToProfile } = require('../controllers/depositController');

const router = express.Router();

router.get('/:profileId/contracts', listContracts);
router.post('/:profileId/deposit', depositToProfile);
router.get('/:contractId/unpaid-jobs', listUnpaidJobs);

module.exports = router;
