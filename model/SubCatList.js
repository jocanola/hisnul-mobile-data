const mongoose = require("mongoose");
const duaSubCatSchema = new mongoose.Schema({
  categoryId: {
    type: String,
    default: "",
  },
  duaListTitle: {
    type: String,
    default: "",
  },
  totalDuaNo: {
    type: String,
    default: "",
  },
  references: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("SubCatList", duaSubCatSchema);
