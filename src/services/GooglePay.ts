/**
 * Google Pay Class
 */
export class GooglePay {

    baseRequest: Object = {
        apiVersion: 2,
        apiVersionMinor: 0
    };

    tokenizationSpecification: Object = {
        type: 'PAYMENT_GATEWAY',
        parameters: {
            'gateway': 'authorize.net',
            'gatewayMerchantId': '724577'
        }
    };

    allowedCardNetworks: string[] = [
        "AMEX",
        "DISCOVER",
        "VISA",
        "MASTERCARD"
    ];

    allowedCardAuthMethods: string[] = [
        "PAN_ONLY",
        "CRYPTOGRAM_3DS"
    ];

    baseCardPaymentMethod: Object = {
        type: "CARD",
        parameters: {
            allowedAuthMethods: this.allowedCardAuthMethods,
            allowedCardNetworks: this.allowedCardNetworks
        }
    };

    cardPaymentMethod: Object = (<any>Object).assign(
        {tokenizationSpecification: this.tokenizationSpecification},
        this.baseCardPaymentMethod
    );

    paymentsClient: any;

    public constructor() {
        console.log("LOADED GOOGLE PAY!");
    }

}

console.log("File loaded");
