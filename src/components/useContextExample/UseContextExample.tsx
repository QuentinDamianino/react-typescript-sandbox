import { useState } from "react";
import { DashboardContext } from "./context";
import Dashboard from "./Dashboard";

export interface User {
  isSubscribed: boolean;
  name: string;
}

const UseContextExample = () => {
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'Damian',
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}

export default UseContextExample;
