import { Grid } from '../../styles/layout/Grid.styled';
import MovieCard from './MovieCard';

export default function MoviesList() {
  const myMovies = [
    {
      categories: ['Ciencia Ficcion', 'Aventura', 'Drama'],
      synopsis:
        'Un futuro lejano, en el que las familias de nobles se disputan el dominio del árido planeta Arrakis, también conocido como Dune por su geografía compuesta por desiertos de dunas. Arrakis es el único lugar donde se encuentra ‘la especia’, la sustancia más codiciada y valiosa del universo que producen gigantescos gusanos de arena. Debido a su rareza, y a su arriesgada extracción, quien controla la producción de la especia, controla el destino no sólo del Imperio, sino de toda la humanidad.',
      id: '1',
      image:
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/08/dune-2433609.jpg',
      stars: 4,
      title: 'Dune',
      year: '2021',
    },
    {
      categories: ['Drama'],
      synopsis:
        'El filme gira en torno al asesinato de Mauricio Gucci, el nieto del fundador de la popular marca de moda. En 1995, Patrizia Reggiani, ex mujer de Mauricio, fue condenada por ordenar a un sicario que terminase con la vida del magnate tras descubrir que éste le había sido infiel.',
      id: '2',
      image:
        'https://dx35vtwkllhj9.cloudfront.net/universalstudios/house-of-gucci/images/regions/ca/onesheet.jpg',
      stars: 4,
      title: 'House of Gucci',
      year: '2021',
    },
    {
      categories: ['Terror', 'Acción'],
      synopsis:
        'Volviendo a los orígenes de la enormemente popular franquicia Resident Evil, el fan y cineasta Johannes Roberts da vida a los juegos para una nueva generación de fanáticos. En esta nueva entrega, Raccoon City, la que alguna vez fue el hogar en auge de la gigantesca farmacéutica, Corporación Umbrella, se ha convertido en un pueblo agonizante en el Medio Oeste de los Estados Unidos.',
      id: '3',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwtL01rIBBO0-TJ664EiFdAfxmlfaXyg_yvsni7jMdzK123Li',
      stars: 2,
      title: 'Resident Evil: Welcome to Raccoon City',
      year: '2021',
    },
    {
      categories: ['Ciencia Ficcion', 'Acción', 'Drama', 'Superheroes'],
      synopsis:
        'Hace millones de años, los seres cósmicos conocidos como los Celestiales decidieron experimentar genéticamente con los humanos, y moldearon nuestra historia y civilizaciones.',
      id: '4',
      image: 'https://style.shockvisual.net/wp-content/uploads/2021/08/ETERNALS-POSTER.jpg',
      stars: 3,
      title: 'Eternals',
      year: '2021',
    },
    {
      categories: ['Animacion', 'Comedia', 'Fantastico'],
      synopsis:
        'Regresan Drácula, su hija Mavis, su yerno humano Jonathan, además de su nieto mitad vampiro mitad humano Dennis, junto con los amiguetes de siempre Wayne, Murray, Frankenstein y el hombre invisible.',
      id: '5',
      image: 'https://pbs.twimg.com/media/FBBUX81UcAE311n?format=jpg&name=large',
      stars: 3,
      title: 'Hotel Transylvania: Transformania',
      year: '2022',
    },
    {
      categories: ['Accion', 'Aventura', 'Superheroes'],
      synopsis:
        'Harta de huir de su pasado, Natasha Romanoff, también conocida como Viuda Negra, se adentra en el núcleo familiar de los Romanoff, Con la familia otra vez reunida, tendrá que hacer frente a una conspiración vinculada a asuntos de su pasado.',
      id: '6',
      image:
        'https://larepublica.pe/resizer/B50h9AqfBZ07F2_MWeVX38KLkHE=/538x0/top/larepublica.pe/resizer/Og3meW0zohvwW4Gto9KrYk1aYyo=/538x0/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/3RFSCR2JEVH3XPQF2MX4SS2TIE.jpg',
      stars: 4,
      title: 'Black Widow',
      year: '2021',
    },
    {
      categories: ['Comedia', 'Drama'],
      synopsis:
        'La película narra los orígenes de Cruella varios años antes de los eventos que ocurrían en el clásico de Disney. ¿Descubriremos cómo Cruella se volvió tan fría y retorcida, además de cómo nació su obsesión por las pieles?.',
      id: '7',
      image:
        'https://www.eluniverso.com/resizer/atYSPqZa94qN3p-r8pCFlOSZW8c=/0x0:1299x1925/452x670/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/IRN2ZUZFANAXVNKJZL62RNJEB4.jpg',
      stars: 4,
      title: 'Cruella',
      year: '2021',
    },
  ];
  return (
    <>
      <h1>Movies List Component</h1>

      <Grid>
        {myMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </>
  );
}
