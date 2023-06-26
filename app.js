import express from "express";
import useRouter from "./routes/user.js"
import errorMiddleware from "./middlewares/Error.js";
import { connectDB } from "./config/database.js";
const app = express();
app.use("/user", useRouter);
connectDB();
app.listen(4500, () => console.log(`Server is working`));

app.use(errorMiddleware);