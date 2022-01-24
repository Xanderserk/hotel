import { ExtendingRequestStatus } from '../enums/extendingRequestStatus';
import { ComplaintMin } from './complaintModel';

class ExtendingRequest {
    constructor(params = {}) {
        this.id = params.id;
        this.content = params.content;        
        this.days = params.days;   
        this.authorId = params.authorId;   
        this.decisionOperatorId = params.decisionOperatorId;
        this.decisionReason = params.decisionReason;   
        this.messageStationId = params.messageStationId;   
        this.number = params.number;   
        this.complaint = params.complaint ? new ComplaintMin(params.complaint) : null;   
        this.createDate = params.createDate ? new Date(params.createDate) : null;
        this.decisionDate = params.decisionDate ? new Date(params.decisionDate) : null;
        this.status = params.status && ExtendingRequestStatus.enum[params.status] ? ExtendingRequestStatus.enum[params.status] : ExtendingRequestStatus.enum.AWAIT;
    }
}

export { ExtendingRequest };