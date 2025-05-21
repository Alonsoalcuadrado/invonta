import { InvoiceStatus } from "@/lib/types/invoice";
import { InvoiceService } from "@/lib/services/invoiceService";

interface StatusBadgeProps {
  status: InvoiceStatus;
  showIcon?: boolean;
  className?: string;
}

export function StatusBadge({ status, showIcon = true, className = "" }: StatusBadgeProps) {
  const styles = InvoiceService.getStatusStyles(status);

  return (
    <div role="status" aria-label={`Status: ${status}`} className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${styles.color} ${className}`}>
      {showIcon && <span aria-hidden="true">{styles.icon}</span>}
      <span>{status}</span>
    </div>
  );
}
