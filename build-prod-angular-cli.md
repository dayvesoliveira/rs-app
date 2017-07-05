# ng build

# Overview: 
	- ng build Compila o aplicativo em um diret�rio de sa�da.

# Criando um build:
	
	ng build 
	
	> Os artefatos de build ser�o armazenados no diret�rio /dist.

	> Todos os comandos que criam ou servem seu projeto, ng build/serve/ e2e, excluir�o o diret�rio de sa�da (dist/ por padr�o). 
	  Isso pode ser desabilitado atrav�s do comando: 
	  
	  --no-delete-output-path (or --delete-output-path=false) flag.

	> Build alvos e arquivos de ambiente

	ng build Pode especificar um alvo de compila��o (--target=production or --target=development) 
	e um arquivo de ambiente a ser usado com essa compila��o(--environment=dev or --environment=prod). 
	Por padr�o, o objetivo de desenvolvimento e o ambiente s�o usados.

	> O mapeamento usado para determinar qual arquivo de ambiente ser� usado pode ser encontrado em angular-cli.json:

		"environmentSource": "environments/environment.ts",
		"environments": {
		  "dev": "environments/environment.ts",
		  "prod": "environments/environment.prod.ts"
		}
		
	> Essas op��es tamb�m se aplicam ao comando de saque. Se voc� n�o passar um valor para o ambiente, 
	  ser� padr�o para dev para desenvolvimento e prod para produ��o.

	# Estes s�o equivalentes
	ng build --target=production --environment=prod
	ng build --prod --env=prod
	ng build --prod

	# E estes s�o assim
	ng build --target=development --environment=dev
	ng build --dev --e=dev
	ng build --dev
	ng build
	
	> Voc� tamb�m pode adicionar seus pr�prios arquivos env, al�m de dev e prod, fazendo o seguinte:

		- crie um src/environments/environment.NAME.ts
		- adicione { "NAME": 'src/environments/environment.NAME.ts' } para o apps[0].environments objetos no .angular-cli.json
		- use-os atrav�s do flag --env=NAME  no comando build/serve.
	
	> Manipula��o de tags b�sicas em index.html

		- Ao buildar, voc� pode modificar base tag (<base href="/">) no seu index.html com --base-href your-url op��o.

	# Define a tag de base href para /myUrl/ no seu index.html.
	ng build --base-href /myUrl/
	ng build --bh /myUrl/
	Bundling & Tree-Shaking
	
	> Todas as constru��es fazem uso de agrupamento e tree-shaking limitado, enquanto
	--prod builds tamb�m executam a elimina��o limitada do c�digo morto via UglifyJS.
	--dev vs --prod builds

	> Ambos --dev/--target=development e --prod/--target=production s�o 'meta' flags, Que setam outras flags. 
	  Se voc� n�o especificar, voc� receber� o --dev defaults.

	> Flag	--dev	--prod
	--aot	false	true
	--environment	dev	prod
	--output-hashing	media	all
	--sourcemaps	true	false
	--extract-css	false	true
	--extract-licenses Extrai todas as licen�as em um arquivo separado, no caso de produ��o builds somente. 
	--i18n-file Arquivo de localiza��o para usar para i18n. 
	--prod Tamb�m define o seguinte n�o-flagel�vel configura��es:

	> Adiciona o service worker se configurado em .angular-cli.json.
	> Substitui process.env.NODE_ENV Em m�dulos com o valor de produ��o (isso � necess�rio para algumas bibliotecas, como React).
	> Executa o UglifyJS no c�digo.
	
	> CSS resources
	  Os recursos no CSS, como imagens e fontes, ser�o copiados automaticamente como parte de um build. 
	  Se um resource for inferior a 10kb, ele tamb�m ser� inlined.

	> Voc� ver� esses recursos serem gerados e impress�es digitais na raiz do dist/.

	> Service Worker:
	  Existe suporte ao service worker experimental para builds de produ��o dispon�veis no CLI. 
	  Para habilit�-lo, execute os seguintes comandos:

	> npm install @angular/service-worker --save
	> ng set apps.0.serviceWorker=true
	> Em --prod builda um service worker o manifesto ser� criado e carregado automaticamente. 
	  Lembre-se de desativar o service worker enquanto voc� desenvolve para evitar o c�digo obsoleto.

	Note: service worker o suporte � experimental e est� sujeito a mudan�as.

	> Op��es:

	> aot: --aot default value: false
	  Build usando a compila��o Ahead of Time.

	> app: --app (aliases: -a)
	  Especifica o nome ou �ndice do aplicativo para ser usado.

	> base-href: --base-href (aliases: -bh)
	  URL base para a aplica��o sendo buildada.

	> deploy-url: --deploy-url (aliases: -d)
	  URL onde os arquivos ser�o implantados.
	
	> environment: --environment (aliases: -e)
	  Define o ambiente de build.

	> extract-css: --extract-css (aliases: -ec)
	  Extrai css De estilos globais em arquivos css em vez de js.

	> i18n-file: --i18n-file
	  Localiza��o do arquivo para usar com i18n.

	> i18n-format: --i18n-format
	  Formato do arquivo de localiza��o especificado em --i18n-file.

	> locale: --locale
	  Local para usar com o i18n.

	> output-hashing: --output-hashing (aliases: -oh)
	  Define o output do nome do arquivo modo de hashing do cache-busting.
	  Values: none, all, media, bundles

	> output-path: --output-path (aliases: -op)
	  Path onde a sa�da ser� colocada.

	> delete-output-path: --delete-output-path (aliases: -dop) default value: true
	  Delete o diretorio do path de sa�da.

	> poll: --poll
	  Habilita e defina o arquivo que faz watch (acompanha) com per�odo de tempo da pesquisa (milissegundos).

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
	  Adiciona mais detalhes ao log de sa�da.

	> watch: --watch (aliases: -w)
	  Executa o build Quando os arquivos s�o alterados.

	> show-circular-dependencies: --show-circular-dependencies (aliases: -scd)
	  Mostra as depend�ncias circular em warnings nos builds.