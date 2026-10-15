# South Meets South: guía para Claude

Sitio estático de la misión de empresas argentinas de software y tecnología a Atlanta, a cargo del
Consulado General de la República Argentina en Atlanta. Se publica en Cloudflare: cada push a `main`
actualiza el sitio en producción.

## Estructura

```
public/                 ← todo lo que se publica (directorio de salida en Cloudflare)
  index.html            portada: próxima misión, ediciones, por qué Atlanta, recursos, contacto
  edicion.html          detalle de una edición: edicion.html?id=2025
  404.html
  css/styles.css        estilos (tokens de color en :root, modo oscuro incluido)
  js/app.js             renderizado + textos fijos de la interfaz (objeto UI, en es y en)
  data/sitio.js         configuración general: borrador, contacto, recursos, fecha de actualización
  data/ediciones.js     el contenido de cada edición
  img/ediciones/<id>/   fotos de cada edición
  img/empresas/         logos de las empresas (uno por empresa, se reutiliza entre ediciones)
  img/organizadores/    logos del Consulado, la Embajada y la Cancillería (por idioma, con versión para modo oscuro)
  img/marca-pais/       trama de ondas del manual de Marca País
  css/marca-pais.css    paleta, tipografía y trama de Marca País (se carga después de styles.css)
wrangler.jsonc          config para Cloudflare Workers (si se usa Pages, no se lee)
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
   alguna empresa tiene logo, las que no tienen muestran sus iniciales.
8. Diseño: sigue el manual de Marca País 2025 (`css/marca-pais.css`): paleta MPA, Source Sans 3 en títulos y
   Roboto en el cuerpo, Amarillo solo para acciones y acentos. Tramas solo las del manual, en menos del 50% de
   la pieza y con módulos de al menos 1/14 del ancho. No usar el logo de Marca País.

## Esquema de una edición (`public/data/ediciones.js`)

```js
{
  id: "2025",                       // también es el ?id= de la URL
  estado: "realizada",              // "realizada" | "proxima"
  titulo: { es, en },
  inicio: "2025-11-17", fin: "2025-11-18",     // fechas de la etapa Atlanta
  otrasEtapas: [{ ciudad, inicio?, fin?, nota? }],  // otras ciudades: solo se mencionan
  empresas: 13,                           // opcional, número: suma en los totales de la portada
  resumen: { es, en },
  cifras: [{ valor: "+100", texto: { es, en }, verificar? }],
  sectores: ["Fintech", { es: "Videojuegos", en: "Video games" }],
  notaInterna: { es, en },                // origen de los datos; solo se ve en modo borrador
  agenda: [{ fecha?, hora?: "9:00–11:30", titulo, detalle?, lugar?, verificar? }],  // «Lo que hicimos»
  delegacionNota: { es, en },             // nota interna, solo se ve en modo borrador
  delegacion: [{ nombre, logo?, logoFondo?: "oscuro", provincia?, sector?, detalle?, web?, ficha?, verificar? }],
      // empresas argentinas; logo: "img/empresas/wootic.png"
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
  prensa: [{ titulo, medio, url, fecha?, idioma: "es" | "en" }],

  // Solo para estado "proxima":
  cuentaRegresiva: { fecha, ciudad },     // la cuenta regresiva de la portada
  programa: [{ es, en }],
  agendaNota: { es, en },               // aviso público, p. ej. «Agenda provisional, sujeta a cambios»
  convocatoria: { estado: "abierta" | "cerrada", cierre, url, nota },
  llamadoAnfitriones: { es, en },         // invitación a empresas de Atlanta
  formularioInteres: "https://…",         // botón «Quiero participar»
}
```

En la agenda de una misión próxima solo van las actividades abiertas al público local (no reuniones
internas de la delegación). Las fuentes habituales están en el Google Drive del Consulado (carpetas
«Misión Software AAAA»): agenda, listado de inscriptos y carpeta de la misión. De los listados se
publican solo nombre de la empresa, provincia, web y una descripción breve; nunca datos personales
(correos, teléfonos, documentos).

**Fichas de empresas («Más información»).** La fuente principal es el one-pager que cada empresa presentó
para la misión (Drive del Consulado: «Misión Software AAAA» → «ONE PAGERS»). Si no hay one-pager o es
escaso, se completa con el formulario de inscripción y el sitio web de la empresa. Reflejar lo que la
empresa dice de sí misma. En las fichas no se usa `verificar`: lo que haya que confirmar va a un documento
aparte para el Consulado, ordenado por quién debe verificarlo. Misma estructura y extensión parecida para
todas: resumen de 1 o 2 oraciones, 4 a 6 servicios, hasta 3 datos de trayectoria, EE.UU. solo si la empresa
declara clientes o presencia allí, hasta 6 clientes. Tono de sitio institucional y comercial, sin
expresiones informales. Sin imágenes, sin aviso de la fuente y sin aviso de misiones anteriores. No
publicar datos personales (nombres de contactos, correos, teléfonos, fotos). Usar siempre el mismo
`nombre` para cada empresa en todas las ediciones.

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
