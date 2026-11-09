import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [categoria, setCategoria] = useState("Atleta");
  const [mensagem, setMensagem] = useState("");

  function cadastrar(e) {
    e.preventDefault();
    setMensagem("Inscrição recebida! Em breve entraremos em contato.");
    setNome("");
    setEmail("");
    setTelefone("");
  }

  return (
    <main>
      <header>
        <h1>💚 Palmeira Futebol Clube</h1>
        <p>Clínica de Futsal Palmeira</p>
      </header>

      <section>
        <h2>Inscreva-se na nossa Clínica de Futsal!</h2>
        <p>Aprenda, evolua e viva uma experiência incrível.</p>

        <form onSubmit={cadastrar}>
          <label>Nome completo</label>
          <input value={nome} onChange={e => setNome(e.target.value)} required />

          <label>E-mail</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

          <label>Telefone / WhatsApp</label>
          <input value={telefone} onChange={e => setTelefone(e.target.value)} required />

          <label>Você participa como:</label>
          <select value={categoria} onChange={e => setCategoria(e.target.value)}>
            <option>Atleta</option>
            <option>Treinador</option>
            <option>Público</option>
          </select>

          <button type="submit">Realizar inscrição</button>
        </form>

        {mensagem && <p>{mensagem}</p>}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
