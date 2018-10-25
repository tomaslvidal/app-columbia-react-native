import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {Icon} from 'react-native-elements'

import SwipeableParallaxCarousel, {ScrollView, SwipeableCarousel} from 'react-native-swipeable-parallax-carousel';

import BackLeft from '../components/BackLeft.js'

import Footer from '../components/Footer.js'

import Div from '../layouts/default';

export default class DestinationDetail extends Component{
  constructor(props){
    super(props);

    this.state = { 
      item: this.props.navigation.state.params.item
    };
  }

  render() {
    const img_path = '../img/', url = "http://columbiaapp.eviajes.online/destinations/download/";

    return (
      <Div name="Formulario de Reclamos" icon="wpforms">
        <View>
          <View style={{marginLeft: -20, marginRight: -20}}>
            <Image source={{uri: url+this.state.item.image1}} style={[styles.footerImage, {height: 200, width: '100%', marginTop: -27}]} />
          </View>

          <View style={styles.box}>
            <Text style={styles.textTitle}>{this.state.item.title}</Text>

            <Text style={styles.text}>{this.state.item.description}</Text>
          </View>
        </View>

{/*        <View>
          <View style={styles.box}>
            <Text style={styles.textTitle}>Atracciones Gratuitas - Buenos Aires</Text>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>Caminito</Text>

              <Image source={require(img_path+'caminito.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>La calle más famosa del barrio de La Boca, bautizada Caminito, es un paseo peatonal donde se respira y baila tango, un compendio de callecitas, un museo con exposición a cielo abierto. Merece la pena pasear con tranquilidad entre las decenas de puestos de artesanías y cuadros que plasman el espíritu porteño. En la “Feria de Artistas Plásticos de Caminito” encontrarás artistas contemporáneos de destacada trayectoria, que exponen y venden sus obras inspiradas en el colorido de su entorno y el sentir tanguero. Funciona todos los días de 11 a 18 h (invierno) y de 11 a 20 h (verano). La apariencia de esta calle museo es distinta a la de otros barrios. Con sus adoquines y conventillos de chapa pintados de vivos colores y las obras de arte de artistas argentinos, es un lugar único en el mundo.</Text>
            </View>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>La Casa de Gobierno</Text>

              <Image source={require(img_path+'rosada.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>En la Plaza de Mayo se puede adquirir una perspectiva histórica de la ciudad. En su lado oriental se puede admirar la inconfundible Casa de Gobierno, mejor conocida como Casa Rosada, sede del Gobierno Nacional. Detrás de la Casa de Gobierno y por debajo del nivel actual de las calles, se encuentra emplazado el Museo del Bicentenario, que ocupa el espacio exacto en el que estuvo el Fuerte de Buenos Aires a principios del siglo XVIII y la Aduana Taylor, y mantiene los muros de ladrillo de la construcción original de 1855. La propuesta incluye un recorrido por los 200 años de historia argentina, así como un área artística que exhibe hitos del patrimonio argentino y cuya pieza central es el mural “Ejercicio Plástico”, del artista mexicano David Alfaro Siqueiros.</Text>
            </View>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>El Cementerio de La Recoleta</Text>

              <Image source={require(img_path+'cementerio_recoleta.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>¿Existe una razón para visitar el Cementerio de La Recoleta? Una no, ¡muchas! Para empezar es uno de los cementerios más importantes del mundo. De amplias calles flanqueadas de impresionantes estatuas y sarcófagos de mármol, el cementerio es una obra de arte, un museo al aire libre. Un dato curioso: lo que más llama la atención son los féretros expuestos en el interior de las bóvedas, que en la mayoría de los países no suelen verse, y las historias de fantasmas, tragedias y romances.</Text>
            </View>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>Paseo de la Historieta</Text>

              <Image source={require(img_path+'paseohistorieta.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>En el barrio de San Telmo, en la esquina de las calles Defensa y Chile se encuentra la escultura de Mafalda. Allí comienza el Paseo de la Historieta, un circuito que termina en Puerto Madero y que rinde homenaje a los personajes más entrañables y famosos del comic argentino. El circuito termina en el Museo del Humor, donde se reúnen las obras de todos los referentes argentinos del humor gráfico argentino con muestras permanentes, transitorias y programas educativos.</Text>
            </View>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>La Reserva Ecológica</Text>

              <Image source={require(img_path+'ecologico.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>Es el mayor espacio verde de la ciudad: 350 hectáreas de naturaleza viva, con lagunas, bosques y más de 200 tipos de animales. Ideal para visitar los fines de semana, disfrutar de paseos en bicicleta y del aire puro.</Text>
            </View>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>La Usina del Arte</Text>

              <Image source={require(img_path+'usina.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>Quienes gusten de apreciar el arte en varias disciplinas no pueden dejar de visitar la Usina del Arte, un centro cultural multidisciplinario y sala de espectáculos en el Barrio de La Boca. En la misma, se puede ver la obra “Edificio” de Leandro Erlich creada en el 2004 para la Nuit Blanche de París: una fachada de un clásico edificio porteño, reflejado en un espejo gigante, invita a jugar con una increíble ilusión visual.</Text>
            </View>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>El Ateneo Grand Splendid</Text>

              <Image source={require(img_path+'ateneo.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>Cita imperdible para los amantes de los libros, el Ateneo Grand Splendid fue elegida por el diario británico The Guardian (2008) como la segunda librería más importante del mundo. Se ha convertido en un lugar de paso obligado tanto para los porteños como para los turistas que pueden disfrutar de un espacio cultural que invita a quedarse un largo tiempo para literalmente perderse entre libros, cómodos sillones y buena música.</Text>

              <Text style={styles.text}>Que ubicado en la calle Av. Santa Fe 1860.</Text>
            </View>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>Tranvía Histórico</Text>

              <Image source={require(img_path+'tranvia.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>Todos los sábados, domingos y feriados la asociación “Amigos del Tranvía” organiza paseos gratuitos por el barrio de Caballito a bordo de tranvías restaurados. Parten desde una única parada ubicada en Emilio Mitre y José Bonifacio, cada 20 minutos, y recorren un circuito de veinte cuadras. Durante el viaje, un guía realiza una reseña acerca de datos históricos y técnicos del sistema. Se trata de un paseo ideal para hacer en familia. ¡Consultá los días y horarios!</Text>
            </View>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>Feria de Mataderos</Text>

              <Image source={require(img_path+'feriamataderos.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>Este curioso mercado a cielo abierto, situado en el barrio de Mataderos, ofrece demostraciones de equitación, danzas folclóricas y artículos de calidad a precios muy económicos. Declarada de interés nacional por la Subsecretaría de Cultura de la Nación, todo lo auténticamente nacional se encuentra allí. Se realiza los días domingo, de marzo a diciembre.</Text>
            </View>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>Teatro Colón</Text>

              <Image source={require(img_path+'colon.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>El Teatro Colón es considerado como uno de los teatros líricos más importantes del mundo y que no se puede dejar de visitar. El Teatro Colón guarda secretos en cada rincón y vivir la experiencia de una Visita Guiada es conocer una porción de su historia de más de cien años al servicio de la cultura argentina y mundial. Al recorrer la Sala, el Foyer Principal, la Galería de Bustos y el Salón Dorado, los visitantes pueden absorber detalles asombrosos sobre la arquitectura, las escaleras, sus esculturas, techos o vitreaux.</Text>
            </View>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>Café Tortoni</Text>

              <Image source={require(img_path+'tortoni.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>El Café Tortoni, bar notable ubicado en el barrio de Monserrat, es el más antiguo de la Ciudad(fue fundado en 1858) y constituye una verdadera atracción para quienes lo visitan. En sus mesas de mármol y sus paredes está presente una parte importante de la historia de Buenos Aires, ya que entre sus clientes más destacados se encontraban los escritores Jorge Luis Borges, Luigi Pirandello, Federico García Lorca y Julio Cortázar, así como los músicos Arthur Rubinstein y el mítico Carlos Gardel.</Text>
            </View>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>Palacio Barolo</Text>

              <Image source={require(img_path+'barolo.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>El Palacio Barolo, ubicado en el barrio de Monserrat, fue construido por el arquitecto italiano Mario Palanti para el empresario Luigi Barolo. Inaugurado en 1923, fue en ese entonces el edificio más alto de Sudamérica, hasta que se construyó el Kavanagh en 1935. El Barolo fue el primer edificio de hormigón armado de casi 100 mts. de altura y está rematado por un faro giratorio de 300.000 bujías en el piso 22 que, en 1923, transmitió con sus luces el resultado de la pelea por el título mundial de boxeo entre Luis Angel Firpo y Jack Dempsey en Nueva York.</Text>
            </View>

            <View style={[styles.box, styles.item]}>
              <Text style={styles.textosubtitulo}>Museo Nacional de Bellas Artes</Text>

              <Image source={require(img_path+'bellasartes.jpg')} style={[styles.footerImage, styles.footerImageChildren]}/>

              <Text style={styles.text}>El Museo Nacional de Bellas Artes es uno de los más importantes de Latinoamérica y el que tiene la mayor colección de arte argentino del país. Ubicado en el barrio de Recoleta, fue inaugurado en 1896, si bien su actual sede data del año 1933, en un edificio reformado en su momento por el arquitecto Alejandro Bustillo para recibir la colección permanente.</Text>
            </View>
          </View>
        </View>*/}
      </Div>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    marginBottom: 10,
    lineHeight : 20
  },
  item:{
    borderTopWidth: 1,
    marginTop: 0,
    marginBottom: 0,
    borderColor: '#d6d7da',
    paddingTop: 16,
    paddingBottom: 16
  },
  textTitle: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 0
  },
  footerImage: {
    flex: 1,
    alignSelf: 'center',
    justifyContent:'center',
    paddingTop: 10,
    marginTop: 'auto',
    marginBottom:'auto'
  },
  footerImageChildren: {
    width: '100%'
  },
  box: {
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
  imageBackground: {
    height: '100%',
    width: '100%'
  }
});