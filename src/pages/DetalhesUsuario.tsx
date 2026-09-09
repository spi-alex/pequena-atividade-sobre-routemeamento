import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

type UsuarioProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  company: {
    name: string;
  };
};

export default function DetalhesUsuario() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState<UsuarioProps | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((response) => setUsuario(response));
  }, [id]);

  return (
    <div>
      <h1>Detalhes do Usuário</h1>
      <h2>{usuario?.name}</h2>
      <p>Usuário: {usuario?.username}</p>
      <p>E-mail: {usuario?.email}</p>
      <p>Telefone: {usuario?.phone}</p>
      <p>Site: {usuario?.website}</p>
      <h3>Endereço</h3>
      <p>{usuario?.address.street}</p>
      <p>{usuario?.address.suite}</p>
      <p>{usuario?.address.city}</p>
      <h3>Empresa</h3>
      <p>{usuario?.company.name}</p>

      <Link to="/usuarios">Voltar para usuários</Link>
    </div>
  );
}
