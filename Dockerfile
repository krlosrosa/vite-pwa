# Etapa 1 — Instala dependências de produção e build
FROM node:22 AS build-env
WORKDIR /app

# Copia apenas arquivos essenciais primeiro (cache mais eficiente)
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copia o resto do projeto
COPY . .

# Gera o build da aplicação
RUN npm run build

# Etapa 2 — Imagem final de produção
FROM node:22
WORKDIR /app

# Copia apenas dependências de produção
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copia build gerado
COPY --from=build-env /app/build ./build

# Comando de inicialização em produção
CMD ["npm", "run", "start"]
