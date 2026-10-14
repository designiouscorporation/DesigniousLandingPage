# Designious Corporation — sitio web

Página de presentación bilingüe (español / inglés), estática, publicada con GitHub Pages en **https://designiouscorporation.com**.

## Estructura
```
index.html        página única
css/styles.css    estilos
js/main.js        idioma ES/EN, etapas del caso, contadores
assets/img        logos, imágenes del caso, íconos, imagen para redes
assets/video      3 videos optimizados + imágenes de portada
assets/docs       portafolio (cartelera) en PDF
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
