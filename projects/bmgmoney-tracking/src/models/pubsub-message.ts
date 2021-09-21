export class PubsubMessage
{
    private eventType: string;
    private data: any;

    constructor(eventType: string, data: any){
        this.eventType = eventType;
        this.data = data
    }
}