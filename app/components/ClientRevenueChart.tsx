"use client";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export function ClientRevenueChart({ className }: { className?: string }) {
  const data = [
    { name: "Empresa A", revenue: 42000 },
    { name: "Empresa B", revenue: 28000 },
    { name: "Empresa C", revenue: 18000 },
    { name: "Empresa D", revenue: 15000 },
    { name: "Otros", revenue: 22400 },
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
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="revenue" fill="var(--brand-orange)" radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
