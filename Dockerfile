FROM oligertimothee/rpi-raspbian-with-pm2:latest

ADD app .

ADD app/pm2.json .

ADD app/package.json .

ENTRYPOINT pm2-docker start pm2.json
