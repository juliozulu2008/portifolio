import foto from "../../assets/Julio.png";
import "./profile.css";

export function Profile() {
  return (
    <figure>
      <img src={foto} alt="Imagem de Júlio César Dias dos Santos" />
      <ficaption>Júlio César Dias Dos Santos</ficaption>
    </figure>
  );
}
