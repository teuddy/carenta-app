// import { ReservationModel } from './reservationModel';
import { Document, Schema, Model, model, Types } from "mongoose";
import mongoose from "mongoose";

export interface Reservation extends Document {
  user_id:  Types.ObjectId;
  listing_id: Types.ObjectId
  start_date: Date;
  end_date: Date;
  total_price: number;
  status: string;
  created_at: Date;
  updated_at: Date;
}

const reservationSchema = new Schema<Reservation>({
  user_id: { type: Schema.Types.ObjectId, required: true },
  listing_id: { type: Schema.Types.ObjectId, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  total_price: { type: Number, required: true },
  status: { type: String, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  });
  
  // export const ReservationModel: Model<Reservation> = model<Reservation>("Reservation", reservationSchema);

  export default (mongoose.models.ReservationModel as mongoose.Model<Reservation>) || mongoose.model('Reservation', reservationSchema);