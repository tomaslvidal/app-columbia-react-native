import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import SwipeableParallaxCarousel, {ScrollView, SwipeableCarousel} from 'react-native-swipeable-parallax-carousel';
import BackLeft from '../components/BackLeft.js'
import Footer from '../components/Footer.js'
import Div from './ModelContainer/index.js';


export default class DestinationDetail extends Component {
  
  
  constructor(props){
    super(props);
    
    this.state = {
      datacarousel: [
      {
          "id": 339964,
          "title": "Valerian and the City of a Thousand Planets",
          "imagePath": "https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg",
      },
      {
          "id": 315635,
          "imagePath": "https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
      },
      {
          "id": 339403,
          "title": "Baby Driver",
          "subtitle": "More than just a trend",
          "imagePath": "https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg",
      },
      ],
      loremText : "lorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdflorelfsdfsdfsdfsdfdsfsdfsdfsdfsdf"
    }
  }
  
  changePage(){
    Actions.pop();
  }

  render() {
    var imgPath = '../img/';
  
    return (
      <Div name="Formulario de Reclamos" icon="wpforms">
{/*          <View style={{display: 'flex', flex: 1, backgroundColor: '#48BBEC'}}>
            <SwipeableParallaxCarousel
              data={this.state.datacarousel}
              navigation={true}
              navigationType="bars"
            />
          </View>
          
          <View style={{display: 'flex', flex: 4, backgroundColor: '#F1F1F1'}}>
            <Text style={{ fontSize: 26, paddingLeft: 4, paddingTop: 13}}>Buenos Aires</Text>
            <Text style={styles.textx}>Nuestra sangre es inmigrante. Somos apasionados. Somos "familieros". Nos damos abrazos fuertes. Saludamos siempre con un beso. Nuestras mesas están llenas de amigos, tíos, primos, hijos y hermanos. Hacemos ‘sobremesa’. Discutimos acaloradamente. Nos emocionamos con envidiable facilidad. Estamos hechos de contrastes, la cultura popular y la cultura sofisticada, lo tradicional y lo moderno, las religiones de siempre y los ídolos modernos.</Text>

            <Text style={styles.textx}>Nuestra ciudad está llena de vida e intensidad, enriquecida con historias que se comparten y entrelazan. Acá, nos encontramos por la calle, nos sentamos por horas en las mesas de los cafés. Acá nosmiramos a los ojos. Acá, la noche es un nuevo día. La ciudad se enciende con sus cientos de teatros con sus miles de restaurantes y barras. La noche te despierta.
            </Text>
            <Text style={styles.textx}>Acá no hablamos español, hablamos porteño, algo que no vas aencontrar en ningún otro lado. Acá un partido de fútbol es un espectáculo que deberías ver al menos una vez en la vida. Acá los taxistas son poetas y filósofos.
            Acá vamos a mostrarte el tango y el dulce de leche y queremos descubrirte, queremos conocerte. Porque acá no recibimos turistas;hacemos amigos. Y podrás encontrarnos un poco ruidosos, pero por, sobre todo, auténticos.
            Acá, en Buenos Aires de algo podés estar seguro: te sentirás parte dela ciudad. Y cuando te vayas, te llevarás algo nuestro y dejarás tu huella.</Text>

            <Text style={styles.textx}>PORQUE NOSOTROS NO RECIBIMOS TURISTAS, HACEMOS AMIGOS.</Text>
          </View>*/}
{/**/}
  <Image source={require(imgPath+'bsas.jpg')} style={styles.footerImage} />

<Text style={styles.textotitulo}>Buenos Aires</Text>

<View style={styles.box}>

    <Text style={styles.textx}>Nuestra sangre es inmigrante. Somos apasionados. Somos "familieros". Nos damos abrazos fuertes. Saludamos siempre con un beso. Nuestras mesas están llenas de amigos, tíos, primos, hijos y hermanos. Hacemos ‘sobremesa’. Discutimos acaloradamente. Nos emocionamos con envidiable facilidad. Estamos hechos de contrastes, la cultura popular y la cultura sofisticada, lo tradicional y lo moderno, las religiones de siempre y los ídolos modernos.</Text>

    <Text style={styles.textx}>Nuestra ciudad está llena de vida e intensidad, enriquecida con historias que se comparten y entrelazan. Acá, nos encontramos por la calle, nos sentamos por horas en las mesas de los cafés. Acá nosmiramos a los ojos. Acá, la noche es un nuevo día. La ciudad se enciende con sus cientos de teatros con sus miles de restaurantes y barras. La noche te despierta.</Text>

    <Text style={styles.textx}>Acá no hablamos español, hablamos porteño, algo que no vas aencontrar en ningún otro lado. Acá un partido de fútbol es un espectáculo que deberías ver al menos una vez en la vida. Acá los taxistas son poetas y filósofos.</Text>

    <Text style={styles.textx}>Acá vamos a mostrarte el tango y el dulce de leche y queremos descubrirte, queremos conocerte. Porque acá no recibimos turistas;hacemos amigos. Y podrás encontrarnos un poco ruidosos, pero por, sobre todo, auténticos.</Text>

    <Text style={styles.textx}>Acá, en Buenos Aires de algo podés estar seguro: te sentirás parte dela ciudad. Y cuando te vayas, te llevarás algo nuestro y dejarás tu huella.</Text>

    <Text style={styles.textx}>PORQUE NOSOTROS NO RECIBIMOS TURISTAS, HACEMOS AMIGOS.</Text>
</View>

<View style={styles.box}>

    <Text style={styles.textotitulo}>Atracciones Gratuitas- Buenos Aires</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>Caminito</Text>

    <Image source={require(imgPath+'caminito.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>La calle más famosa del barrio de La Boca, bautizada Caminito, es un paseo peatonal donde se respira y baila tango, un compendio de callecitas, un museo con exposición a cielo abierto. Merece la pena pasear con tranquilidad entre las decenas de puestos de artesanías y cuadros que plasman el espíritu porteño. En la “Feria de Artistas Plásticos de Caminito” encontrarás artistas contemporáneos de destacada trayectoria, que exponen y venden sus obras inspiradas en el colorido de su entorno y el sentir tanguero. Funciona todos los días de 11 a 18 h (invierno) y de 11 a 20 h (verano). La apariencia de esta calle museo es distinta a la de otros barrios. Con sus adoquines y conventillos de chapa pintados de vivos colores y las obras de arte de artistas argentinos, es un lugar único en el mundo.</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>La Casa de Gobierno</Text>

    <Image source={require(imgPath+'rosada.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>En la Plaza de Mayo se puede adquirir una perspectiva histórica de la ciudad. En su lado oriental se puede admirar la inconfundible Casa de Gobierno, mejor conocida como Casa Rosada, sede del Gobierno Nacional. Detrás de la Casa de Gobierno y por debajo del nivel actual de las calles, se encuentra emplazado el Museo del Bicentenario, que ocupa el espacio exacto en el que estuvo el Fuerte de Buenos Aires a principios del siglo XVIII y la Aduana Taylor, y mantiene los muros de ladrillo de la construcción original de 1855. La propuesta incluye un recorrido por los 200 años de historia argentina, así como un área artística que exhibe hitos del patrimonio argentino y cuya pieza central es el mural “Ejercicio Plástico”, del artista mexicano David Alfaro Siqueiros.</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>El Cementerio de La Recoleta</Text>

    <Image source={require(imgPath+'cementerio_recoleta.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>¿Existe una razón para visitar el Cementerio de La Recoleta? Una no, ¡muchas! Para empezar es uno de los cementerios más importantes del mundo. De amplias calles flanqueadas de impresionantes estatuas y sarcófagos de mármol, el cementerio es una obra de arte, un museo al aire libre. Un dato curioso: lo que más llama la atención son los féretros expuestos en el interior de las bóvedas, que en la mayoría de los países no suelen verse, y las historias de fantasmas, tragedias y romances.</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>Paseo de la Historieta</Text>

    <Image source={require(imgPath+'paseohistorieta.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>En el barrio de San Telmo, en la esquina de las calles Defensa y Chile se encuentra la escultura de Mafalda. Allí comienza el Paseo de la Historieta, un circuito que termina en Puerto Madero y que rinde homenaje a los personajes más entrañables y famosos del comic argentino. El circuito termina en el Museo del Humor, donde se reúnen las obras de todos los referentes argentinos del humor gráfico argentino con muestras permanentes, transitorias y programas educativos.</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>La Reserva Ecológica</Text>

    <Image source={require(imgPath+'ecologico.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>Es el mayor espacio verde de la ciudad: 350 hectáreas de naturaleza viva, con lagunas, bosques y más de 200 tipos de animales. Ideal para visitar los fines de semana, disfrutar de paseos en bicicleta y del aire puro.</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>La Usina del Arte</Text>

    <Image source={require(imgPath+'usina.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>Quienes gusten de apreciar el arte en varias disciplinas no pueden dejar de visitar la Usina del Arte, un centro cultural multidisciplinario y sala de espectáculos en el Barrio de La Boca. En la misma, se puede ver la obra “Edificio” de Leandro Erlich creada en el 2004 para la Nuit Blanche de París: una fachada de un clásico edificio porteño, reflejado en un espejo gigante, invita a jugar con una increíble ilusión visual.</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>El Ateneo Grand Splendid</Text>

    <Image source={require(imgPath+'ateneo.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>Cita imperdible para los amantes de los libros, el Ateneo Grand Splendid fue elegida por el diario británico The Guardian (2008) como la segunda librería más importante del mundo. Se ha convertido en un lugar de paso obligado tanto para los porteños como para los turistas que pueden disfrutar de un espacio cultural que invita a quedarse un largo tiempo para literalmente perderse entre libros, cómodos sillones y buena música.</Text>

    <Text style={styles.textx}>Que ubicado en la calle Av. Santa Fe 1860.</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>Tranvía Histórico</Text>

    <Image source={require(imgPath+'tranvia.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>Todos los sábados, domingos y feriados la asociación “Amigos del Tranvía” organiza paseos gratuitos por el barrio de Caballito a bordo de tranvías restaurados. Parten desde una única parada ubicada en Emilio Mitre y José Bonifacio, cada 20 minutos, y recorren un circuito de veinte cuadras. Durante el viaje, un guía realiza una reseña acerca de datos históricos y técnicos del sistema. Se trata de un paseo ideal para hacer en familia. ¡Consultá los días y horarios!</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>Feria de Mataderos</Text>

    <Image source={require(imgPath+'feriamataderos.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>Este curioso mercado a cielo abierto, situado en el barrio de Mataderos, ofrece demostraciones de equitación, danzas folclóricas y artículos de calidad a precios muy económicos. Declarada de interés nacional por la Subsecretaría de Cultura de la Nación, todo lo auténticamente nacional se encuentra allí. Se realiza los días domingo, de marzo a diciembre.</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>Teatro Colón</Text>

    <Image source={require(imgPath+'colon.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>El Teatro Colón es considerado como uno de los teatros líricos más importantes del mundo y que no se puede dejar de visitar. El Teatro Colón guarda secretos en cada rincón y vivir la experiencia de una Visita Guiada es conocer una porción de su historia de más de cien años al servicio de la cultura argentina y mundial. Al recorrer la Sala, el Foyer Principal, la Galería de Bustos y el Salón Dorado, los visitantes pueden absorber detalles asombrosos sobre la arquitectura, las escaleras, sus esculturas, techos o vitreaux.</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>Café Tortoni</Text>

    <Image source={require(imgPath+'tortoni.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>El Café Tortoni, bar notable ubicado en el barrio de Monserrat, es el más antiguo de la Ciudad(fue fundado en 1858) y constituye una verdadera atracción para quienes lo visitan. En sus mesas de mármol y sus paredes está presente una parte importante de la historia de Buenos Aires, ya que entre sus clientes más destacados se encontraban los escritores Jorge Luis Borges, Luigi Pirandello, Federico García Lorca y Julio Cortázar, así como los músicos Arthur Rubinstein y el mítico Carlos Gardel.</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>Palacio Barolo</Text>

    <Image source={require(imgPath+'barolo.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>El Palacio Barolo, ubicado en el barrio de Monserrat, fue construido por el arquitecto italiano Mario Palanti para el empresario Luigi Barolo. Inaugurado en 1923, fue en ese entonces el edificio más alto de Sudamérica, hasta que se construyó el Kavanagh en 1935. El Barolo fue el primer edificio de hormigón armado de casi 100 mts. de altura y está rematado por un faro giratorio de 300.000 bujías en el piso 22 que, en 1923, transmitió con sus luces el resultado de la pelea por el título mundial de boxeo entre Luis Angel Firpo y Jack Dempsey en Nueva York.</Text>

</View>

<View style={styles.box}>

    <Text style={styles.textosubtitulo}>Museo Nacional de Bellas Artes</Text>

    <Image source={require(imgPath+'bellasartes.jpg')} style={[styles.footerImage, {width: '100%'}]}/>

    <Text style={styles.textx}>El Museo Nacional de Bellas Artes es uno de los más importantes de Latinoamérica y el que tiene la mayor colección de arte argentino del país. Ubicado en el barrio de Recoleta, fue inaugurado en 1896, si bien su actual sede data del año 1933, en un edificio reformado en su momento por el arquitecto Alejandro Bustillo para recibir la colección permanente.</Text>

</View>

{/**/}
      </Div>
    );

  }
}


const styles = StyleSheet.create({
  textx: {
    marginTop: 10,
    marginBottom: 10,
    lineHeight : 20
  },
  textotitulo: {
    fontSize: 30,
    fontWeight: '500'
  },
  footerImage:{
    flex: 1,
    alignSelf: 'center',
    justifyContent:'center',
    paddingTop: 10,
    marginTop: 'auto',
    marginBottom:'auto'
  },
  box:{
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 8,
    padding: 10
  },
  textosubtitulo: {
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 5
  },
  boxDefault: {
    height: 55
  },
  imageBackground:{
    height: '100%',
    width: '100%'
  }
});