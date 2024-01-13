import { useState } from "react";

import TodoApp from "./TodoApp";
import { AbilityContext } from "./Can";
import defineAbilityFor from "./ability";

import "./App.css";
import PermissionController from "./PermissionController";

function App() {
  // list of permissions
  const [permissions, setPermissions] = useState({
    Todo: ["read", "update", "delete", "create"],
  });

  // ability instance
  const ability = defineAbilityFor(permissions);

  return (
    <>
      <PermissionController
        permissions={permissions}
        setPermissions={setPermissions}
      />
      <AbilityContext.Provider value={ability}>
        <TodoApp />
      </AbilityContext.Provider>
    </>
  );
}

export default App;
