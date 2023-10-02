
----------------------- Inicializar el proyecto ------------------

# 1. Inicializar el proyecto
    1. Abre la terminal
    2. Dirigete al directorio raiz del proyecto usando cd
        cd "/ruta/del/proyecto"
    3. Ejecuta el siguiente comando para instalar todas las dependencias 
        "npm install"
    
# 2. Iniciar la aplicacion
    1. Abre la terminal
    2. Ejecuta el siguiente comando "npm start"
    3. El comando anterior correrá la aplicación en modo desarrollo
    4. Para visualizar tu aplicación abre: [http://localhost:3000]

# 3. Iniciar sesión
    1. En la interfaz que se muestra en el navegador ingresa las siguientes credenciales:
    username: user@taskify.com
    password: 1234
    Después de ingresar estos datos haz click en el botón "Login"
    Esta acción te redireccionará hacía un perfil de ejemplo con tareas previamente cargadas
    en ese perfil podras, añadir nuevas tareas, editar y/o eliminarlas.

    2. Si deseas crear un nuevo usuario haz click en el botón "Create one".
    En la interfaz que aparecerá deberás llenar los campos de "name", "lastname", "email", "password",
    así como seleccionar un avatar. 
    Una vez hayas llenado los campos haz click en "Create new user". Esta acción te redireccionará al punto anterio

# 3. Navegar dentro de la aplicación
    Al ingresar a la aplicación podrás visualizar un acomodo con los siguientes elementos: 
    1. Header: En esta sección en el lado izquierdo se visualizan el logo y nombre de la aplicación,
    mientras que en el lado derecho se encuentra el nombre del perfil que ha iniciado sesión. 
    Si pasas el cursor por encima de el nombre de usuario se desplegará el menú de la aplicación,
    en donde prodrás hacer logout

    2. Content: Esta sección esta dividida en tres. En una primera instaciá hay un componente Select, mediamte el cual
    se podrán filtrar las tareas. 
    Seguido a esto se encuentran todas las tareas listas. El usuario debe de ser capaz de interactuar con estas de tres maneras:
    a. Haciendo click sobre el circulo marcar como finalizada
    b. Hacer click sobre el nombre de la tarea para desplegar la información extra
    c. Hacer click en el icono de estrella para marcar como favorito
    Finalmente se encuentra un recuadro en donde el usuario puede añadir nuevas tareas. Para hacer uso de este componente se hace click
    sobre el y se comienza a escribir. Para guardar la tarea se puede hacer de dos formas:
    a. Oprmir el botón "Enter" en el teclado
    b. Hacer click en el botón con el icono "+"

    3. Sider: En esta sección el usuario será capaz de visualizar una tarea de forma individual, editar nombre, nota y/o eliminar.
    Para acceder a esta sección se hace click sobre la tarea que se desea editar.
    Para editar el nombre haz click sobre el nombre que aparece para activar el componente de entrada de texto. Escribe el nuevo nombre y oprime 
    el botón save.
    Para editar o agregar una nota haz click sobre el recuadro que aparece para activar el componente de entrada de texto. Escribe la nota y oprime 
    el botón save.
    En la parte inferior del Sider verás la fecha de creación y un botón para eliminar la nota si así se desea.
    Para cerrar el Sider haz click en el botón en con una X en la esquina superior derecha


-----------------------  Dependencias del proyecto -----------------


## `react router dom` Instalar router de la aplicacion
    1. Abre la terminal 
    2. Ejecuta el siguiente comando "npm install react-router-dom@6"

## `ant design` Instalar librería de componentes de UI
    1. Abre la terminal
    2. Ejecuta el siguiente comando "npm install antd"
    3. Puedes acceder a la documentacion y catalogo de componentes en [https://ant.design/]

## `axios` Instalar librería de solicitudes HTTP 
    1. Abre la terminal
    2. Ejecuta el siguiente comando "npm install axios"

## `React icons` Instalar librería de iconos para react
    1. Abre la terminal
    2. Ejecuta el siguiente comando "npm install react-icons --save"
    3. Puedes acceder a la documentación y catálogo de iconos en [https://react-icons.github.io/react-icons]
