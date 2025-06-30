import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import bcrypt from "bcryptjs";

// ✅ Google Sign-In or Email Signup (Optional Password)
export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
    password: v.optional(v.string()), // <-- now supports password
  },
  handler: async (ctx, args) => {
    const userData = await ctx.db.query("users")
      .filter(q => q.eq(q.field("email"), args.email))
      .collect();

    if (userData.length === 0) {
      const hashedPassword = args.password
        ? await bcrypt.hash(args.password, 10)
        : null;

      return await ctx.db.insert("users", {
        name: args.name,
        email: args.email,
        picture: args.picture,
        password: hashedPassword,
      });
    }

    return userData[0];
  },
});

// ✅ Manual Login with Email & Password
export const loginUser = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db.query("users")
      .filter(q => q.eq(q.field("email"), args.email))
      .first();

    if (!user || !user.password) {
      return { success: false, message: "User not found or no password set" };
    }

    const match = await bcrypt.compare(args.password, user.password);

    if (!match) {
      return { success: false, message: "Incorrect password" };
    }

    return { success: true, userId: user._id };
  },
});
