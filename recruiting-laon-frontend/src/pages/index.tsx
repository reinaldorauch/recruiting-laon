import { Inter } from "@next/font/google";
import { AreaType, useApi } from "@/lib/api";
import { Dashboard as DashboardLayout } from "@/layouts/dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user } = useApi({ area: AreaType.Authenticated });
  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user)}</pre>
    </DashboardLayout>
  );
}
