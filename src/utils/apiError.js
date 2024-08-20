class apiError extends Error{
    constructor(
        statusCode,
        message="Somethin went Wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false;
        this.errors=errors;
    }


//     if(statck){
//         this.stack=statck;
//     }
//     {
//     Error.captureStackTrace(this,this.constructor)
//    }
}

export {apiError}