# ParcialDistribuidos
##  Integrantes del equipo

- **Nombre:** Laura Valentina Urueña Bejarano  
- **Nombre:** Luis Esteban Robelto Zarabanda  
- **Usuario DockerHub:** luizeror 


---

## 🐳 Imagen Docker

La imagen se encuentra publicada en DockerHub:

 [https://hub.docker.com/r/luizeror/album-app](https://hub.docker.com/r/luizeror/album-app)

---

## ⚙️ Instrucciones para ejecutar

La imagen del proyecto se encuentra publicada en el repositorio de Docker Hub en la siguiente dirección:

```bash 
https://hub.docker.com/r/luizeror/album-app
```

---
Este repositorio contiene la versión más reciente etiquetada como latest.
---
## 🚀 Instrucciones para construir y ejecutar la imagen

### ✅ Opción 1: Ejecutar la imagen directamente desde DockerHub

```bash
docker pull luizeror/album-app
docker run -p 3000:3000 luizeror/album-app
```

Después de ejecutar el contenedor, accede a la aplicación desde tu navegador:

http://localhost:3000

---
## 🛠Opción 2: Construir la imagen localmente desde el proyecto

Siga estos pasos para construir y ejecutar la imagen Docker localmente:

1. Clona este repositorio:

```bash
git clone <URL-del-repositorio>
cd albumApp
```
Construye la imagen usando Docker

```bash
docker build -t luizeror/album-app .
```


Luego, ejecuta el contenedor:

```bash
docker run -p 3000:3000 luizeror/album-app
```

Accede a la aplicación desde tu navegador:

```bash
http://localhost:3000
```


