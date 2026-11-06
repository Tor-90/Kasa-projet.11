import { useParams } from "react-router";
import logements from "../../data/logements.json";
import NotFound from "../NotFound";

function Logement() {
  const { id } = useParams();

  const logement = logements.find(
    (item) => item.id === id
  );

  if (!logement) {
    return <NotFound />;
  }

  return (
    <main>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
    </main>
  );
}

export default Logement;