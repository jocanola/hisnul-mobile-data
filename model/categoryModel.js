const mongoose = require("mongoose");
const duaCategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    default: "",
  },
  categoryImagePath: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Categories", duaCategorySchema);
