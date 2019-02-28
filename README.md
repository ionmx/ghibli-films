# ghibli-films

## Prueba #1 para Resuelve

Este prototipo es una [prueba para Resuelve](https://github.com/resuelve/prueba_frontend), el problema planteado es el siguiente:

> Crea una aplicación que liste y permite buscar peliculas de estudio Ghubli, el buscador debe soportar autocompletado

## Solución

Para la creación de este prototipo decidí usar [React](https://reactjs.org/), puesto que es una constante en el stack de las aplicaciones que se desarrollan en [Resuelve](https://github.com/resuelve/). 

Es la primera vez que hago algo con React y me pareció divertido, le invertí unas 6 horas al desarrollo de este prototipo, entre aprender React y el desarrollo del mismo.

Este prototipo solo usa React y el backend es el [API](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API) proporcionado para el catálogo de películas de Ghibli, añadí otra [API de MovieDB](https://developers.themoviedb.org/3) para obtener las imagenes de las películas. 

El UI/UX está hecho sin usar ningún framework de estilos, puesto que el prototipo era muy sencillo y con las caracteristicas de CSS actuales eran más que suficientes.

## Detalles y posibles modificaciones de la implementación

Decidí cargar el catálogo completo al iniciar la aplicación por cuestiones de simplicidad y que es un catálogo pequeño (20 elementos), si fuera un catálogo más extenso lo que haría es cargar solo el listado de lo que se busca y solo consultar al API de MovieDB una vez que se selecciona la película.

Algo que me gustaría agregar a este prototipo:
* Mostrar puntuación de Rotten Tomatoes con su respectiva imagen (e.g. Certified Fresh).
* El API de Ghibli nos regresa cosas interesantes como personajes, especies, ubicaciones, entre otros; los cuales se podrían mostrar en el prototipo para tener un sitio más completo del universo Ghibli.

## Experiencia en el desarrollo del prototipo

Tengo +18 años de experiencia en desarrollo de aplicaciones web, desde los tiempos de cgi en Perl, y me mantengo al día de manera autodidacta. El realizar este prototipo con React me permitió conocer la librería y me pareció muy buena, entendible y con una curva de aprendizaje muy sencilla en comparación a otras tecnologías como Ember o Angular. 

No puedo mencionar una parte del código de la cual me sienta orgulloso, seguramente por ser novato en desarrollo con React he de tener muchas cosas curiosas. Lo que me gustó de desarrollar este prototipo fue el aprender una tecnología que no la había usado y que en un tiempo corto se pudo hacer algo _dogfoodable_. 


## Demo

El deploy del demo se realizó en [Now](https://zeit.co/now), el cual tampoco había usado y me pareció muy sencillo. 

https://ghibli-ion.now.sh/
