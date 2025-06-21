export default function ComplexDashboardLayout({
  children,
  userAnalytics,
  revenueMetrics,
  notifications,
  login,
}: {
  children: React.ReactNode;
  userAnalytics: React.ReactNode;
  revenueMetrics: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {

  const isLoggedIn = true;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{userAnalytics}</div>
          <div>{revenueMetrics}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}