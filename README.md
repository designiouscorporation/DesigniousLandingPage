# Designious Corporation — sitio web

Página de presentación bilingüe (español / inglés), estática, publicada con GitHub Pages en **https://designiouscorporation.com**.

## Estructura
```
index.html        página principal
privacidad.html   política de privacidad (borrador, conviene revisión legal)
css/styles.css    estilos
js/main.js        idioma ES/EN, etapas del caso, contadores
assets/img        logos, imágenes del caso, íconos, imagen para redes
assets/img/team   fotos del equipo (ver "Editar → Equipo")
assets/video      3 videos optimizados + imágenes de portada
assets/docs       portafolio (cartelera) en PDF
assets/fonts      tipografías Poppins y Playfair Display (licencia SIL OFL incluida)
.well-known       security.txt: contacto para reportar vulnerabilidades
_config.yml       qué se publica en GitHub Pages (deja este README fuera del sitio)
CNAME             dominio personalizado (no borrar)
```

## Publicar
1. Subir todo el contenido de esta carpeta a la raíz del repositorio (rama `main`).
2. GitHub → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `(root)`.
3. En **Custom domain** escribir `designiouscorporation.com` y activar **Enforce HTTPS** cuando esté disponible.
4. En Cloudflare → DNS:
   - 4 registros `A` con nombre `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 registro `CNAME` con nombre `www` → `designiouscorporation.github.io`
   - Todos en **DNS only** (nube gris) hasta que GitHub emita el certificado HTTPS.

## Editar
- Textos en español e inglés: `js/main.js` (objeto `T`) y los textos base en `index.html`.
- Colores de marca: variables al inicio de `css/styles.css`.
- Al cambiar `css/styles.css` o `js/main.js`, actualizar el número `?v=` con el que se cargan en `index.html` y `privacidad.html` (por ejemplo la fecha del cambio). Así los navegadores descargan la versión nueva en lugar de usar la guardada.
- `.well-known/security.txt` vence en la fecha de `Expires`: renovarla antes (máximo un año hacia adelante).
- Equipo: sección `#equipo` en `index.html` (nombre, enlace de LinkedIn) y sus textos ES/EN en `js/main.js` (claves `t1.*` a `t4.*`). Las cuatro tarjetas tienen el mismo tamaño; el orden en pantalla es el del código HTML.
  - Fotos en `assets/img/team/` (`.jpg`, `.png`, `.jpeg` o `.webp`, nombre en minúsculas) con estos nombres: `ceo.jpg`, `diego-lomelin.jpg`, `daniel-lomelin.jpg`, `luisa-avalo.jpg`. Recomendado: cuadradas de 800×800 px, con cabeza y hombros y el rostro centrado. Si falta una foto, la tarjeta muestra las iniciales.
