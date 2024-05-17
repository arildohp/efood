import ProductList from '../../components/ProductList'
import Cardapio from '../../models/Cardapio'
import hioki from '../../assets/image/hioki.png'
import dolce from '../../assets/image/Dolce.png'
import pizza from '../../assets/image/pizza.png'
import nota from '../../assets/image/nota.png'
import nota2 from '../../assets/image/nota2.png'

const pratos: Cardapio[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    infos: ['Japones'],
    descryption:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki,
    imageNota: nota,
    destaque: 'Destaque da semana'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    descryption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: dolce,
    imageNota: nota2
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    descryption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: dolce,
    imageNota: nota2
  },
  {
    id: 4,
    title: 'Hioki Sushi',
    infos: ['Japones'],
    descryption:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki,
    imageNota: nota
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    descryption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: dolce,
    imageNota: nota2
  },
  {
    id: 6,
    title: 'Hioki Sushi',
    infos: ['Japones'],
    descryption:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki,
    imageNota: nota
  }
]
const Home = () => (
  <>
    <ProductList cardapios={pratos} />
  </>
)

export default Home
