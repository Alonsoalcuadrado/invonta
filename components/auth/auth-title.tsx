import { useEffect } from "react";

interface AuthTitleProps {
  title: string;
}

export function AuthTitle({ title }: AuthTitleProps) {
  useEffect(() => {
    document.title = `${title} | Invonta`;
  }, [title]);

  return null;
}
