"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Search, User, BarChart3, BookOpen, LifeBuoy, Puzzle, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1C3E72]">
              <span className="text-lg font-bold text-white">I</span>
            </div>
            <span className="text-xl font-bold text-[#1C3E72]">Invonta</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/facturas" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Facturas
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/clientes" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Clientes
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/productos" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Productos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group h-9 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Más
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[280px] overflow-hidden rounded-xl border border-border/30 bg-white p-3 shadow-lg animate-in fade-in-80 data-[side=bottom]:slide-in-from-top-2">
                    <div className="grid gap-2">
                      <Link
                        href="/reportes"
                        className="group flex items-center gap-3 rounded-lg p-3 text-[#1C3E72] transition-colors hover:bg-[#F3F4F6] hover:text-[#F97316]"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#28C76F]/10">
                          <BarChart3 className="h-5 w-5 text-[#28C76F]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Reportes</div>
                          <div className="text-xs text-muted-foreground">Análisis y estadísticas</div>
                        </div>
                      </Link>
                      <Link
                        href="/configuracion"
                        className="group flex items-center gap-3 rounded-lg p-3 text-[#1C3E72] transition-colors hover:bg-[#F3F4F6] hover:text-[#F97316]"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F97316]/10">
                          <Settings className="h-5 w-5 text-[#F97316]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Configuración</div>
                          <div className="text-xs text-muted-foreground">Personaliza tu cuenta</div>
                        </div>
                      </Link>
                      <Link
                        href="/integraciones"
                        className="group flex items-center gap-3 rounded-lg p-3 text-[#1C3E72] transition-colors hover:bg-[#F3F4F6] hover:text-[#F97316]"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7367F0]/10">
                          <Puzzle className="h-5 w-5 text-[#7367F0]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Integraciones</div>
                          <div className="text-xs text-muted-foreground">Conecta tus servicios</div>
                        </div>
                      </Link>
                      <Link
                        href="/glosario-fiscal"
                        className="group flex items-center gap-3 rounded-lg p-3 text-[#1C3E72] transition-colors hover:bg-[#F3F4F6] hover:text-[#F97316]"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00CFE8]/10">
                          <BookOpen className="h-5 w-5 text-[#00CFE8]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Glosario fiscal</div>
                          <div className="text-xs text-muted-foreground">Términos y definiciones</div>
                        </div>
                      </Link>
                      <Link
                        href="/soporte"
                        className="group flex items-center gap-3 rounded-lg p-3 text-[#1C3E72] transition-colors hover:bg-[#F3F4F6] hover:text-[#F97316]"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EA5455]/10">
                          <LifeBuoy className="h-5 w-5 text-[#EA5455]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Soporte técnico</div>
                          <div className="text-xs text-muted-foreground">Ayuda y asistencia</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>

          <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <SheetContent side="top" className="h-auto">
              <div className="mx-auto max-w-xl py-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Buscar facturas, clientes, productos..."
                    className="h-10 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    autoFocus
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-muted-foreground">
                <User className="h-5 w-5" />
                <span className="hidden md:inline-block">Erick</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mi perfil</DropdownMenuItem>
              <DropdownMenuItem>Configuración</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
