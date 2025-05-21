"use client";

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AuthLayout } from "@/components/auth/auth-layout";
import { resetPasswordSchema } from "@/lib/validations/auth";
import type { z } from "zod";

type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: ResetPasswordForm) {
    // TODO: Implement reset password logic with token
    console.log({ ...data, token });
  }

  if (!token) {
    return (
      <AuthLayout title="Token inválido" subtitle="El enlace de restablecimiento de contraseña no es válido">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">Por favor, solicita un nuevo enlace de restablecimiento de contraseña.</p>
          <Button asChild className="bg-[#1C3E72] hover:bg-[#F97316]">
            <a href="/forgot-password">Solicitar nuevo enlace</a>
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Restablecer contraseña" subtitle="Ingresa tu nueva contraseña">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nueva contraseña</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar nueva contraseña</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-[#1C3E72] hover:bg-[#F97316]">
            Restablecer contraseña
          </Button>
        </form>
      </Form>
    </AuthLayout>
  );
}
