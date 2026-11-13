
import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { query } from "./_generated/server";


// CREATE DESIGN
export const CreateNewDesign = mutation({
    args: {
        name: v.string(),
        width: v.number(),
        height: v.number(),
        uid: v.id('users')
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.insert('designs', {
            name: args.name,
            height: args.height,
            width: args.width,
            uid: args.uid
        });

        return result;
    }
});


// READ SINGLE DESIGN
export const GetDesign = query({
    args: {
        id: v.id('designs')
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.get(args.id);
        return result;
    }
});


// READ ALL DESIGNS OF A USER
export const GetUserDesigns = query({
    args: {
        uid: v.id('users')
    },
    handler: async (ctx, args) => {
        return await ctx.db.query('designs')
            .filter(q => q.eq(q.field('uid'), args.uid))
            .collect();
    }
});


// UPDATE DESIGN
export const UpdateDesign = mutation({
    args: {
        id: v.id('designs'),
        name: v.optional(v.string()),
        width: v.optional(v.number()),
        height: v.optional(v.number())
    },
    handler: async (ctx, args) => {
        const { id, ...updates } = args;

        await ctx.db.patch(id, updates);

        return id;
    }
});


// DELETE DESIGN
export const DeleteDesign = mutation({
    args: {
        id: v.id('designs')
    },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);

        return args.id;
    }
});
