import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    f_name: { type: String, required: true },
    l_name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export default mongoose.model('User', userSchema);