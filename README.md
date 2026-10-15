# South Meets South

Sitio de la **Misión de Software y Tecnología Argentina → Atlanta**, una iniciativa del Consulado
General de la República Argentina en Atlanta. Muestra la próxima misión y cada edición anterior: qué
hicimos, con quiénes nos reunimos, qué empresas argentinas viajaron y qué empresas e instituciones nos
recibieron. Está en español e inglés.

## Cómo actualizarlo

El contenido está en dos archivos:

- `public/data/ediciones.js`: una entrada por edición (agenda, delegación, anfitriones, reuniones,
  resultados, fotos, prensa).
- `public/data/sitio.js`: datos generales (contacto, recursos, aviso de borrador).

La forma más simple es pedírselo a Claude con este repositorio conectado. Por ejemplo:

- «Agregá a la edición 2024 estas empresas: …»
- «La misión 2026 ya terminó: pasala a realizada y cargá estas reuniones: …»
- «Subí estas fotos a la galería de 2025.»
- «Ya revisamos todo: quitá el aviso de versión preliminar.»

Claude edita los datos, verifica el sitio y sube los cambios a GitHub. Cloudflare los publica solo.
Las reglas que sigue Claude están en [`CLAUDE.md`](CLAUDE.md).

También se puede editar a mano desde GitHub (botón ✏️ sobre el archivo). Hay que respetar el formato:
comas, comillas y llaves.

## Publicación en Cloudflare (configuración inicial, una sola vez)

**Opción recomendada: Cloudflare Pages**

1. En [dash.cloudflare.com](https://dash.cloudflare.com), ir a **Workers & Pages** → **Create**.
2. Elegir la pestaña **Pages** (o el enlace «Looking to deploy Pages? Get started») →
   **Import an existing Git repository**.
3. **Connect GitHub**, autorizar la cuenta `argenatlanta` y elegir el repositorio `SouthMeetsSouth`.
4. Configuración del build:
   - Project name: `southmeetssouth`
   - Production branch: `main`
   - Framework preset: **None**
   - Build command: *(vacío)*
   - Build output directory: `public`
5. **Save and Deploy**. En uno o dos minutos el sitio queda en `https://southmeetssouth.pages.dev`.

**Alternativa: Cloudflare Workers.** Si el panel lleva directamente a crear un *Worker* desde un
repositorio, también funciona: elegir el repo, dejar el nombre `southmeetssouth` (tiene que coincidir
con el de `wrangler.jsonc`) y el comando de deploy `npx wrangler deploy`. El sitio queda en
`https://southmeetssouth.<subdominio>.workers.dev`.

Desde ese momento, cada cambio en `main` se publica automáticamente. Los cambios en otras ramas generan
una URL de vista previa para revisarlos antes.

**Dominio propio (opcional):** en el proyecto → **Custom domains** → **Set up a custom domain**.

## Ver el sitio en la computadora

```bash
python3 -m http.server 8000 -d public
```

Después abrir <http://localhost:8000>. También se puede abrir `public/index.html` con doble clic.
