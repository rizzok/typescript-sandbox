import {HasFormatter} from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
    constructor(
        readonly recipients: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.recipients} is owed $${this.amount} for ${this.details}`
    }
}
