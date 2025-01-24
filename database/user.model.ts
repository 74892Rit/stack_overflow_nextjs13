import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputation: number;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true }, // Unique Clerk ID
  name: { type: String, required: true }, // User's full name
  username: { type: String, required: true, unique: true }, // Unique username
  email: { type: String, required: true, unique: true }, // Unique email
  password: { type: String, required: true }, // Optional password (for flexibility)
  bio: { type: String }, // Optional bio for the user
  picture: { type: String, required: true }, // URL for the user's picture
  location: { type: String }, // Optional location
  portfolioWebsite: { type: String }, // Optional portfolio website
  reputation: { type: Number, default: 0 }, // User's reputation score
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }], // Array of saved content (referencing another collection)
  joinedAt: { type: Date, default: Date.now }, // Date the user joined
});

const User = models.User || model("User", UserSchema);

export default User;
