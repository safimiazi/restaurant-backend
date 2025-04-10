"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middlewares/validateRequest");
const order_controller_1 = require("./order.controller");
const order_validation_1 = require("./order.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post("/create", (0, validateRequest_1.validateRequest)(order_validation_1.orderValidationSchema), order_controller_1.orderController.create);
router.post("/sslcommerz", (0, auth_1.default)("user"), order_controller_1.orderController.sslcommerz);
router.post('/payments/success/:tran_id', order_controller_1.orderController.paymentSuccess);
router.post('/admin_confirm_order', order_controller_1.orderController.orderConfirm);
router.post('/payments/fail/:tran_id', order_controller_1.orderController.paymentFail);
router.post('/payments/cancel/:tran_id', order_controller_1.orderController.paymentCancel);
router.post('/payments/ipn', order_controller_1.orderController.paymentIPN);
router.get("/get_orders", order_controller_1.orderController.getAll);
router.post("/admin_cancel_order", order_controller_1.orderController.cancelOrder);
router.get("/:id", order_controller_1.orderController.getById);
router.put("/:id", order_controller_1.orderController.update);
router.delete("/:id", order_controller_1.orderController.delete);
router.delete("/bulk", order_controller_1.orderController.bulkDelete);
exports.orderRoutes = router;
