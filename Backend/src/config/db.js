import mongoose from "mongoose";

export const connectdb = async () =>{
    try{
        mongoose.connect("mongodb+srv://kritikaarora2505:0riAzlw6Uaxfq1xj@cluster0.mbunia2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MONGODB CONNECTED SUCCESSFULLY");
    }catch(error){
        console.log("Error Connecting to MONGODB", error);
        process.exit(1); //exit with failure
    }
}