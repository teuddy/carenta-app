export interface User {
    user_id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
    address: string;
    avatar_url: string;
    is_verified: Boolean;
    token: string;
    // verification_token: string;
    // reset_password_token: string;
}