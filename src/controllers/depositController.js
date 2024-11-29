const { Profile, Deposit } = require('../models');

exports.depositToProfile = async (req, res) => {
  const { profileId } = req.params;
  const { depositValue } = req.body;

  const profile = await Profile.findByPk(profileId);
  if (!profile) return res.status(404).send('Profile not found');

  await profile.increment('balance', { by: depositValue });

  await Deposit.create({
    clientId: profileId,
    operationDate: new Date(),
    depositValue
  });

  res.send('Deposit successful');
};
