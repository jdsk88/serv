import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
    username: { type: String, required: true, index: { unique: true, dropDups: true } },
    email: { type: String, required: true, index: { unique: true, dropDups: true } },
    password: {
        type: String,
        required: true,
        select: false,
    },
    avatarURL: String,
    active: { type: Boolean, default: false },
    token: String
});

userSchema.methods.activate = function (cb) {
    this.active = true;
    return this.save();
};

export const User = mongoose.model("User", userSchema);

// {"username":"jdsk88", "email":"jdsk88@gmail.com", "password":"1234admin", "avatarURL":"https://cdn1.iconfinder.com/data/icons/smileys-emoticons-outlines-with-medical-mask-inclu/96/PIRAT_SMILEY_STONER__outline-512.png"}