FROM elixir:1.12

RUN apt-get update && apt-get install -y wget

ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

RUN mix local.hex --force \
  && mix archive.install --force hex phx_new 1.5.8 \
  && apt-get update \
  && curl -sL https://deb.nodesource.com/setup_12.x | bash \
  && apt-get install -y apt-utils \
  && apt-get install -y nodejs \
  && apt-get install -y build-essential \
  && apt-get install -y inotify-tools \
  && mix local.rebar --force

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

EXPOSE 4000

COPY . .

RUN chmod +x ./build_database_and_start.sh

CMD ["sh", "./build_database_and_start.sh"]