var router = require("express").Router();
var controller = require("./controller.js");

router
  .route("/user")
  .get(controller.get)
  .post(controller.post);

  router
  .route("/check")
  .post(controller.check)

module.exports = router;
