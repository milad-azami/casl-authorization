import { Can } from "./Can";

// read - update - delete - create
function TodoApp() {
  const fakeTodos = [
    { id: 1, title: "Todo #1" },
    { id: 2, title: "Todo #2" },
    { id: 3, title: "Todo #3" },
  ];

  return (
    <div>
      <h4>Todo Form</h4>
      <section>
        <Can I="create" a="Todo">
          <input placeholder="Todo Text" />
          <button>Add</button>
        </Can>
      </section>
      <div>
        <Can I="read" a="Todo">
          {fakeTodos.map((todo) => (
            <section key={todo.id}>
              <p>{todo.title}</p>
              <Can I="update" a="Todo">
                <button>Edit</button>
              </Can>
              <Can I="delete" a="Todo">
                <button>Delete</button>
              </Can>
            </section>
          ))}
        </Can>
      </div>
    </div>
  );
}

export default TodoApp;
