import { Dashboard as DashboardLayout } from "@/layouts/dashboard";
import { useMedia } from "@/lib/api";
import { useRouter } from "next/router";

export default function Media() {
  const router = useRouter();

  const { media } = useMedia(router.query.media);

  if (!media) {
    return <>not found</>;
  }

  return <DashboardLayout></DashboardLayout>;
}
