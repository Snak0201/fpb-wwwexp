FROM node:23.3-bookworm
WORKDIR /usr/src/api
COPY . /usr/src/api/
RUN yarn
CMD ["yarn","server"]
