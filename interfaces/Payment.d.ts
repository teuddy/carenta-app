export interface Payment {
    // el pago
    payment_id: string;
    // detalles como de cuaando a cuando
    reservation_id: string;
    //que usuario pago
    user_id: string;
    // y que vehiculo quiere
    listing_id: string;
    amount: number;
    payment_date: Date;
    payment_method: string;
    payment_active: string;
}