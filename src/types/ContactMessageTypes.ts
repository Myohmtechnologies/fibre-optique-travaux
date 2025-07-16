export type ContactMessageStatus =
  | 'new'
  | 'contacted'
  | 'scheduled'
  | 'completed'
  | 'archived';

export interface IContactMessage {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  message: string;
  status: ContactMessageStatus;
  notes?: string;
  appointmentDate?: string | Date;
  createdAt: string | Date;
  updatedAt?: string | Date;
}
