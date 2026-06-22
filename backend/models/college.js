const mongoose = require("mongoose")

const collegeSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
  },

  shortName: String,

  location: {
    city: String,
    state: String,
  },

  type: {
    type: String, // Government, Private, Deemed
  },

  courses: [String],

  fees: Number,

  nirfRank: Number,

  rating: Number,

  averagePackage: Number,

  highestPackage: Number,

  website: String,

  image: String,

  description: String,

  establishedYear: Number,
},
{ timestamps: true }
);

module.exports = mongoose.model("College", collegeSchema);