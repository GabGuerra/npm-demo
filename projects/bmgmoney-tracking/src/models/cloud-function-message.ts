export class CloudFunctionMessage {
    private eventType: string;
    private data: any;
    private customerId: Number

    constructor(eventType: string, data: any, customerId: Number) {
        this.eventType = eventType;
        this.data = data;
        this.customerId = customerId
    }
}