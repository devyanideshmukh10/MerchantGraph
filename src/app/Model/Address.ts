// Model for holding Vehicle Informations

export interface Address {
    // To store TradeIn In
    addressLine1?:string;
    addressLine2?:string;
    city?: string;
    state?: string;
    country?: string;
    postalCd?: string;
}