import MainLayout from "@/components/layouts/main-layout";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <MainLayout>{children}</MainLayout>;
}
