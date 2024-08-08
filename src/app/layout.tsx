import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Do List",
  description: "Uma aplicação para gerenciamento de tarefas diárias, permitindo adicionar, marcar como concluídas, remover e filtrar tarefas. Inclui persistência de dados no local storage para manter as tarefas entre sessões.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
