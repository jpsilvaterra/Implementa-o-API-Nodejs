const { Contract, Job } = require('../models');

exports.listContracts = async (req, res) => {
  const { profileId } = req.params;
  const contracts = await Contract.findAll({ where: { clientId: profileId } });
  res.json(contracts);
};

exports.listUnpaidJobs = async (req, res) => {
  const { contractId } = req.params;
  const jobs = await Job.findAll({
    where: {
      contractId,
      paid: false
    }
  });
  res.json(jobs);
};
