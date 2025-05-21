import { Invoice, InvoiceStatus, InvoiceStatusStyles } from '../types/invoice';
import { THEME } from '../constants/theme';

/**
 * Service class for handling invoice-related operations
 */
export class InvoiceService {
  /**
   * @param status - The invoice status
   * @returns The styling properties for the status
   */
  static getStatusStyles(status: InvoiceStatus): InvoiceStatusStyles {
    const statusKey = status.toLowerCase() as keyof typeof THEME.status;
    const styles = THEME.status[statusKey];

    return {
      color: styles.color,
      textColor: styles.textColor,
      icon: styles.icon,
    };
  }

  /**
   * @param amount - The amount to format
   * @returns Formatted currency string
   */
  static formatAmount(amount: number): string {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(amount);
  }

  /**
   * @param dateString - The date string to format
   * @returns Formatted date string
   */
  static formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
} 