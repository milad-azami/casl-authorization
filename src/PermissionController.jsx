// This component add/remove items of permissions state
// to show or hide elements using <Can> component

function PermissionController({ permissions: { Todo }, setPermissions }) {
  const changeHandler = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;

    if (checked) {
      setPermissions({ Todo: [...Todo, name] });
    } else {
      setPermissions({ Todo: Todo.filter((p) => p !== name) });
    }
  };

  return (
    <div>
      <h4>Permission Editor</h4>
      <section>
        {["read", "create", "update", "delete"].map((i) => (
          <div key={i}>
            <label htmlFor={i}>{i}</label>
            <input
              type="checkbox"
              name={i}
              checked={Todo.includes(i)}
              onChange={changeHandler}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default PermissionController;
