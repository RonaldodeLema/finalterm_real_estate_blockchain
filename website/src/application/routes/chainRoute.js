const router = require('express').Router();
const chainController = require('../controllers/chainController');

router.get('/', chainController.getChain);
router.get('/users', chainController.getAllUsers);
router.post('/users', chainController.createUser);
router.get('/users/:id', chainController.getUserById);
router.put('/users/deposit',chainController.getDepositByUserId)
router.put('/users/withdraw',chainController.getWithDrawByUserId)

router.get('/offers', chainController.getAllOffers);
module.exports = router;