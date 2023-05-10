import { boolean } from "joi";
import { Document, Schema, Model, model, Types } from "mongoose";
import mongoose from "mongoose";

export interface Payment extends Document {
    // el pago
  payment_id: Types.ObjectId;
  // detalles como de cuaando a cuando
  reservation_id: Types.ObjectId;
  //que usuario pago
  user_id: Types.ObjectId;
  // y que vehiculo quiere
  listing_id: Types.ObjectId;
  amount: number;
  payment_date: Date;
  payment_method: string;
  created_at: Date;
  updated_at: Date;
  payment_active: boolean;
}

const paymentSchema =  new Schema<Payment>({
  reservation_id: { type: Schema.Types.ObjectId, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
  listing_id: { type: Schema.Types.ObjectId, required: true },
  amount: { type: Number, required: true },
  payment_date: { type: Date, required: true },
  payment_method: { type: String, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  payment_active: { type: Boolean, required: true }
});

export default (mongoose.models.Payment as mongoose.Model<Payment>) || mongoose.model('Payment', paymentSchema);

