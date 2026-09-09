import { useEffect, useState } from "react";
import { Link } from "react-router";

export type usuariosProps = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<usuariosProps[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((response: usuariosProps[]) => {
        setUsuarios(response);
      })
      .catch((error) => {
        setErro(error.message);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <p>Carregando usuários...</p>;
  }

  if (erro) {
    return <p>Erro: {erro}</p>;
  }

  return (
    <div>
      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <p>nome: {usuario.name}</p>
          <p>email: {usuario.email}</p>
          <p>cidade: {usuario.address.city}</p>

          <Link to={`/usuarios/${usuario.id}`}>
            <button>Ver detalhes</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
