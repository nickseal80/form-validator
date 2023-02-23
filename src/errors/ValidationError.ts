import BaseError from "./Error";

class ValidationError extends BaseError
{
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
    }
}

export default ValidationError;