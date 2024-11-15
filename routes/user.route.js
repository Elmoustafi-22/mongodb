const validateResource = require("../middleware/validateResource")
const { createUserSchema, loginUserSchema } = require("../schemas/user.schema");
const { createUserHandler, loginUserHandler } = require("../controllers/user.controller");

const userRoute = (app) => {
    app.post("/user", validateResource(createUserSchema), createUserHandler);
    app.post("/user/login", validateResource(loginUserSchema), loginUserHandler);
}

module.exports = userRoute;