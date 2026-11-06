import logements from '../../data/logements.json';
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import bannerHome from '../../assets/banner-home.svg';
import './style.scss';

function Home() {
  return (
    <main>
      <Banner
        image={bannerHome}
        title="Chez vous, partout et ailleurs"
      />

      <section className="logements">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;