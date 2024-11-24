FROM node:22.11-bookworm
WORKDIR /api
COPY . /api
RUN yarn
CMD ["yarn","server"]
