"use client";
import { LineChart, Line } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export function RevenueChart({ className }: { className?: string }) {
  const data = [
    { month: "Ene", revenue: 65000 },
    { month: "Feb", revenue: 78000 },
    { month: "Mar", revenue: 72000 },
    { month: "Abr", revenue: 85000 },
    { month: "May", revenue: 92000 },
    { month: "Jun", revenue: 102000 },
    { month: "Jul", revenue: 125400 },
  ];

  return (
    <ChartContainer
      config={{
        revenue: {
          label: "Ingresos",
          color: "hsl(var(--chart-1))",
        },
      }}
      className={className}
    >
      <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line type="monotone" dataKey="revenue" stroke="#1C3E72" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  );
}
