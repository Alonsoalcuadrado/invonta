/**
 * Represents the possible statuses for an invoice
 */
export type InvoiceStatus = 'Paid' | 'Pending' | 'Overdue';

/**
 * Interface representing an invoice in the system
 */
export interface Invoice {
  id: string;
  client: string;
  amount: number;
  date: string;
  status: InvoiceStatus;
}

/**
 * Interface for invoice status styling properties
 */
export interface InvoiceStatusStyles {
  color: string;
  textColor: string;
  icon: React.ReactNode;
} 