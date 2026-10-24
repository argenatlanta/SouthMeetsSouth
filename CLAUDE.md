# South Meets South: guía para Claude

Sitio estático de la misión de empresas argentinas de software y tecnología a Atlanta, a cargo del
Consulado General de la República Argentina en Atlanta. Se publica en Cloudflare: cada push a `main`
actualiza el sitio en producción.

## Estructura

```
public/                 ← todo lo que se publica (directorio de salida en Cloudflare)
  index.html            portada: próxima misión, por qué Argentina, ediciones, sobre Georgia, recursos, contacto
  edicion.html          detalle de una edición: edicion.html?id=2025
  validar.html          formulario para que cada empresa revise sus etiquetas del buscador (sin enlaces, noindex)
  404.html
  css/styles.css        estilos (tokens de color en :root, modo oscuro incluido)
  js/app.js             renderizado + textos fijos de la interfaz (objeto UI, en es y en)
  data/sitio.js         configuración general: borrador, contacto, recursos, «Por qué Argentina», «Sobre Georgia», buscador, fecha de actualización
  data/ediciones.js     el contenido de cada edición
  img/ediciones/<id>/   fotos de cada edición
  img/empresas/         logos de las empresas (uno por empresa, se reutiliza entre ediciones)
  img/prensa/           miniaturas de las notas de prensa (480 × 270)
  img/organizadores/    logos del Consulado, la Embajada y la Cancillería (por idioma, con versión para modo oscuro)
  img/apoyos/           logos de los sponsors (p. ej., Copa Airlines en el incentivo del B2B)
  img/marca-pais/       trama de ondas del manual de Marca País
  img/mailing/<año>/    imágenes de los mailings (logos en placas, apoyos, trama); el sitio no las enlaza
  css/marca-pais.css    paleta, tipografía y trama de Marca País (se carga después de styles.css)
mailing/                HTML de los mailings para Constant Contact (no se publica; usa las imágenes de img/mailing)
wrangler.jsonc          config para Cloudflare Workers (si se usa Pages, no se lee)
.claude/                skill de diseño Impeccable y sus agentes (no se publica). El motor se descarga
                        solo y no se versiona; los hooks son locales. Telemetría apagada en settings.json.
.agents/skills/         skills de diseño y movimiento de emilkowalski/skill (enlazadas en .claude/skills;
skills-lock.json        versiones instaladas). Se actualizan con `npx skills update`.
```

No hay build ni dependencias. El contenido se edita casi siempre en `public/data/ediciones.js`.

**Alcance:** el sitio cubre solo la etapa de **Atlanta** de cada misión (agenda, empresas, anfitriones).
Las otras ciudades se mencionan en una línea (`otrasEtapas`). Se publican las ediciones desde 2024; el
texto de contexto (`contexto` en `sitio.js`) indica desde qué año se hacen las misiones.

## Reglas

1. **No inventar datos.** Nombres de empresas, personas, cargos, cifras, fechas y lugares salen del
   usuario o de una fuente verificable. Si un dato viene de una fuente pública y no lo confirmó el
   Consulado, marcarlo con `verificar: true`. Si falta, preguntar; no rellenar.
2. **Siempre bilingüe.** Todo texto visible va como `{ es: "...", en: "..." }`. Si el usuario lo da en
   un solo idioma, traducirlo. Los nombres propios (empresas, ciudades, personas) van como texto simple.
3. **Comillas:** «» en español y “” en inglés, para no tener que escapar comillas dentro de los strings.
4. Al cambiar contenido, actualizar `actualizado` en `public/data/sitio.js` con la fecha del día.
5. `borrador: true` en `sitio.js` muestra un aviso arriba y resalta los datos con `verificar: true`.
   Pasarlo a `false` solo cuando el usuario confirme que el contenido está revisado.
6. Fotos: `public/img/ediciones/<id>/`, JPG o WebP, de hasta 1600 px de ancho y unos 400 KB cada una.
   Siempre con `alt` en ambos idiomas.
7. Logos: `public/img/empresas/<slug>.png`, recortados sin márgenes y de hasta 480 × 160 px. Solo logos
   que haya dado el Consulado o la empresa (en Drive: «05_Logos_e_imagenes» en 2026, «Logos Definitivos
   2025» en 2025); no bajarlos de la web. Si el logo es blanco o claro, agregar `logoFondo: "oscuro"`. Si en una lista
   alguna empresa tiene logo, las que no tienen muestran sus iniciales. Los logos de las empresas son diseños
   propios: no cambiar sus colores ni su fondo (blanco, o #121c2a con `logoFondo: "oscuro"`), tampoco por Marca País.
8. Diseño: sigue el manual de Marca País 2025 (`css/marca-pais.css`): paleta MPA, Source Sans 3 en títulos y
   textos cortos (botones, menú, etiquetas, chips) y Roboto en el cuerpo, Amarillo solo para acciones y acentos.
   Tramas solo las del manual, en menos del 50% de la pieza y con módulos de al menos 1/14 del ancho. No usar
   el logo de Marca País. Sin etiquetas pequeñas sobre los títulos de sección ni tarjetas dentro de tarjetas.
   El foco del teclado va en Azul oscuro sobre fondos claros y en Amarillo sobre Azul oscuro.

## Esquema de una edición (`public/data/ediciones.js`)

```js
{
  id: "2025",                       // también es el ?id= de la URL
  estado: "realizada",              // "realizada" | "proxima"
  titulo: { es, en },
  inicio: "2025-11-17", fin: "2025-11-18",     // fechas de la etapa Atlanta
  otrasEtapas: [{ ciudad, inicio?, fin?, nota?, contacto?: { texto: { es, en }, email } }],
      // otras ciudades: solo se mencionan; contacto agrega un enlace mailto (solo correos institucionales)
  empresas: 13,                           // opcional, número: suma en los totales de la portada
  resumen: { es, en },
  cifras: [{ valor: "+100", texto: { es, en }, verificar? }],
  sectores: ["Fintech", { es: "Videojuegos", en: "Video games" }],
  notaInterna: { es, en },                // origen de los datos; solo se ve en modo borrador
  agenda: [{ fecha?, hora?: "9:00–11:30", titulo, detalle?, lugar?, verificar? }],  // «Lo que hicimos»
  delegacionNota: { es, en },             // nota interna, solo se ve en modo borrador
  delegacion: [{ nombre, logo?, logoFondo?: "oscuro", provincia?, sector?, detalle?, web?, linkedin?, ficha?, perfil?, verificar? }],
      // empresas argentinas; logo: "img/empresas/wootic.png"
      // provincia: no se muestra en la tarjeta ni en la ficha; queda como dato (p. ej. para el resumen de la edición)
      // linkedin: "https://www.linkedin.com/company/<slug>/", solo si la página existe; botón junto a «Sitio web» en la ficha
      // perfil (buscador): { ofrece: [...], industrias: [...] }, con los id de las opciones de `buscador` en sitio.js
      // ficha (botón «Más información»): { resumen, servicios: [{es,en}], trayectoria: [{es,en}],
      //   eeuu?: {es,en}, clientes?: ["Nombre" | {es,en}], imagenes?: [{ src, alt: {es,en} }] }
  anfitriones: [{ nombre, tipo, detalle?, web?, verificar? }],         // «Nos recibieron»
      // tipo: "asociacion" | "hub" | "universidad" | "empresa" | "camara" | "gobierno" | "otro"
  reuniones: [{ nombre, cargo?, organizacion?, detalle?, verificar? }], // «Con quiénes nos reunimos»
  organizadores: [{ nombre, detalle?, logo?, logoOscuro? }],
      // logo y logoOscuro: ruta o { es, en }; si no hay logo se muestra el nombre. El nombre queda como texto alternativo.
  resultados: [{ es, en }],
  galeriaCredito: { es, en },             // «Fotos: …» al pie de la galería
  galeria: [{ titulo: { es, en }, fotos: [{ src, mini, alt: { es, en } }] }],
      // un grupo por momento de la agenda; src: "img/ediciones/2025/b2b-1.jpg" (hasta 1600 px, sin EXIF),
      // mini: "…-mini.jpg" (720 × 540, recortada 4:3). La galería y cada momento están plegados por
      // defecto; al tocar una foto se abre el visor.
  apoyos: [{ nombre, logo, detalle, web, verificar? }],   // «Apoyos» (sponsors), después de «Prensa y documentos»;
      // logos en img/apoyos/ (sin cambiar colores ni fondo) y una reseña de una o dos oraciones
  prensa: [{ titulo, medio, url, fecha?, idioma: "es" | "en", imagen? }],
      // imagen: miniatura de la nota, "img/prensa/<id>-<medio>.jpg" (480 × 270, de la og:image de la página).
      // Si la nota no tiene foto útil, el usuario indica cuál usar (p. ej. el logo del medio o de la empresa
      // de la nota, centrado sobre blanco y sin recortar). Sin imagen se muestra el nombre del medio.

  // Solo para estado "proxima":
  cuentaRegresiva: { fecha, ciudad },     // la cuenta regresiva de la portada
  programa: [{ es, en }],
  agendaNota: { es, en },               // aviso público, p. ej. «Agenda provisional, sujeta a cambios»
  convocatoria: { estado: "abierta" | "cerrada", cierre, url, nota },
  llamadoAnfitriones: { es, en },         // invitación a empresas de Atlanta
  registroB2B: "https://luma.com/…",     // botón «Regístrese en la sesión B2B» (Luma: el Consulado
                                          //   confirma cada inscripción); también aparece en el buscador
  incentivo: { sponsor, logo, titulo, texto, detalle?, corto },
      // incentivo para registrarse en el B2B (p. ej., los pasajes de Copa Airlines): va en el recuadro del registro
      // (portada y edición), con «Cómo funciona» plegado; `corto` va en la franja al pie de la lista de empresas
}
```

En la agenda de una misión próxima solo van las actividades abiertas al público local (no reuniones
internas de la delegación). Las fuentes habituales están en el Google Drive del Consulado (carpetas
«Misión Software AAAA»): agenda, listado de inscriptos y carpeta de la misión. De los listados se
publican solo nombre de la empresa, web y una descripción breve; nunca datos personales
(correos, teléfonos, documentos).

**Fichas de empresas («Más información»).** La fuente principal es el one-pager que cada empresa presentó
para la misión (Drive del Consulado: «Misión Software AAAA» → «ONE PAGERS»). Si no hay one-pager o es
escaso, se completa con el formulario de inscripción y el sitio web de la empresa. Reflejar lo que la
empresa dice de sí misma. En las fichas no se usa `verificar`: lo que haya que confirmar va a un documento
aparte para el Consulado, ordenado por quién debe verificarlo. Misma estructura y extensión parecida para
todas: resumen de 1 o 2 oraciones, 4 a 6 servicios, hasta 3 datos de trayectoria, EE.UU. solo si la empresa
declara clientes o presencia allí, hasta 6 clientes (excepción: Avenga, que pidió 9 servicios, 4 datos de
trayectoria y 10 clientes). Tono de sitio institucional y comercial, sin
expresiones informales. Sin imágenes, sin aviso de la fuente y sin aviso de misiones anteriores. No
publicar datos personales (nombres de contactos, correos, teléfonos, fotos). Usar siempre el mismo
`nombre` para cada empresa en todas las ediciones.

**«Por qué Argentina»** (`porQueArgentina` en `sitio.js`): sección de la portada para empresas de Atlanta que no
conocen el sector. Cifras de la CESSI («Why Argentina» y la página «Argentina Tech Hub NY») y del reporte anual
del OPSSI; se usan siempre las más recientes y se actualizan cuando sale un reporte nuevo. Los datos públicos que
no salen de la CESSI llevan `verificar: true`. Las fuentes se citan al pie de la sección.

**«Sobre Georgia»** (`sobreGeorgia` en `sitio.js`): sección breve de la portada para que las empresas argentinas
conozcan la región. Cuatro cifras del «Economic Competitiveness Redbook» anual de la Georgia Chamber of Commerce
(páginas «Highlights» y «Georgia Economic Overview»), con la fuente al pie; se actualizan con cada edición nueva.
Los cuatro textos sobre Atlanta y la bajada están en `js/app.js` (`why_*`). No es el foco del sitio: no alargarla.

**Buscador de la delegación («Encuentre la empresa indicada»).** Arriba de la lista de empresas de una edición,
si sus empresas tienen `perfil`. Las opciones (qué necesita e industria) están en `buscador` en `sitio.js`;
cada empresa marca las suyas en `perfil`. Las opciones elegidas suman puntos: aparece toda empresa que coincida
en al menos una, ordenadas de mayor a menor coincidencia, y cada tarjeta dice en qué coincide. La palabra clave
filtra. La búsqueda queda en la URL (`?id=2026&ofrece=ia,pagos`) para compartirla. Las primeras opciones de cada
grupo son las verticales oficiales de la misión (Google Sites «MC de Software y Tecnología a Atlanta - Chicago»,
debajo de «ARGENTINE COMPANIES»), con los mismos nombres que los `sectores`: toda empresa que esa página pone en
una vertical lleva la opción equivalente (Aerospace y Gaming parten de esas empresas). Además, una opción se marca
si la ficha de la empresa la respalda (un servicio, un cliente o un dato de trayectoria). Lo que cada empresa
valida con el formulario prevalece, aunque quite una vertical de la página oficial (en ese caso, avisar para
corregirla). Las opciones propias del buscador deben tener al menos dos empresas, salvo las que pida el Consulado
(p. ej. «Estructuración legal y financiera», de Wootic, «Experiencia del cliente y contact center», de
Borderless, «Marketing digital, marca y contenidos», de QKStudio, y «Servicios legales» y «Hotelería y turismo», de
Code First Lab). Si cambia la página oficial, volver a comparar.

**Lista B2B («Quiero reunirme»).** En la edición próxima con `registroB2B`, cada tarjeta de la delegación y cada
ficha tienen un botón «Quiero reunirme»; el buscador ofrece sumar de una vez las que coinciden en todo. Una barra
fija muestra la lista y abre un panel para copiarla (y pegarla en la pregunta del registro de Luma sobre las
empresas con las que quieren conectarse) o enviarla por correo a `buscador.listaEmail`. La lista vive en la URL
(`?lista=slug1,slug2`) y el texto incluye ese enlace; el sitio no guarda nada.

**Validación de etiquetas** (`validar.html?empresa=<slug>`, con el slug del `nombre` como en `#empresa-<slug>`):
cada empresa ve sus etiquetas marcadas, las corrige y envía la respuesta por correo a `buscador.validacionEmail` (o la
copia, si el correo no se abre). La respuesta lista las etiquetas con su id entre corchetes y los cambios
respecto de lo publicado; con eso se actualiza `perfil` en `ediciones.js`. La página no está enlazada desde el
sitio y no se indexa. Sin `empresa`, muestra un selector.

Si una empresa se baja de la delegación, se quita de `ediciones.js` (y su logo, si no está en otra edición).
Los enlaces `#empresa-<slug>` que ya circulan (p. ej., en un mailing enviado) llevan a la lista de la delegación;
no borrar sus imágenes de `img/mailing/`, que el mailing enviado sigue usando.

Las secciones vacías (`[]`) no se muestran en el sitio publicado. En modo borrador aparecen como
«Sección a completar».

Cuando una misión «próxima» ya se realizó, cambiar su `estado` a `"realizada"`, completar sus
secciones y, si ya se conoce, agregar la siguiente edición con `estado: "proxima"`.

## Verificación antes de hacer commit

```bash
node --check public/js/app.js public/data/ediciones.js public/data/sitio.js
python3 -m http.server 8000 -d public   # y abrir http://localhost:8000
```

Revisar la portada y cada edición tocada en ES y EN, en escritorio y en celular (390 px), sin
errores en la consola ni scroll horizontal.

## Publicación

- `main` es producción: Cloudflare publica cada push en uno o dos minutos.
- Para cambios grandes o que el Consulado quiera revisar antes, trabajar en una rama: Cloudflare genera
  una URL de vista previa por rama. Se publica al fusionar a `main`.
- Mensajes de commit en español, describiendo el contenido que cambió.
