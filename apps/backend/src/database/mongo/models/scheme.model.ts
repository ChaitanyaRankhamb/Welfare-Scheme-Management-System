import mongoose, { Document, Schema } from 'mongoose';

export interface IScheme extends Document {
  title: string;
  description: string;
  ministry: string;
  state: string; // 'Central' or specific state name
  eligibilityCriteria: {
    ageMin?: number;
    ageMax?: number;
    gender?: string;
    incomeMax?: number;
    caste?: string[];
    occupations?: string[];
    [key: string]: any; // Additional flexible criteria
  };
  benefits: string;
  documentsRequired: string[];
  applicationUrl?: string; // external link if applying outside
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const schemeSchema = new Schema<IScheme>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ministry: { type: String, required: true },
  state: { type: String, required: true, default: 'Central' },
  eligibilityCriteria: {
    ageMin: { type: Number },
    ageMax: { type: Number },
    gender: { type: String },
    incomeMax: { type: Number },
    caste: [{ type: String }],
    occupations: [{ type: String }],
  },
  benefits: { type: String, required: true },
  documentsRequired: [{ type: String }],
  applicationUrl: { type: String },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

schemeSchema.index({ title: 'text', description: 'text' });
schemeSchema.index({ state: 1 });
schemeSchema.index({ isActive: 1 });

export const SchemeModel = mongoose.model<IScheme>('Scheme', schemeSchema);
