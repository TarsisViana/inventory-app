FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000

# App startup command
CMD ["sh", "-c", "node db/populate.js && node server.js"]