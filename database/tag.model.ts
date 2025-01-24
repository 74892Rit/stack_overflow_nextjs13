import { Schema, model, models, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true }, // Name of the tag (unique identifier)
  description: { type: String, required: true }, // Description of the tag
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }], // Array of questions associated with this tag
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }], // Array of users following the tag
  createdOn: { type: Date, default: Date.now }, // Date when the tag was created
});

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;
