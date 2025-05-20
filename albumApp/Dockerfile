# Imagen base
FROM node:18

# Directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY package*.json ./
RUN npm install

COPY . .

# Puerto que expone la app
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
