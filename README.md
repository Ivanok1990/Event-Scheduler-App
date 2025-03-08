Aquí tienes un **README** completo para tu aplicación de programación de eventos. Este archivo proporciona una descripción general del proyecto, cómo configurarlo, cómo usarlo y otras informaciones relevantes.

---

# Event Scheduler App

Una aplicación móvil para programar y gestionar eventos. Desarrollada con **Expo**, **React Native**, **React Navigation** y **SQLite**.

---

## Características principales

- **Crear eventos**: Permite a los usuarios crear eventos con un título, descripción, fecha, nombre del organizador, correo electrónico y número de teléfono.
- **Listar eventos**: Muestra una lista de todos los eventos guardados.
- **Detalles del evento**: Permite ver todos los detalles de un evento específico.
- **Validación de formularios**: Valida los campos del formulario antes de guardar un evento.
- **Persistencia de datos**: Usa **SQLite** para almacenar los eventos localmente en el dispositivo.

---

## Tecnologías utilizadas

- **Expo**: Plataforma para desarrollar aplicaciones móviles con React Native.
- **React Native**: Framework para construir aplicaciones móviles multiplataforma.
- **React Navigation**: Biblioteca para manejar la navegación en la aplicación.
- **React Hook Form**: Biblioteca para manejar formularios de manera eficiente.
- **Expo SQLite**: Módulo para interactuar con una base de datos SQLite en Expo.
- **DateTimePicker**: Componente para seleccionar fechas y horas.

---

## Instalación

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local.

### Requisitos previos

- **Node.js**: Asegúrate de tener Node.js instalado. Puedes descargarlo desde [aquí](https://nodejs.org/).
- **Expo CLI**: Instala Expo CLI globalmente en tu sistema.

  ```bash
  npm install -g expo-cli
  ```

### Pasos para configurar el proyecto

1. Clona el repositorio:

   ```bash
   git clone [https://github.com/Ivanok1990/Event-Scheduler-App.git]

   cd event-scheduler-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npx expo start
   ```

4. Escanea el código QR con la aplicación **Expo Go** en tu dispositivo móvil o ejecuta la aplicación en un emulador.

---

## Estructura del proyecto

```
event-scheduler-app/
├── assets/                  # Archivos de recursos (imágenes, íconos, etc.)
├── pages/                   # Pantallas de la aplicación
│   ├── FormScreen.js        # Pantalla para crear eventos
│   ├── RecordsScreen.js     # Pantalla para listar eventos
│   └── EventDetailsScreen.js # Pantalla para ver detalles de un evento
├── App.js                   # Punto de entrada de la aplicación
├── app.json                 # Configuración de Expo
├── package.json             # Dependencias y scripts del proyecto
```

---

## Uso

### Crear un evento

1. Abre la aplicación y ve a la pestaña **Crear Evento**.
2. Completa el formulario con los detalles del evento:
   - Título del evento.
   - Descripción del evento.
   - Fecha del evento.
   - Nombre del organizador.
   - Correo electrónico del organizador.
   - Número de teléfono del organizador.
3. Haz clic en **Crear Evento** para guardar el evento.

### Ver eventos

1. Ve a la pestaña **Registros**.
2. Verás una lista de todos los eventos guardados.
3. Haz clic en un evento para ver sus detalles.

### Ver detalles de un evento

1. En la pantalla de **Registros**, selecciona un evento.
2. Se abrirá la pantalla de **Detalles del Evento**, donde podrás ver toda la información del evento.

---

## Capturas de pantalla

| Crear Evento | Lista de Eventos | Detalles del Evento |
|--------------|------------------|---------------------|
| ![Crear Evento](https://private-user-images.githubusercontent.com/79412536/420555466-323f0cbf-3955-44e2-b9e1-0fcc652699ba.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE0MDQwNzYsIm5iZiI6MTc0MTQwMzc3NiwicGF0aCI6Ii83OTQxMjUzNi80MjA1NTU0NjYtMzIzZjBjYmYtMzk1NS00NGUyLWI5ZTEtMGZjYzY1MjY5OWJhLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA4VDAzMTYxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ5YTEwNTNkZmEzZTZjM2FmY2FkZTlkMmE2NmNmZTYyOGExN2FlNGE0NGYxN2Y4OTc4OGVhNzUzNWU4MWQyZWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.hHLpDd4z2J9f88ELCnIXAJC0Y6rO1cjF1Vk7HADWjJQ) | ![Lista de Eventos](https://private-user-images.githubusercontent.com/79412536/420555479-c4df34d6-a212-4a7a-bcce-c9e1da7b3802.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE0MDQwOTgsIm5iZiI6MTc0MTQwMzc5OCwicGF0aCI6Ii83OTQxMjUzNi80MjA1NTU0NzktYzRkZjM0ZDYtYTIxMi00YTdhLWJjY2UtYzllMWRhN2IzODAyLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA4VDAzMTYzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk2N2YwZjA5Mjg0YTk2MzNkMGI1MjM2NmQxYTE0Njg2ZWNkMGEwYWVmMTYyYzIwYTE4ODYyYWIwZGU0MGEyNDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.zLU_9pJteqhq8Sott2ePoEBjyPn9YVTx-6mI_pDpAO4) | ![Detalles del Evento](https://private-user-images.githubusercontent.com/79412536/420555520-0084b11a-ed2c-4692-be33-0a7b3dbd49a6.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE0MDQxNDEsIm5iZiI6MTc0MTQwMzg0MSwicGF0aCI6Ii83OTQxMjUzNi80MjA1NTU1MjAtMDA4NGIxMWEtZWQyYy00NjkyLWJlMzMtMGE3YjNkYmQ0OWE2LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA4VDAzMTcyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZmNTFhNzVkNzFmYjJiNDQ3MDljYWMxODZkMzk4Nzk5OGNmMzAxNjgwMzlmMmZlOWVhOWQxYTQ0MGM0ZWZkMTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.gEQiY4xZhySV965N9VoN87H6OesdE-eoPThi6oPMbkU) |

---

## Licencia

Este proyecto está bajo la licencia **MIT**. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **Nombre**: [Omar Quintanilla]
- **Email**: [omarrayo988@gmail.com]
- **GitHub**: [Ivanok1990](https://github.com/Ivanok1990)

---

¡Gracias por usar **Event Scheduler App**! 🚀
