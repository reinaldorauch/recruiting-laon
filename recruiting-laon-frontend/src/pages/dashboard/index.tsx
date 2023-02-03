import { useDashboard } from "@/lib/api";
import { Dashboard as DashboardLayout } from "@/layouts/dashboard";
import { MediaList } from "@/components/media-list";
import { Typography } from "@mui/material";

const Dashboard = () => {
  const { content, mediaTypes } = useDashboard();

  return (
    <DashboardLayout>
      <Typography variant="h4" fontWeight="bold" marginTop="56px">
        Populares
      </Typography>
      {mediaTypes.map((m, i) => (
        <MediaList
          key={i}
          media={content.filter((t) => t.mediaType.id === m.id)}
        />
      ))}
    </DashboardLayout>
  );
};

export default Dashboard;
