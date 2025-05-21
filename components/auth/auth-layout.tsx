import Image from "next/image";
import { ReactNode } from "react";
import { AuthTitle } from "./auth-title";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <>
      <AuthTitle title={title} />
      <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white p-10 rounded-2xl shadow-xl space-y-8">
            <div className="text-center">
              <div className="flex justify-center my-10">
                <Image src="/images/logos/InvontaLogoComplete.png" alt="Invonta Logo" width={240} height={80} className="h-20 w-auto" priority />
              </div>
              <h1 className="text-2xl font-bold text-[#1C3E72]">{title}</h1>
              {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
