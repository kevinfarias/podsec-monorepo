mix phx.gen.context Authentication NivelAcesso niveis_acesso descricao:text
mix phx.gen.html Authentication Usuario usuarios nomecompleto:string usuario:string senha:string email:string ativo:boolean recebenewsletter:boolean nivelacesso:references:niveis_acesso

mix phx.gen.context Posts Situacao situacoes descricao:text

mix phx.gen.html PostsAudio Podcast titulo:text assunto:text url:string tags:string usuariocriacao:references:usuarios usuarioalteracao:references:usuarios situacao:references:situacoes 
mix phx.gen.schema PostsAudio.PodcastSecao podcast_secoes titulo:text hora:time

mix phx.gen.html PostsNews Noticias noticias titulo:text assunto:text assuntocomplemento:text url:string tags:string usuariocriacao:references:usuarios usuarioalteracao:references:usuarios situacao:references:situacoes

mix phx.gen.html PostsVideos Videos videos titulo:text assunto:text url:string tags:string usuariocriacao:references:usuarios usuarioalteracao:references:usuarios situacao:references:situacoes
mix phx.gen.schema PostsVideos.VideoSecao