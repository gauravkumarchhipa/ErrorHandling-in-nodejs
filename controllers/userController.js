import { catchAsynError } from "../middlewares/catchAsyncError.js";
import { User } from "../model/user.js";
import ErrorHandler from "../utils/errorHandler.js";
export const newUser = catchAsynError(async (req, res, next) => {
    const userExist = await User.findOne({ email: "gaurav@gmail.com" });
    if (userExist) {
        return next(new ErrorHandler("User Alreay Exist", 400))
    }

    await User.create({
        name: "gaurav", email: "gaurav@gmail.com"
    })
    res.status(201).json({ message: "User Created Successfully" });
});