const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  symptom: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Patient", patientSchema);
