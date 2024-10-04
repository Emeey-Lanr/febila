import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
    email: { type: String, required: true },
  message:{type:String, required:true }
});

export  const contactModel =  mongoose.models.contact || mongoose.model("contacts", contactSchema);
