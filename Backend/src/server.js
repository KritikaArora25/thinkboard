import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectdb } from "./config/db.js";


const app = express();
connectdb();

// app.get("/api/notes", (req, res) => {
//     res.send("you got 10 notes");
// });

app.use("/api/notes", notesRoutes);
// app.use("api/product", productRoutes);
// app.use("api/posts", postRoutes);
// app.use("api/payments", PaymentRoutes);
// app.use("api/emails", emailRoutes);


app.listen(5001, ()=>{
    console.log("Server started on PORT: 5001");
});

// mongodb+srv://kritikaarora2505:0riAzlw6Uaxfq1xj@cluster0.mbunia2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


