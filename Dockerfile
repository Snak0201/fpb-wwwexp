FROM node:22.11-bookworm
WORKDIR /usr/src/api
COPY . /usr/src/api/
RUN yarn
CMD ["yarn","server"]
