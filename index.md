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
	Que alguien lo escriba

### Entrevista
	Qué entrevistas hemos hecho, por qué y un resumen de resultados

### Encuestas
	Explicar un poco los resultados obtenidos


# Modelado

	Explicar aquí la metodología usada

## Hipótesis de personas


## Esqueletos

{% include panel-show.html panel_show_folder="esqueletos" %}

## Personas

{% include panel-show.html panel_show_folder="personas" %}


# Definición de requisitos

{% include include_id page_id='problemas-visiones' %}

## Escenarios de contexto

## Descripción de requisitos


# Framework de diseño
