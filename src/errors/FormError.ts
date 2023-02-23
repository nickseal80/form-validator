import BaseError from "./Error";

class FormError extends BaseError
{
    constructor(message: string) {
        super(message);
        this.name = "FormError";
    }
}

export default FormError;