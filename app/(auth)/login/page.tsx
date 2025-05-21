"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AuthLayout } from "@/components/auth/auth-layout";
import { loginSchema } from "@/lib/validations/auth";
import type { z } from "zod";

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginForm) {
    // TODO: Implement login logic
    console.log(data);
  }

  return (
    <AuthLayout title="Iniciar sesión" subtitle="Ingresa tus credenciales para acceder a tu cuenta">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="tu@email.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <Link href="/forgot-password" className="text-sm text-[#1C3E72] hover:text-[#F97316]">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <Button type="submit" className="w-full bg-[#1C3E72] hover:bg-[#F97316]">
            Iniciar sesión
          </Button>
          <p className="text-center text-sm text-gray-600">
            ¿No tienes cuenta?{" "}
            <Link href="/register" className="text-[#1C3E72] hover:text-[#F97316]">
              Regístrate
            </Link>
          </p>
        </form>
      </Form>
    </AuthLayout>
  );
}
