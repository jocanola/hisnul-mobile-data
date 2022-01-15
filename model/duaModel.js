const mongoose = require("mongoose");
const duaSchema = new mongoose.Schema({
  duaListId: {
    type: String,
    default: "",
  },
  yoruba: {
    type: String,
    default: "",
  },
  arabic: {
    type: String,
    default: "",
  },
  audioPath: {
    type: String,
    default: "",
    transliteration: "",
  },
  transliteration: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Dua", duaSchema);
