import { useState } from "react";

function TaskAdicionar({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log({ title, description });

  return (
    <form
      action=""
      className="inputs-box rounded-lg bg-slate-400 text-slate-950 bg-gradientent p-6 flex flex-col gap-y-3"
    >
      <input
        className="p-2 rounded border-slate-900 outline-slate-400"
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="p-2 rounded border-slate-900 outline-slate-400"
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert(
              "Preencha o título e a descrição nos campos correspondentes"
            );
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="p-2 rounded bg-slate-600 text-slate-50 bg-info-subtle cursor-pointer btn-submit"
        type="button"
        value="Adicionar"
      />
    </form>
  );
}

export default TaskAdicionar;
