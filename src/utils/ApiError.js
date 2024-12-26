class ApiError extends Error{
    constructor(
        statusCode,
        message= "something went wrong",
        errors=[],
        statick= ""

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (statick) {
            this.stack = this.stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }