import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IRealization extends Document {
  title: string;
  slug: string;
  description: string;
  images: string[];
  date: Date;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const RealizationSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    date: { type: Date, default: Date.now },
    published: { type: Boolean, default: false }
  },
  { timestamps: true }
);

// Vérifier si le modèle existe déjà pour éviter l'erreur "OverwriteModelError"
export const Realization: Model<IRealization> = mongoose.models.Realization || 
  mongoose.model<IRealization>('Realization', RealizationSchema);
