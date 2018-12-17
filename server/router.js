var router = require("express").Router();
var controller = require("./controller.js");

router
  .route("/user")
  .get(controller.get)
  .post(controller.post)

  router
  .route("/check")
  .post(controller.check)
  .get(controller.getUpdated)

  router
  .route("/update")
  .patch(controller.update)
  .get(controller.search)

  router
  .route("/pwd")
  .patch(controller.pwd)

module.exports = router;
