FROM elixir:1.12

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

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

RUN mix deps.get

RUN chmod +x ./build_database_and_start.sh

CMD ["sh", "./build_database_and_start.sh"]