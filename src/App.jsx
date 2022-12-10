import { createContext, useState, useEffect } from "react";
import Component2 from "./ChildComponents/Component2";

export const userContext = createContext();
const App = () => {
  const [user, setUser] = useState({
    id: 0,
    name: "Cristel",
    location: "Ortigas, Metro Manila",
    sex: "F",
  });

  return (
    <div>
      <userContext.Provider value={user}>
        <h1>Hello {user.name}</h1>
        <Component2 />
      </userContext.Provider>
    </div>
  );
};

export default App;
