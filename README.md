# I.E. Charco Trece — Centros de Interés

Versión estática preparada específicamente para **GitHub Pages**.

## Estructura

- `index.html` — página principal. Debe permanecer en la raíz del repositorio.
- `assets/images/` — fotografías, escudos y códigos QR extraídos del HTML.
- `assets/videos/` — videos utilizados por la página.
- `.nojekyll` — evita procesamiento innecesario de Jekyll.
- `assets/manifest.json` — inventario técnico de los archivos multimedia.

## Publicación en GitHub Pages

1. Descomprime este ZIP en tu computador.
2. Crea o abre el repositorio de GitHub.
3. **Sube el contenido de la carpeta descomprimida, no el ZIP.** En la raíz del repositorio debe verse `index.html`.
4. Ve a **Settings → Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**.
6. Selecciona la rama `main` y la carpeta `/(root)`.
7. Guarda y espera a que GitHub genere la URL.

## Importante

Esta versión no necesita `Code.gs` ni `appsscript.json`; esos archivos son exclusivos de Google Apps Script y no forman parte de un sitio estático de GitHub Pages.
