import { useState } from "react";
import MainLayout from "./Layouts/MainLayout";

import { createContext } from "react";
import { User, UserContextType } from "./types";

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <MainLayout />
    </UserContext.Provider>
  );
}

export default App;
