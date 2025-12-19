import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    stage: {
      type: String,
      enum: ["new", "qualified", "deal", "won", "lost"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
