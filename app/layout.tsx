export const metadata = {
  title: "CanDonkeys | Bucks County Trash Can Curb Service",
  description:
    "Trash can curb service in Bucks County. We roll your cans out before pickup and return them after collection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>{children}</body>
    </html>
  );
}
