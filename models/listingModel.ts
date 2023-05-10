import { Document, Schema, Model, model, Types } from "mongoose";
import mongoose from "mongoose";

export interface Listing extends Document {
  user_id: Types.ObjectId;
  make: string;
  model: string;
  year: number;
  description: string;
  location: string;
  primary_image_url: string; // agregado para eliminar error
  image_urls: string[]; // new field for multiple image URLs
  price_per_day: number;
  is_available: boolean;
  created_at: Date;
  updated_at: Date;
}

const listingSchema = new Schema<Listing>({
  user_id: { type: Schema.Types.ObjectId, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  primary_image_url: { type: String, required: true },
  image_urls: { type: [String], required: true }, // new field for multiple image URLs
  price_per_day: { type: Number, required: true },
  is_available: { type: Boolean, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

// export const ListingModel: Model<Listing> = model<Listing>("Listing", listingSchema);

export default (mongoose.models.Listing as mongoose.Model<Listing>) || mongoose.model('Listing', listingSchema);