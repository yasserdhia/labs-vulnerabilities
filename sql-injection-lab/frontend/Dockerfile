FROM node:18

WORKDIR /app
COPY . .

# تثبيت الحزم وتجاوز تعارض الإصدارات
RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
