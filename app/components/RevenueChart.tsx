"use client";
import { LineChart, Line, ResponsiveContainer } from "recharts";
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
          color: "var(--brand-orange)",
        },
      }}
      className={className}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="revenue" stroke="var(--brand-orange)" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
