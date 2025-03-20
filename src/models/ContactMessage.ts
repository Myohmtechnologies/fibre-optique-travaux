import mongoose, { Document, Model } from 'mongoose';

interface IContactMessage extends Document {
  name: string;
  email: string;
  message?: string; // Rendre le message non requis
}

const contactMessageSchema = new mongoose.Schema<IContactMessage>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: false }, // Message non requis
}, { timestamps: true });

const ContactMessage: Model<IContactMessage> = mongoose.models.ContactMessage || mongoose.model<IContactMessage>('ContactMessage', contactMessageSchema);

export { ContactMessage };