# Etapa 1 — Build da aplicação
FROM node:22 AS build-env
WORKDIR /app

# Copia apenas os arquivos de dependências primeiro
COPY package.json package-lock.json ./
RUN npm install --production

# Copia o restante da aplicação
COPY . .

# Gera o build
RUN npm run build

# Etapa 2 — Imagem final de produção
FROM node:22
WORKDIR /app

# Copia apenas arquivos necessários
COPY package.json package-lock.json ./
RUN npm install --production

# Copia o build já gerado
COPY --from=build-env /app/build ./build

# Comando de inicialização
CMD ["npm", "run", "start"]
