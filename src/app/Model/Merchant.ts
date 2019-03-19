// Model for holding Merchant Informations
import {Address} from './Address'
import {Phone} from './Phone'
export interface Merchant {
    // To store merchant ID
    merchantId?: number;
    merchantName?: string;
    categoryCd?: number;
    interBankAssocId?: string;
    visaMemberId?: string;
    transactionDescId?: string;
   
    masterCardId?:string;
    subMerchantId?:string;
    referenceDataId?:string;
    address?:Address;
    phone?:Phone;
}