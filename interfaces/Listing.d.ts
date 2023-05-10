
export interface Listing {
	vin: string;
	make: string;
	model: string;
	year: number;
	type: string;
	description: string;
	location: string;
	primary_image_url: string;
	image_urls: string[]; 
	price_per_day: number;
	is_available: boolean;
	created_at: Date;
	updated_at: Date;
}