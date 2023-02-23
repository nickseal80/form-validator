abstract class BaseError extends Error
{
    /**
     * @param {string} message
     */
    protected constructor(message: string) {
        super(message);
        this.name = "Error";
    }

    /**
     * @param {string} message
     */
    setMessage = (message: string) => {
        this.message = message;
    }
}

export default BaseError;
