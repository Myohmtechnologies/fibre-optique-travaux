import mongoose, { Schema, Document } from 'mongoose';

export interface IQuote extends Document {
  environment: string;
  housingType: string;
  operator: string;
  fullName: string;
  phone: string;
  address: string;
  postalCode: string;
  message?: string;
  status: 'new' | 'contacted' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

const QuoteSchema: Schema = new Schema({
  environment: { type: String, required: true },
  housingType: { type: String, required: true },
  operator: { type: String, required: true },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  postalCode: { type: String, required: true },
  message: { type: String, default: '' },
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'in_progress', 'completed', 'cancelled'],
    default: 'new'
  }
}, { timestamps: true });

// Vérifier si le modèle existe déjà pour éviter les erreurs de redéfinition
export const Quote = mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);
