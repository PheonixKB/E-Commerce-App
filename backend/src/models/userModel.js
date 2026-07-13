import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
    },
    password: { type: String, required: true, minlength: 8 },
    // Note: the cart currently lives client-side (localStorage), so
    // nothing writes to this yet. Left in case you later want carts to
    // sync across devices — safe to remove if you don't.
    cartData: { type: Object, default: {} },
  },
  { minimize: false },
);

// Hashes the password whenever it's newly set or changed. Runs
// automatically on both .create() and .save(), so a controller can
// never accidentally store a plaintext password by forgetting to hash
// it manually.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compares a plaintext candidate against the stored hash. Never compare
// passwords with `===` — hashes are salted, so equal passwords don't
// produce equal hashes, and this is the only correct way to check one.
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Defense in depth: even if a future route does `res.json(user)`
// directly instead of picking fields manually, the password hash can
// never end up in a response.
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
