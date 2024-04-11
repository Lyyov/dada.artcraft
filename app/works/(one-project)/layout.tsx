import { OneProjectProvider } from "./_components/ModalContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OneProjectProvider>{children}</OneProjectProvider>;
}
