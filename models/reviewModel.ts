import { Document, Schema, Model, model, Types } from "mongoose";
import mongoose from "mongoose";

//para que usuarios hagan reviews, esto solo luego de que hayan reservado
export interface Review extends Document {
  reservation_id: Types.ObjectId;
  user_id: Types.ObjectId;
  description: string;
  rating: number;
  created_at: Date;
  updated_at: Date;
}

const reviewSchema = new Schema<Review>({
  reservation_id: { type: Schema.Types.ObjectId, required: true, ref: "Reservation" },
  user_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// export const ReviewModel: Model<Review> = model<Review>("Review", reviewSchema);

export default (mongoose.models.Review as mongoose.Model<Review>) || mongoose.model('Review', reviewSchema);