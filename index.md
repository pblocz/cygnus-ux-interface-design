
---
layout: default
title: Blogging Like a Hacker
---

* Table of contents
{:toc}


[test url](.{{ site.pages | where:"id","site-test" | map: "url" }})

# Investigación

El proyecto no está realmente definido, sino que se pretende investigar cual sería la aplicación que mejor se adecúe a las necesidades actuales del ámbito universitario, centrándonos especialmente en el *sharing* de apuntes, prácticas, etc. entre todos los miembros de la comunidad educativa. Será importante también proporcionar herramientas que faciliten el *feedback* entre alumnos y profesores, e incluso con alumnos de años anteriores.

Como ejemplo, esta aplicación podría utilizarse para el programa de mentorías de la UCM (que presente ciertas carencias en este aspecto) o para que los alumnos colaboren en la elaboración de apuntes o materiales didácticos oficiales para las asignaturas.

Todo esto son algunas de las características que se prevé que van a ser demandadas por los usuarios finales, pero será durante el proceso de investigación cuando se decidirá las funcionalidades finales de la aplicación.

## Plan de Investigación

### Planificación temporal

En el siguiente diagrama de Gantt se muestra el plan de trabajo ideado para realizar el proyecto:

![diagrama de gantt]({{site.baseurl}}/assets/img/gantt.png)


Como se observa en amarillo, se dedicará la mayor parte del tiempo a la **investigación**, cuyo plan está adjunto.

Con la información obtenida en las entrevistas y cuestionarios se procederá a realizar el **diseño de personas** durante las navidades hasta final de año.

La **definición de requisitos** será principalmente llevada a cabo los diez primeros días de enero.  Se desarrollará el **framework de interacción** del 13 al 21 de enero.

Por último, la etapa de **refinamiento** dispondrá de todo el tiempo restante hasta la presentación.


### Plan de desarrollo

Queremos lograr 2 cosas con la investigación previa:

1. Definir concretamente la especificación de nuestra aplicación en función de las necesidades y requisitos de los usuarios (el ámbito ya está definido)

2. Usar los datos obtenidos para crear las interacciones y artefactos necesarios en las siguientes fases de diseño


#### Entrevistas y cuestionarios

Nuestra principal fuente de información *en profundidad* serán las entrevistas, mientras que para obtener información *en cantidad* usaremos cuestionarios a muchos usuarios.


##### Tipos de usuarios

Hemos dividido a los usuarios de manera previa en distintos grupos. Se han obviado algunos como los roles administrativos, que no son primarios en nuestra aplicación. Con esto hemos obtenido:

- Futuros alumnos
- Alumnos de primeros cursos
- Alumnos experimentados, haciendo especial hincapié en mentores
- Ex-Alumnos
- Profesores

Esperamos obtener datos de todos los tipos de usuario. Como son muchos tipos y por las restricciones de tiempo no podremos hacer suficientes entrevistas, haremos de 2 a 4 entrevistas y esperamos obtener datos del resto de usuarios con cuestionarios.

##### Datos a recoger (genéricos)

A la hora de pensar las entrevistas y generar los cuestionarios, vamos a intentar recabar la información relevante, haciendo énfasis en:

###### Datos demográficos

- edad
- sexo
- nivel académico
- posición académica (alumno o no, curso)


###### Conocimiento del dominio

- aplicaciones del ámbito que usa
- cómo usa esas aplicaciones
- actividades que realiza en ella
- qué hace más a menudo
- qué le gusta de lo que usa
- qué no le gusta de lo que usa


###### Expectativas del sistema.

- Generar contenido o sólo consumir
- Nivel de sociabilidad de la aplicación
- Niveles de visibilidad de las asignaturas / grupos


#### Análisis de la competencia

A la vez que la investigación en usuarios, se realizará un análisis de la competencia. Hay dos categorías: **herramientas de campus virtual** y de **sharing de documentos**. Estos dos ámbitos son muy separados, es decir, normalmente hay herramientas para el aula y fuera de esta para compartir trabajos y apuntes, pero no juntas.


##### Herramientas de campus virtual

Investigaremos las distintas herramientas de ámbito universitario que hay, que suelen ser muy direccionales (el profesor es el que genera contenido). Entre ellas:

- Moodle
- Sakai
- WebCT

##### Sharing de documentos

Este punto es muy genérico, así que lo centraremos en herramientas que se usen para compartir documentos de tipo apuntes, o en ámbito universitario. Por el momento son conocidas las herramientas de:

- Patatabrava
- Rincón del vago
- Google Drive
- Dropbox


## Resultados

### Análisis de la competencia
{% include include_id page_id='analisis-competencia' %}

### Entrevista

    Qué entrevistas hemos hecho, por qué y un resumen de resultados

### Encuestas

{% include include_id page_id='resumen-encuestas' %}


# Modelado

## Plan de Modelado

{% include include_id page_id='plan-modelado' %}

## Resultados

### Hipótesis de personas

	Añadir aquí las personas ad hoc

#### Profesores

{% for variable in site.data.cooper.profesores.variables %}
	{% assign personas = site.data.cooper.profesores.personas %}
	{% include cooper_var.html %}
{% endfor %}

#### Alumnos

{% for variable in site.data.cooper.alumnos.variables %}
	{% assign personas = site.data.cooper.alumnos.personas %}
	{% include cooper_var.html %}
{% endfor %}


### Esqueletos

{% include panel-show.html panel_show_folder="esqueletos" %}

### Personas

{% include panel-show.html panel_show_folder="personas" %}


# Definición de requisitos

## Plan de Requisitos

{% include include_id page_id='plan-requisitos' %}

## Resultados

{%comment%}
{% assign probvisis = site.pages | where:'type','probvisi' %}
{% for prob in probvisis %}
{% include probvisi.html %}
{%endfor%}
{%endcomment%}

{% include include_id page_id='problemas-visiones' %}

### Escenarios de contexto y requisitos

{% include panel-show.html panel_show_folder="escenarios" %}

# Framework de diseño

## Plan de Diseño

{% include include_id page_id='plan-diseno' %}

## Resultados

### Factor de forma, la postura y métodos de entrada

El factor de forma viene definido en los escenarios de contexto, en resumen se podría decir que se trata de una interacción por medio de un ordenador habitual y las notificaciones en el móvil.

En lo referido a la postura, se trata principalmente de postura soberana ya que tu interactúas directamente con la aplicación. Aunque posee características de postura temporal en el tema de notificaciones en el móvil o las notificaciones de escritorio.

Para terminar este punto, los métodos de entrada utilizados son los de cualquier PC, es decir, trackpad, ratón, teclado o pantalla táctil.

### Elementos de datos y funcionales

![diagrama de gantt]({{site.baseurl}}/assets/img/requisitos_datos.png)

### Bocetos

{% include panel-show.html panel_show_folder="bocetos" %}

### Escenarios key path

### Escenarios de validación


<!--

1. investigación

2. Modelado

3. Requisitos / Escenarios de contexto

4. Framework de diseño / prototipos iniciales

5. prototipo de alta fidelidad

6. evaluación


cada seccion

- organización del trabajo
- resultados/productos
- principales conclusiones

mostrar producto / fotos
- capturas de pantalla
- no hace falta contarlos en detalle
- recordad que luego los leeremos a fondo

-->

# Evaluaciones de expertos

## Plan
	TODO

## Resultados

{% include panel-show.html panel_show_folder="expertos" %}

Además les observamos y anotamos algunos de los comentarios que realizaban en voz alta:

+ Material subido lo ve el profe.

+ Casi no ha accedido al perfil.

+ El calendario lo ha mirado muy poco, hasta pasado un rato no se ha fijado.

+ Las notificaciones le han liado un poco.

+ El corazón no sabía muy bien para que era -> fav / otro?

+ Pestaña de extra no sabía para que era al principio.

+ La por en duda no sabía para que era.

+ Al añadir a favoritos no sabe donde está, poco visible en el perfil.


## Conclusiones
	TODO

# Evaluaciones de usuarios

## Plan 
Queremos proceder a realizar la evaluación porque hemos terminado dos fases de diseño y desarrollado un prototipo de alta fidelidad. Queremos dar paso al desarrollo de la aplicación, pero para ello queremos verificar que el prototipo real tiene un diseño que agrade a usuarios reales.

Por ello nos planteamos una serie de preguntas a las que queremos dar respuesta, que son:

- ¿Los usuarios saben encontrar los materiales y la información relacionada con una asignatura?
- ¿Los usuarios entienden el funcionamiento de los bookmarks (favoritos)?
- ¿Los usuarios encuentran sus calificaciones o resumen general de las mismas?
- ¿Los usuarios ven las notificaciones?
- ¿Los usuarios entienden el sistema de chat?
- ¿Los usuarios son capaces de compartir contenido y valorar otros contenidos?

Para esto hemos seleccionado a unos usuarios que se asemejan a Diego García, son tres chicas universitarias de enfermería y de CAFYD (antiguo inef). No se les va a realizar un cuestionario previo, porque las conocemos con anterioridad suficiente, en los tres casos han pedido en alguna ocasión ayuda con su campus a uno de nosotros y sabemos que se asemejan suficiente a Diego García (salvo el género).

Para proceder con la evaluación vamos a pedir una serie de tareas a nuestros usuarios:

0. Movimiento libre (poco tiempo), vuelve a inicio.
A. Consultar las calificaciones de todas las asignaturas.
B. Marcar como favorito, un apunte de Análisis Numérico.
C. Subir un archivo a Análisis Numérico.
D. Consultar que es PC en análisis Numérico y votar las respuestas.
E. Ver el calendario de entregas de este mes.
F. Escribir a un miembro del grupo4 de DSI.
G. Consultar detalles de una entrega.
H. Consultar tus datos guardados.

La tarea "0" la realizarán los tres usuarios, con ella queremos comprobar si las notificaciones sugieren suficiente como para abrirlas, o el mensaje pendiente. 

El resto de tareas se repartirá del siguiente modo:

Ana: A-B-C-F-G-H
Patricia: B-E-F-G-H
Clara: A-B-C-D-F-H

Es decir, todos harán B,F y H por ser las tareas que cubren los casos más demandados.

Las sesiones se realizarán en su zona de estudio habitual con un ordenador portátil, por lo que usarán trackpad salvo que posean ratón propio. Para recoger las evaluaciones grabaremos la aplicación, al usuario y le pediremos que detalle que va haciendo. Tendrá a su lado un moderador que cubrirá las carencias del prototipo. Los observadores no hablarán en ningún momento con los usuarios hasta una vez finalizada la prueba, se ha verificado que en las salas de estudio elegidas caben los observadores sin interferir.

Las carencias del prototipo que se prevé aparezcan, son:
1- Subir un archivo no surtirá efecto.
2- Votar, no cambiará el número de votos.
3- No se abrirá una ventana de chat rápida. 
4- No se producirá un cambio de vista de las listas.
5- Los eventos del calendario, no se corresponden con la realidad.
6- No existen archivos que descargar.

Además el moderador tomará nota de los eventos más importantes sin necesidad de apuntar el minuto exacto para evitar distracciones. Y animará al usuario a no dejar de hablar detallando que hace, piensa y siente.

Posteriormente el moderador, preguntará motivos de las acciones que le hayan llamado la atención. Esto se hará de manera distendida merendando. Cabe la posibilidad de hacer este último paso, con Clara y Ana al mismo tiempo, dado que se ha quedado en el mismo lugar por limitación de tiempo, pero la evaluación si será separada (primero una y luego la otra sin capacidad de influenciarse).

La observación y análisis de los resultados consistirá en evaluar las tareas completadas sin ayuda y las que se ha recibido alguna ayuda (no esperada por las carencias). Se anotarán iconos no comprendidos. Y los caminos no correctos (o numero de vueltas dadas) hasta que el usuario completa cada tareas.

### Documento para el usuario
Querida [NOMBRE]:

Lo primero agradecerte que quieras colaborar con nosotros en el
proceso de evaluación del prototipo de Cygnus. Este prototipo ha sido
desarrollado con todo nuestro cariño para facilitar el acceso a la
información relevante e interesante de las asignaturas de un
universitario. 

Para ponerte en situación, tu estas matriculada en tres asignaturas,
DSI, IS y ANUM (luego te digo que significa). Y vas a realizar las
siguientes tareas, por favor supón que es un día normal de
universidad. Y no hagas caso ni de los observadores, e intenta actuar
como si el moderador no estuviese. Sabes que el proceso se grabará la
pantalla y tus reacciones, así como el sonido para posteriormente
analizarlo. Agradecemos que nos cuentes constantemente como te
sientes, incluso si es nervios y que nos narres en la medida de lo
posible, porque realizas ciertas acciones. Por ejemplo, si tu tarea
consiste en ponerte un sándwich, irías a la cocina y dirías estoy
yendo a la cocina porque es allí donde tengo la comida, cogerías el
pan y dirías cojo primero el pan porque es donde va el contenido y en
ese sentido lo demás. De todos modos tranquila, todo lo que digas será
analizado solo por nosotros, nadie más verá estos vídeos y audios. Por
favor, no tengas miedo en criticar. 

Simplemente se tu misma, pero hablando sola en voz alta.

Tus tareas son:

[TAREAS SEGUN

Ana: A-B-C-F-G-H
Patricia: B-E-F-G-H
Clara: A-B-C-D-F-H
}

Muchas Gracias.
Cygnus

## Resultados

### Ana

El escenario concreto es su mesa de estudio lugar donde suele consultar su campus. Tiene 23 años y estudia CAFYD.

#### Tabla de Reacciones

| 00:00 | | Comienza Movimiento Libre |
| 00:10 | | Se queda leyendo el mensaje explicativo de guardado |
| 00:20 | | Entiende el icono de subir prácticas. |
| 00:40 | | No sabe como ver si esta corregida la práctica |
| 01:23 | | No entiende guardar dudas, ni como crear una. Piensa crearla desde buscar |
| 01:50 | | Consulta notas sin problemas pero le parece pobre la vista |
| 02:30 | | Compartir un archivo lo confunde con entregar un archivo al profesor |
| 02:48 | | Confunde El botón notificaciones y dudas, como objetivos para subir un archivo |
| 03:30 | | No entiende el concepto compartir apuntes. |
| 03:50 | | Encuentra e identifica la nube como icono para subir archivos. |
| 04:00 | 04:20 | Le sigue molestando compartir cosas con todos |
| 04:40 | 04:55 | Guarda correctamente un archivo pero no sabe si lo ha hecho porque busca una estrella o corazón |
| 05:35 | 06:30 | No entiende el concepto guardar de nuevo. |
| 06:35 | | Lo encuentra pero no sabe ni como lo ha hecho. |
| 07:10 | | Le molesta la distribucion de pestañas. |
| 07:30 | 07:40 | No sabe donde ver más detalles de una entrega. |
| 08:00 | | Abre el lugar que busca pero no es capaz de identificarlo. |
| 08:20 | 09:00 | Sigue sin saber donde está, de hecho no se siente en la página de su universidad. |
| 09:10 | | Falta un link en la vista general de la asignatura donde podría ver su objetivo. |
| 09:40 | | Busca el enunciado de una entrega, en problemas o apuntes. |
| 10:15 | | Cambiamos de tarea sin lograrlo. |
| 10:40 | | Pincha repetidas veces el icono de mensajes intentando que se le abrá una página, no se fija en el desplegable. |
| 11:08 | | Pincha la palbra contactos para intentar abrir la lista de contactos |
| 11:20 | | Pide perdón reconociendo que no había visto la barra de chat. |
| 12:00 | | Usa intro para enviar y no funciona, se mete otra linea. |
| 12:10 | | El icono de envío de mensaje esta tapado por la pestaña Contactos. |

### Clara

El escenario concreto es su mesa de estudio, aunque ella suele estudiar de pie, consulta el campus sentada, utiliza rat´on enchufado a su port´atil. Tiene 22 años y estudia enfermer´ia.

#### Tabla de Reacciones

| 00:00 |  | Comienza Movimiento libre |
| 00:10 | 00:16 | Lo primero a por los botones de ordenar las listas |
| 00:45 | | Vuelve a al inicio pinchando en asignatura |
| 01:13 | 01:33 | Confusión Favorito y guardar |
| 02:02 | 02:50 | No encuentra el botón de subir archivos en compartido |
| 02:50 | | Moderador interviene para aclarar el icono de la nube |
| 03:15 | 03:30 | Encuentra las dudas facilmente pero no se fija en los votos para ver la mejor respuesta |
| 04:15 | | Entra en version completa de chat antes que la miniatura. |
| 04:44 | | Encuentra perfectamente sus datos guardados en el desplegable del perfil |
| 05:05 | | Le llama la atención el icono de las notificaciones |

### Patricia

El escenario es tirados en el suelo, ella siempre estudia en bibliotecas o en el suelo, la postura distendida la ayuda a concentrarse. Acaba de cumplir 20 años y estudia enfermer´ia

#### Tabla de Reacciones

| 00:00 | | Comienza Movimiento Libre |
| | | Lo primero que hace es ver ue ha guardado y que ha entregado usa constantemente el desplegable del perfil en vez de las pestañas. |
| 00:50 | | Mira notificaciones y los nuevos mensajes y lo comprende sin problemas |
| 01:20 | | Duda de si el bookmark es el icono de guardar pero lo entiende perfectamente. |
| 01:40 | | Busca el calendario de entregas, se conforma con una lista de entregas, seguido ve la otra vista y parece agradarle. |
| 02:17 | | Quiere hablar con alguien de DSI y abre la asignatura |
| 02:57 | | Prueba a buscarlo |
| 03:03 | | Abre el desplegable y busca el grupo en la pestaña grupos |
| 03:40 | | Encuentra los detalles de la entrega, el enunciado y las dudas sin problemas. |
| 04:10 | | usa el acceso directo a las dudas y las encuentra sin problema. |
| 04:25 | | No reconoce que la duda esta abierta. |
| 04:50 | | Recuerda perfectamente que tiene una pestaña de cosas guardadas en su perfil. |

### Usuario Extra: Estrella

Por los asombrosos resultados de la evaluaci´on de Patricia, decidimos realizar la evaluaci´on con esta usuaria que casualmente naci´o el mismo d´ia y estudia en la misma universidad. Estrella tiene 20 años y estudia Psicolog´ia. El escenario es en la cama donde suele estudiar y tocar la guitarra.

#### Tabla de Reacciones

| 00:00 | | Comienza el Movimiento Libre |
| | | Se mete lo primero en una asignatura |
| 00:36 | | Quiere ver los detalles de las prácticas desde general de la asignatura. (el link no funciona) |
| 01:10 | | No sabe si sabría volver al inicio, pero lo hace sin problemas. |
| 01:35 | | No sabe como guardarse el documento |
| 01:40 | | Prueba el botón derecho para guardarselo. |
| 01:50 | | Reconoce el bookmark y se lo guarda |
| 02:20 | | Busca los detalles de las entregas en entregas, todo sin problemas. |
| 02:40 | | Intenta ir al calendario y el boton no reacciona correctamente, pincha una segunda vez y si |
| 03:10 | | Pincha en el sobre buscando escribir un mensaje y que se abriese una ventana pero no lo hace. |
| 03:40 | | Busca el grupo en la ventana grande de chat |
| 04:00 | | Intenta enviar un mensaje con el intro y no funciona. |
| 04:15 | | ve el chat desplegable |
| 04:50 | | Encuentra el grupo 4 de DSI |
| 05:17 | 05:40 | Internet se cae |
| 05:45 | | encuentra la entrega perfectamente |
| 06:20 | | Sabe perfectamente donde descargarse el enunciado y donde preguntar una duda |
| 06:50 | | Intenta añadir una duda con la búsqueda |
| 07:14 | | Recuerda perfectamente que guardo unos apuntes en el perfil y encuentra guardado sin ningún problema |
| 07:50 | | Busca una duda en su perfil sin haberla guardado. |
| 08:10 | | Guarda su duda sin ningun problema |

## Conclusiones

### Posibles pasos siguientes

El proceso de evaluación con usuarios, consideramos ha sido todo un éxito. Comenzamos evaluando a Ana y Clara dos chicas que llevan tiempo en la universidad y que se podría decir que tienen experiencia con campus virtuales. Las herramientas más novedosas en la interfaz les resultó complicado de entender, una vez se explicó el concepto supieron utilizarlo sin problemas. Mientras que la evaluación posterior a Patricia, que esta en segundo de grado, resultó poder realizar todas las acciones a la primera. Dada esta discordancia de resultados, decidimos probar con otro usuario de la misma edad (como hemos explicado anteriormente) que Patricia (nacida el mismo día), Estrella, que está en segundo de Psicología y los resultados como puede observarse son similares. Por eso, consideramos los cambios que describiremos más adelante, para poder soportar nuevos alumnos y alumnos veteranos. Estos dos tipos de alumnos no han podido ser identificados en la fase de investigación, aunque los teníamos como hipótesis de personas, por los motivos que se explican en ese apartado. Por ello las soluciones que se plantean están más orientadas a solucionar los problemas de los veteranos con ayudas visuales.

+ Para el problema de identificación de iconos, probablemente se cambiaría el icono de subir al "cloud" con uno similar al de descarga, y el resto se mantendrían aunque se pudiesen perfilar los diseños, con líneas más finas. El icono de bookmark se mantendría pero dejando claro que no es un favorito, sino guardar en tu perfil, en ningún lado se haría referencia a la palabra favorito.

+ Para el problema de añadir archivos, dudas y subir contenidos. La solución iría por agrandar el icono y darle color, habría que probar el resultado de estas medida. Otra solución podría ser quitar el icono y poner directamente la palabra.

+ Para el problema de utilizar la barra de búsqueda para todo menos buscar, podríamos plantear nuevos diseños de barra, como redondear los bordes o moverlo al lado derecho, hacer que no ocupe una posición tan principal para una función no primaria.

+ Para el problema de utilizar grupos en el chat, se buscará unificar la vista completa y la vista miniatura del chat, permitiendo en ambos lados la navegación por pestañas o combinar todas las pestañas, esta decisión habría que evaluarla, pero si que se unificarían por consistencia.

+ Para el problema de la no utilización del chat en miniatura, moveríamos el icono de maximizar o cambiar los colores de modo que no sea ese el botón que primero se pincha, sin desplegar el chat en pequeño.

+ Para el problema de consultar todas las notas de golpe con scroll, seguramente se pueda solucionar fácilmente, poniendo dos columnas como en el resto de páginas o iniciando la vista con el acordeón agrupado en vez de expandido, dado que nadie ha usado esa opción. Esta decisión debería pasar por un proceso de diseño.

+ Para el problema de identificación del perfil, podría valer con colocar "Mi perfil" en algún punto. Además habría que añadir las opciones de configurar y cerrar sesión dentro del desplegable y seguramente en la vista del perfil. 

+ Por último, para el problema de la no identificación de los detalles de una práctica, se puede poner la palabra "descripción" o buscar una forma de indicar eso, cambiando los colores o posición o forma del botón enunciado. Además habría que añadir algo que indicase el estado de la entrega sin necesidad de abrirla, dado que el botón gris si esta entregada no se aprecia frente al negro.

Así no nos hemos planteado solucionar el concepto de guardado, ni de compartir, dado que los usuarios que comiencen a usar esta herramienta sin haber utilizado otras o empezando a utilizarlas por primera vez, podrán empezar asociando al campus virtual el concepto de compartir, colaborar y ser activo en el mismo, olvidándose de la posición pasiva que se tiene ahora mismo por las limitaciones del sistema.



