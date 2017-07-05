# ng build

# Overview: 
	- ng build Compila o aplicativo em um diretório de saída.

# Criando um build:
	
	ng build 
	
	> Os artefatos de build serão armazenados no diretório /dist.

	> Todos os comandos que criam ou servem seu projeto, ng build/serve/ e2e, excluirão o diretório de saída (dist/ por padrão). 
	  Isso pode ser desabilitado através do comando: 
	  
	  --no-delete-output-path (or --delete-output-path=false) flag.

	> Build alvos e arquivos de ambiente

	ng build Pode especificar um alvo de compilação (--target=production or --target=development) 
	e um arquivo de ambiente a ser usado com essa compilação(--environment=dev or --environment=prod). 
	Por padrão, o objetivo de desenvolvimento e o ambiente são usados.

	> O mapeamento usado para determinar qual arquivo de ambiente será usado pode ser encontrado em angular-cli.json:

		"environmentSource": "environments/environment.ts",
		"environments": {
		  "dev": "environments/environment.ts",
		  "prod": "environments/environment.prod.ts"
		}
		
	> Essas opções também se aplicam ao comando de saque. Se você não passar um valor para o ambiente, 
	  será padrão para dev para desenvolvimento e prod para produção.

	# Estes são equivalentes
	ng build --target=production --environment=prod
	ng build --prod --env=prod
	ng build --prod

	# E estes são assim
	ng build --target=development --environment=dev
	ng build --dev --e=dev
	ng build --dev
	ng build
	
	> Você também pode adicionar seus próprios arquivos env, além de dev e prod, fazendo o seguinte:

		- crie um src/environments/environment.NAME.ts
		- adicione { "NAME": 'src/environments/environment.NAME.ts' } para o apps[0].environments objetos no .angular-cli.json
		- use-os através do flag --env=NAME  no comando build/serve.
	
	> Manipulação de tags básicas em index.html

		- Ao buildar, você pode modificar base tag (<base href="/">) no seu index.html com --base-href your-url opção.

	# Define a tag de base href para /myUrl/ no seu index.html.
	ng build --base-href /myUrl/
	ng build --bh /myUrl/
	Bundling & Tree-Shaking
	
	> Todas as construções fazem uso de agrupamento e tree-shaking limitado, enquanto
	--prod builds também executam a eliminação limitada do código morto via UglifyJS.
	--dev vs --prod builds

	> Ambos --dev/--target=development e --prod/--target=production são 'meta' flags, Que setam outras flags. 
	  Se você não especificar, você receberá o --dev defaults.

	> Flag	--dev	--prod
	--aot	false	true
	--environment	dev	prod
	--output-hashing	media	all
	--sourcemaps	true	false
	--extract-css	false	true
	--extract-licenses Extrai todas as licenças em um arquivo separado, no caso de produção builds somente. 
	--i18n-file Arquivo de localização para usar para i18n. 
	--prod Também define o seguinte não-flagelável configurações:

	> Adiciona o service worker se configurado em .angular-cli.json.
	> Substitui process.env.NODE_ENV Em módulos com o valor de produção (isso é necessário para algumas bibliotecas, como React).
	> Executa o UglifyJS no código.
	
	> CSS resources
	  Os recursos no CSS, como imagens e fontes, serão copiados automaticamente como parte de um build. 
	  Se um resource for inferior a 10kb, ele também será inlined.

	> Você verá esses recursos serem gerados e impressões digitais na raiz do dist/.

	> Service Worker:
	  Existe suporte ao service worker experimental para builds de produção disponíveis no CLI. 
	  Para habilitá-lo, execute os seguintes comandos:

	> npm install @angular/service-worker --save
	> ng set apps.0.serviceWorker=true
	> Em --prod builda um service worker o manifesto será criado e carregado automaticamente. 
	  Lembre-se de desativar o service worker enquanto você desenvolve para evitar o código obsoleto.

	Note: service worker o suporte é experimental e está sujeito a mudanças.

	> Opções:

	> aot: --aot default value: false
	  Build usando a compilação Ahead of Time.

	> app: --app (aliases: -a)
	  Especifica o nome ou índice do aplicativo para ser usado.

	> base-href: --base-href (aliases: -bh)
	  URL base para a aplicação sendo buildada.

	> deploy-url: --deploy-url (aliases: -d)
	  URL onde os arquivos serão implantados.
	
	> environment: --environment (aliases: -e)
	  Define o ambiente de build.

	> extract-css: --extract-css (aliases: -ec)
	  Extrai css De estilos globais em arquivos css em vez de js.

	> i18n-file: --i18n-file
	  Localização do arquivo para usar com i18n.

	> i18n-format: --i18n-format
	  Formato do arquivo de localização especificado em --i18n-file.

	> locale: --locale
	  Local para usar com o i18n.

	> output-hashing: --output-hashing (aliases: -oh)
	  Define o output do nome do arquivo modo de hashing do cache-busting.
	  Values: none, all, media, bundles

	> output-path: --output-path (aliases: -op)
	  Path onde a saída será colocada.

	> delete-output-path: --delete-output-path (aliases: -dop) default value: true
	  Delete o diretorio do path de saída.

	> poll: --poll
	  Habilita e defina o arquivo que faz watch (acompanha) com período de tempo da pesquisa (milissegundos).

	> progress: --progress (aliases: -pr) default value: true
	  Log progresso para o console enquanto faz o building.

	> sourcemap: --sourcemap (aliases: -sm, sourcemaps)
	  Saida de sourcemaps.

	> stats-json: --stats-json
	  Gera um stats.json arquivo que pode ser analisado usando ferramentas como: 
	  webpack-bundle-analyzer ou https://webpack.github.io/analyse.

	> target: --target (aliases: -t, -dev, -prod) default value: development
	  Define o build alvo.

	> vendor-chunk: --vendor-chunk (aliases: -vc) default value: true
	  Use um bundle separado contendo apenas bibliotecas de fornecedores(vendors).

	> verbose: --verbose (aliases: -v) default value: false
	  Adiciona mais detalhes ao log de saída.

	> watch: --watch (aliases: -w)
	  Executa o build Quando os arquivos são alterados.

	> show-circular-dependencies: --show-circular-dependencies (aliases: -scd)
	  Mostra as dependências circular em warnings nos builds.