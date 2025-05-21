"use client";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export function MonthlyRevenueChart({ className }: { className?: string }) {
  const data = [
    { month: "Febrero", revenue: 78000 },
    { month: "Marzo", revenue: 72000 },
    { month: "Abril", revenue: 85000 },
    { month: "Mayo", revenue: 92000 },
    { month: "Junio", revenue: 102000 },
    { month: "Julio", revenue: 125400 },
  ];

  return (
    <ChartContainer
      config={{
        revenue: {
          label: "Ingresos",
          color: "var(--brand-orange)",
        },
      }}
      className={className}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="revenue" fill="var(--brand-orange)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
