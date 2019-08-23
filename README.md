This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Estructura Directorios

|- `components`
|  |
|  |-- header
|  |   |
|  |   |-- index.js
|  |   |-- style.css
|  |   |-- img
|  |
|  |-- img
|  |
|  |-- menu
|  |   |
|  |   |-- index.js
|  |   |-- style.css
|  |   |
|  |   |-- img
|  |   |
|  |   |-- items
|  |   |   |
|  |   |   |-- index.js
|  |   |   |-- style.css  
|  |   |
|  |   
|  |-- main
|  |   |
|  |   |-- index.js
|  |   |-- style.css
|  |   |
|  |   |-- enviar
|  |   |   |-- index.js
|  |   |   |-- style.css
|  |   |
|  |   |-- mensajes
|  |   |   |
|  |   |   |-- index.js
|  |   |   |-- style.css
|
|
|- `redux`
|   |
|   |-- store.js
|   |
|   |-- action
|   |   |
|   |   |-- carga.mensajes.js
|   |   |-- registra.mensajes.js
|   |
|   |-- reducers
|   |   |
|   |   |-- index.js
|   |   |-- mensaje.reducer.js
|
|
|- `config`
|   |
|   |-- constantes.js
|
|- `data`
|   |
|   |-- items.js
|   |-- favoritos.js






### `Componentes`

En la carpeta componentes contiene todo lo relacionado con la vista,
se divio en las diferentes secciones que tiene la aplicación de manera
de desacoplar las vistas y tener un mejor manejo.
    
    Cada sección de la aplicacion tiene su carpeta con un nombre referente a lo que
    es el componente.
    Cada una de esta carpeta contine su archivo js y style, ademas de una carpeta de imganes
    que solo se utilizaran en ese componente.

### `redux`

Continen la configuración de redux que son los action, reducer y store.

    En la carpeta action se creo una carpeta que contine todas las acciones para manejar
    las operaciones de mensajes. Contiene los archivo js para las operaciones que se realizaron
    para este ejercio que son cargar los datos y registrar el mensaje.

    En la carpeta reducers contiene el reducer para la operaciones de mensaje.
    Se encuentra un archivo index.js en donde se combina todos los reducers.

    El archivo store.js se encuentra a raiz de la carpeta, para hacer referente que es el parte de la 
    configuración de redux.

### `config`

Contiene archivos de configuración que se pueden utilizar en todo la aplicación.
En este caso hay un archivo de constantes donde tienen el type de las actions.


### `data`
Contiene archivos de datos , para hacer las pruebas.



### `Page GitHub`
[https://quiquebd96.github.io/chat.react.redux/](https://quiquebd96.github.io/chat.react.redux/)


P.D.
Para el consumo de link 
[https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production/messages](https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production/messages)

De lado del servicio no se tiene activo el CORS, por lo tanto guarde la información de que entrega , 
para despues ponerlo en archivo js y mostrarla en la vista, que se encuentra en la carpeta data, se llama items.js.
Pero esta comentada la petición en el action de carga.mensajes.js , se uso axios para la consulta.
