# ====================================================================
# ESTÁGIO 1: BUILD - Compila a aplicação usando todas as dependências
# ====================================================================
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia arquivos de dependência
# Isso garante que a camada de cache do Docker só seja invalidada se as dependências mudarem
COPY package.json package-lock.json ./

# Instala TODAS as dependências (dev e prod) para que o build funcione
# Usamos 'npm install' ou 'npm ci' aqui, sem --omit=dev
RUN npm ci

# Copia o restante do código
COPY . .

# Executa o build de produção. O output será na pasta 'build/client' (conforme seu log)
RUN npm run build

# ====================================================================
# ESTÁGIO 2: PRODUÇÃO (RUNTIME) - Usa Nginx para servir os arquivos estáticos
# ====================================================================
FROM nginx:alpine AS production

# Remove o conteúdo padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia a pasta compilada (build/client) do estágio 'builder' para o diretório de serviço do Nginx
# Verifique se o seu build local realmente gera para 'build/client' ou se é 'dist'
COPY --from=builder /app/build/client /usr/share/nginx/html

# O Nginx serve os arquivos na porta 80 por padrão
# O Traefik usará esta porta
CMD ["nginx", "-g", "daemon off;"]