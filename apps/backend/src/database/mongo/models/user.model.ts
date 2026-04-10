import mongoose, { Document, Schema } from 'mongoose';
import { z } from 'zod';
import { ProviderType } from '../../../entity/user/AuthProvider';

export const UserValidationSchema = z.object({
  email: z.string().email("Invalid email address"),
  username: z.string().optional(),
  avatar: z.string().optional(),
  emailVerified: z.boolean().default(false),
  isActive: z.boolean().default(true),
  passwordHash: z.string().optional(),
  role: z.enum(['citizen', 'admin']).default('citizen'),
  profile: z.object({
    caste: z.string().optional(),
    religion: z.string().optional(),
    income: z.number().nonnegative().optional(),
    profession: z.string().optional(),
    state: z.string().optional()
  }).optional(),
  providers: z.array(z.object({
    type: z.nativeEnum(ProviderType),
    providerId: z.string()
  })).default([]),
  verificationCode: z.number().optional(),
  verificationExpiry: z.date().optional(),
});

export type UserType = z.infer<typeof UserValidationSchema>;
export type UserDocument = Document & UserType & { createdAt: Date; updatedAt: Date };

const userSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
  username: { type: String },
  avatar: { type: String },
  emailVerified: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  passwordHash: { type: String },
  role: { type: String, enum: ['citizen', 'admin'], default: 'citizen' },
  profile: {
    caste: { type: String },
    religion: { type: String },
    income: { type: Number },
    profession: { type: String },
    state: { type: String }
  },
  providers: [{
    type: { type: String, enum: Object.values(ProviderType) },
    providerId: { type: String }
  }],
  verificationCode: { type: Number },
  verificationExpiry: { type: Date }
}, { timestamps: true });

export const UserModel = mongoose.model<UserDocument>('User', userSchema);
