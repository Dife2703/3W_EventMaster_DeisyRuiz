EventMaster

Es una herramienta para gestionar eventos de manera eficiente y dinámica. 
Este proyecto utiliza Angular junto con Firebase para ofrecer una experiencia de usuario interactiva y basada en la nube. 
A continuación, se detallan los pasos necesarios para ejecutar el proyecto en el entorno local y desplegarlo en Firebase Hosting.

Instalación

1. Clona este repositorio en tu máquina local:

   git clone https://github.com/tu-usuario/eventmaster.git
   

2. Accede al directorio del proyecto:

   cd eventmaster
   

3. Instala las dependencias necesarias con npm:

   npm install
   

4. Instala SweetAlert2 para mostrar alertas personalizadas:

   npm install sweetalert2
   

5. Instala Firebase para la gestión de la base de datos y el hosting:

   npm install firebase
   

6. Instala la herramienta de Firebase CLI de forma global:

   npm install -g firebase-tools
  

7. Opcional: si estás utilizando Firebase Firestore como base de datos, puedes añadir AngularFire para Angular:

   ng add @angular/fire
   

Configuración de Firebase

1. Para desplegar la aplicación en Firebase Hosting, primero debes inicializar el proyecto Firebase en la carpeta del proyecto:
   firebase init
   

2. Selecciona las opciones de Hosting y Firestore cuando se te solicite.

3. Selecciona el proyecto existente al que deseas conectar la aplicación.

4. Cuando se te pida si quieres configurar como un solo sitio, selecciona "yes".

5. Cambia la ruta del directorio público a "dist/my-app".

6. Selecciona "yes" cuando se te pregunte sobre configurar el proyecto como una aplicación de una sola página (Single Page Application).

7. Selecciona "no" cuando se te pregunte sobre sobrescribir el archivo "index.html".

8. Selecciona "no" cuando se te pregunte sobre configurar automáticamente la configuración de Firestore para el proyecto.


Despliegue en Firebase Hosting


Una vez que hayas configurado Firebase, puedes desplegar la aplicación en Firebase Hosting con el siguiente comando:

firebase deploy


¡Listo! La aplicación de EventMaster debería estar ahora desplegada en Firebase Hosting y lista para ser utilizada.

