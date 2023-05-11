export interface Reservation {
    user_id: Types.ObjectId;
    listing_id: Types.ObjectId;
    start_date: Date;
    end_date: Date;
    total_price: number;
    status: string;
    // created_at: Date;
    // updated_at: Date;
}