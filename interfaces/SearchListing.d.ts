
export interface SearchListing {
    type: string | sting[] | undefined,
    location: string | string[] | undefined,
    pickUp: string | string[] | undefined,
    dropOff: string | string[] | undefined,
    price_per_day: string | string[] | undefined,
    minPrice: string | string[] | undefined,
    maxPrice: string | string[] | undefined,
    startDate: string | string[] | undefined,
    endDate: string | string[] | undefined,
}