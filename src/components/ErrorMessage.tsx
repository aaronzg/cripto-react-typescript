import { ReactNode } from "react";

export default function ErrorMessage({ children }: {children: ReactNode}) {
  return (
    <div className="error-message">{children}</div>
  )
}
