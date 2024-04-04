// This is done thorugh promise and it can be perfromed through try catch , as try-catch one is more easy but have to do both
const asyncHandler=(requestHandler)=>{ 
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
    }
}



export {asyncHandler};


//asyncHandler is a higher order function

// const asyncHandler=(fn)=>{ ()=>{} }  ----------------> This is method through try catch and we can also perform through promise

// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message,
//         })
//     }
// } 