import { ArrowUpRight, Plus } from "lucide-react";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/navbar";
import { RevenueChart } from "./components/RevenueChart";
import { ClientRevenueChart } from "./components/ClientRevenueChart";
import { MonthlyRevenueChart } from "./components/MonthlyRevenueChart";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-[hsl(var(--background))]">
      <Navbar />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h1 className="text-2xl font-bold text-brand-blue md:text-3xl">Dashboard</h1>
            <Button className="bg-brand-orange hover:bg-brand-orange/90">
              <Plus className="mr-2 h-4 w-4" />
              Nueva factura
            </Button>
          </div>

          <Card className="border-none bg-brand-blue text-white shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">¡Buen trabajo, Erick! 🚀</h2>
                <p className="text-3xl font-bold">$25,200</p>
                <p className="text-sm text-white/80">Ingresos generados este mes</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Ingresos totales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$125,400</div>
                <div className="text-xs text-brand-green flex items-center mt-1">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  12% vs mes anterior
                </div>
                <div className="mt-4 h-20 md:h-[80px]">
                  <RevenueChart className="w-full h-full" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Estado de facturas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32 facturas</div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-md bg-brand-green/10 p-2">
                    <div className="font-medium text-brand-green">24</div>
                    <div className="text-muted-foreground">Pagadas</div>
                  </div>
                  <div className="rounded-md bg-brand-orange/10 p-2">
                    <div className="font-medium text-brand-orange">5</div>
                    <div className="text-muted-foreground">Pendientes</div>
                  </div>
                  <div className="rounded-md bg-brand-red/10 p-2">
                    <div className="font-medium text-brand-red">3</div>
                    <div className="text-muted-foreground">Vencidas</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Ingresos por cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8 clientes</div>
                <div className="mt-4 h-20 md:h-[80px]">
                  <ClientRevenueChart className="w-full h-full" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Estado fiscal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75% completado</div>
                <div className="text-xs text-muted-foreground mt-1">Objetivo mensual: $33,600</div>
                <div className="mt-4">
                  <Progress value={75} className="h-2 bg-brand-orange" />
                  <div className="mt-1 text-right text-xs text-muted-foreground">$25,200 / $33,600</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Ingresos mensuales</CardTitle>
                <CardDescription>Comparativa de ingresos de los últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60 md:h-[300px] w-full">
                  <MonthlyRevenueChart className="w-full h-full" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Facturas recientes</CardTitle>
                <CardDescription>Últimas facturas emitidas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInvoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${getStatusColor(invoice.status)}`}>{getStatusIcon(invoice.status)}</div>
                        <div>
                          <div className="font-medium">{invoice.client}</div>
                          <div className="text-xs text-muted-foreground">
                            #{invoice.id} • {invoice.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${invoice.amount.toLocaleString()}</div>
                        <div className={`text-xs ${getStatusTextColor(invoice.status)}`}>{invoice.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

const recentInvoices = [
  { id: "INV-2023-078", client: "Corporación Nexus", amount: 5200, date: "25 Jul 2023", status: "Pagada" },
  { id: "INV-2023-077", client: "Grupo Innovatech", amount: 3800, date: "22 Jul 2023", status: "Pendiente" },
  { id: "INV-2023-076", client: "Soluciones Digitales", amount: 4500, date: "18 Jul 2023", status: "Pagada" },
  { id: "INV-2023-075", client: "Consultora Avanza", amount: 2800, date: "15 Jul 2023", status: "Vencida" },
  { id: "INV-2023-074", client: "Tecnología Futuro", amount: 6200, date: "10 Jul 2023", status: "Pagada" },
];

function getStatusColor(status: string) {
  switch (status) {
    case "Pagada":
      return "bg-brand-green/10 text-brand-green";
    case "Pendiente":
      return "bg-brand-orange/10 text-brand-orange";
    case "Vencida":
      return "bg-brand-red/10 text-brand-red";
    default:
      return "bg-gray-100 text-gray-500";
  }
}

function getStatusTextColor(status: string) {
  switch (status) {
    case "Pagada":
      return "text-brand-green";
    case "Pendiente":
      return "text-brand-orange";
    case "Vencida":
      return "text-brand-red";
    default:
      return "text-gray-500";
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "Pagada":
      return <span>✓</span>;
    case "Pendiente":
      return <span>⏱</span>;
    case "Vencida":
      return <span>!</span>;
    default:
      return <span>•</span>;
  }
}
