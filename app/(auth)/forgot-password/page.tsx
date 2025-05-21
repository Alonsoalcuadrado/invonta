"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AuthLayout } from "@/components/auth/auth-layout";
import { forgotPasswordSchema } from "@/lib/validations/auth";
import type { z } from "zod";

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const form = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: ForgotPasswordForm) {
    // TODO: Implement forgot password logic
    console.log(data);
  }

  return (
    <AuthLayout title="Recuperar contraseña" subtitle="Ingresa tu email para recibir instrucciones">
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
          <Button type="submit" className="w-full bg-[#1C3E72] hover:bg-[#F97316]">
            Enviar instrucciones
          </Button>
          <p className="text-center text-sm text-gray-600">
            ¿Recordaste tu contraseña?{" "}
            <Link href="/login" className="text-[#1C3E72] hover:text-[#F97316]">
              Volver al login
            </Link>
          </p>
        </form>
      </Form>
    </AuthLayout>
  );
}
