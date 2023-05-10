import { Document, Schema, Model, model, Types } from "mongoose";
import mongoose from "mongoose";

export interface User extends Document {
  // user_id: Types.ObjectId;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
  avatar_url: string;
  is_verified: boolean;
  token: string;
  // verification_token: string;
  // reset_password_token: string;
  // created_at: Date;
  // updated_at: Date;
}

const userSchema = new Schema<User>({
  // user_id: { type: Schema.Types.ObjectId, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_number: { type: String, required: true },
  address: { type: String, required: true },
  avatar_url: { type: String },
  is_verified: { type: Boolean, required: true },
  token: {type: String},
  // verification_token: { type: String }, // token for validation
  // reset_password_token: { type: String },
  // created_at: { type: Date, required: true },
  // updated_at: { type: Date, required: true },
});

// export const UserModel: Model<User> = model<User>("User", userSchema);

export default (mongoose.models.User as mongoose.Model<User>) || mongoose.model('User', userSchema);