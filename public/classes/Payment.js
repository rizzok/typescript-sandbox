export class Payment {
    constructor(recipients, details, amount) {
        this.recipients = recipients;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipients} is owed $${this.amount} for ${this.details}`;
    }
}
