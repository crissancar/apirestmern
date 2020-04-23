const Order = require("../models/Order");

exports.newOrder = async (req, res, next) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({
      ok: true,
      order,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
    next();
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({}).populate("user").populate({
      path: "products.product",
      model: "Product",
    });
    res.json({
      ok: true,
      orders,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
    next();
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    res.json({
      ok: true,
      order,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
    next();
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json({
      ok: true,
      order,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
      const order = Order.findByIdAndDelete({_id: req.params.id});
      res.json({
          ok: true
      });
  } catch (error) {
      res.status(400).json({
          ok: false,
          error
      });
      next();
  }
};
