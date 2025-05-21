import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface BaseChartProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Base component for all chart components
 * Follows the Single Responsibility Principle by handling only chart layout
 */
export function BaseChart({ title, description, children, className = "" }: BaseChartProps) {
  return (
    <Card className={`border-none shadow-sm ${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">{children}</div>
      </CardContent>
    </Card>
  );
}
