"use client";
import { BarChart, Bar } from "recharts";
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
          color: "#1C3E72",
        },
      }}
      className={className}
    >
      <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="revenue" fill="#1C3E72" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}
