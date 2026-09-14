# Site do Instituto Ayó de Desenvolvimento Social e Cultural

Site estático em HTML, CSS e JavaScript, publicado pelo GitHub Pages em www.institutoayo.org.

## Páginas

| Arquivo | O que é |
|---|---|
| `index.html` | Início, com abertura em movimento, números, áreas de atuação e programas |
| `sobre.html` | Quem somos, missão, Metodologia Odara e a Trilha Formativa de doze meses |
| `cursos.html` | Cursos, movida a dados, com busca e filtro por eixo |
| `projetos.html` | Portfólio, movida a dados |
| `impacto.html` | Números, território, acolhimento e articulações |
| `galeria.html` | Acervo de fotos, movida a dados, com filtro e lightbox |
| `imprensa.html` | Clipping, movida a dados |
| `contato.html` | Contato, inscrições e parcerias |

## Como o site é organizado

- `style.css` é o único arquivo de estilo de todas as páginas
- `script.js` cuida do menu, do tema, das animações, dos contadores, do lightbox e da montagem das páginas movidas a dados
- `dados.js` guarda os arrays de programas, cursos, projetos, galeria e clipping. Para mudar conteúdo, mexa aqui e não no HTML
- `img/marca` tem a logo e o favicon, gerados a partir do arquivo original
- `img/cursos`, `img/institucional` e `img/projetos` guardam as fotos já tratadas
- `CNAME` fixa o domínio

## Regra de cache

Os links de `style.css` e de todo `.js` levam um número de versão, no formato `style.css?v=20260914a`.
Sempre que um desses arquivos mudar, troque o número em todas as páginas, senão o navegador
de quem já visitou continua servindo a versão velha.

## Paleta

As cores saíram dos pixels da logo original.

| Cor | Hex |
|---|---|
| Magenta | `#CC45E5` |
| Pink | `#F54B9A` |
| Coral | `#F98379` |
| Âmbar | `#F8BB60` |
| Amarelo | `#F8D256` |
| Roxo | `#5B2D8E` |
| Noite | `#240B38` |

Display em Fraunces, texto em Plus Jakarta Sans.

## Fora do controle de versão

A pasta `_apoio`, a pasta `img/acervo` e os PDFs ficam no `.gitignore`. São material de trabalho, não entram no site.
