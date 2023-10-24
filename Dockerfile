FROM node:12.18.3
WORKDIR /app
COPY . .
RUN npm install
run npm run build
EXPOSE 3000
CMD ["npm", "start"]
