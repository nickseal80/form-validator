import BaseError from "./Error";

class FieldError extends BaseError
{
    constructor(message: string) {
        super(message);
        this.name = "FieldError";
    }
}

export default FieldError;