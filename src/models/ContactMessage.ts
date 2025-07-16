import mongoose, { Document, Model, Schema } from 'mongoose';

// Définition de l'interface pour le document
export enum ContactMessageStatus {
  new = 'new',
  contacted = 'contacted',
  scheduled = 'scheduled',
  completed = 'completed',
  archived = 'archived'
}

export interface IContactMessage extends Document {
  name: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  message: string;
  status: ContactMessageStatus;
  notes?: string;
  appointmentDate?: Date;
  createdAt: Date;
}

// Définition du schéma Mongoose
const contactMessageSchema = new Schema<IContactMessage>({
  name: {
    type: String,
    required: [true, 'Le nom est requis.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'L\'email est requis.'],
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Veuillez entrer une adresse email valide.'],
  },
  phone: {
    type: String,
    required: [true, 'Le téléphone est requis.'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'L\'adresse est requise.'],
    trim: true,
  },
  postalCode: {
    type: String,
    required: [true, 'Le code postal est requis.'],
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Le message est requis.'],
    trim: true,
  },
  status: {
    type: String,
    enum: Object.values(ContactMessageStatus),
    default: ContactMessageStatus.new,
  },
  notes: {
    type: String,
    trim: true,
  },
  appointmentDate: {
    type: Date,
  },
}, { timestamps: true });

// Création du modèle à partir du schéma
// Utilise le modèle existant s'il a déjà été compilé, sinon en crée un nouveau.
const ContactMessage: Model<IContactMessage> = mongoose.models.ContactMessage || mongoose.model<IContactMessage>('ContactMessage', contactMessageSchema);

export default ContactMessage;
