import "./globals.css";

export const metadata = {
  title: "Beytullah Duzenli - I-Talent Portfolio",
  description: "Portfolio voor I-Talent opdracht - Beytullah Duzenli, Applicatieontwikkeling PXL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
