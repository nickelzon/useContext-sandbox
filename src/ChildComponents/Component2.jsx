import { useContext } from "react";
import { userContext } from "../App";

const Component2 = () => {
  const user = useContext(userContext);
  return (
    <div>
      <h1>Hello again {user.name}</h1>
    </div>
  );
};

export default Component2;
