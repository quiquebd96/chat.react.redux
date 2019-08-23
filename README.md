This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Estructura Directorios

├── actions
│   ├── comment.actions.js
│   └── post.actions.js
├── components
│   ├── App.js
│   ├── Comment.js
│   ├── Comments.js
│   └── Post.js
├── 

|- `components` <br>
|  |<br>
|  |-- header<br>
|  |   |<br>
|  |   |-- index.js<br>
|  |   |-- style.css<br>
|  |   |-- img<br>
|  |<br>
|  |-- img<br>
|  |<br>
|  |-- menu<br>
|  |   |<br>
|  |   |-- index.js<br>
|  |   |-- style.css<br>
|  |   |<br>
|  |   |-- img<br>
|  |   |<br>
|  |   |-- items<br>
|  |   |   |<br>
|  |   |   |-- index.js<br>
|  |   |   |-- style.css  <br>
|  |   |<br>
|  |   <br>
|  |-- main<br>
|  |   |<br>
|  |   |-- index.js<br>
|  |   |-- style.css<br>
|  |   |<br>
|  |   |-- enviar<br>
|  |   |   |-- index.js<br>
|  |   |   |-- style.css<br>
|  |   |<br>
|  |   |-- mensajes<br>
|  |   |   |<br>
|  |   |   |-- index.js<br>
|  |   |   |-- style.css<br>
|<br>
|<br>
|- `redux`<br>
|   |<br>
|   |-- store.js<br>
|   |<br>
|   |-- action<br>
|   |   |<br>
|   |   |-- carga.mensajes.js<br>
|   |   |-- registra.mensajes.js<br>
|   |<br>
|   |-- reducers<br>
|   |   |<br>
|   |   |-- index.js<br>
|   |   |-- mensaje.reducer.js<br>
|<br>
|<br>
|- `config`<br>
|   |<br>
|   |-- constantes.js<br>
|<br>
|- `data`<br>
|   |<br>
|   |-- items.js<br>
|   |-- favoritos.js<br>






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
