const mongoose = require("mongoose");

// schema
const LawdPostSchema = new mongoose.Schema({
  gameDisplayPicture: {
    type: String,
    required: [true, "Please add a display picture"],
  },

  gameTitle: {
    type: String,
    required: [true, "Please add a game title"],
    unique: true,
    trim: true,
    maxlength: [40, "Game title cannot be more 40 characters"],
  },

  gameDescription: {
    type: String,
    required: [true, "Please add a game description"],
    maxlength: [1000, "Game description cannot be more 1000 characters"],
  },

  gameScreenshot_1: {
    type: String,
    required: [true, "Please add atleaset 1 game screenshot"],
  },
  gameScreenshot_2: {
    type: String,
  },
  gameScreenshot_3: {
    type: String,
  },
  gameScreenshot_4: {
    type: String,
  },
  gameScreenshot_5: {
    type: String,
  },

  APK_download_link: {
    type: String,
    required: [true, "Please add a download link"],
  },
  OBB_download_link: {
    type: String,
  },
  DATA_download_link: {
    type: String,
  },

  status: {
    type: String,
    required: true,
    maxlength: 8,
  },
});

module.exports =
  mongoose.models.LawdPost || mongoose.model("LawdPost", LawdPostSchema);
