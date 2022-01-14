const router = require("express").Router();
const userController = require("../controllers/userController")
const middlerwrare = require("../controllers/middlerwareController")

router.get('/',middlerwrare.verifyToken, userController.getAll);
router.delete('/:id',middlerwrare.verifyTokenUseAndAdmin, userController.deleteUser);

module.exports = router;
