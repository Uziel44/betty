# Betty · Tejidos en telar

Landing page estática. Tres archivos, sin frameworks ni dependencias.

---

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La estructura y todo el texto de la página |
| `index.css` | Todos los estilos, incluida la paleta tierra |
| `index.js` | Menú móvil, acordeón y el año del footer |
| `img/` | Las fotos. Leé `img/LEEME.txt` para los nombres exactos |
| `robots.txt` | Le dice a Google que puede indexar el sitio |
| `sitemap.xml` | Lista de páginas para Google |
| `.nojekyll` | Necesario para GitHub Pages |

Igual que en Ilha Grande: nada de Tailwind por CDN, CSS escrito a mano y
comentado, para que puedas leerlo y entenderlo mientras aprendés.

---

## Antes de publicar

Ocho cosas para resolver, todas marcadas como `COMENTARIO REEMPLAZO` en
el HTML.

1. **Número de WhatsApp.** Puse un número de ejemplo
   (`5493515394185`) en 6 lugares. Buscá con `Ctrl+H` en VSCode y
   reemplazalo por el real de Beatriz.

2. **Usuario de Instagram.** Puse `@betty.tejidos` en el footer, es un
   marcador. Cambialo por el real.

3. **Las fotos.** Poné las imágenes en `img/` con los nombres de
   `img/LEEME.txt`. Ahora mismo la web muestra bloques de color en su lugar.

4. **Tiempo de entrega por pieza.** En la sección "El telar" y en la
   pregunta frecuente correspondiente puse "1 a 2 semanas" como estimado
   general. Ajustalo si varía según la pieza.

5. **Instrucciones de lavado.** El texto de esa pregunta frecuente es un
   placeholder razonable, pero reemplazalo por las instrucciones reales.

6. **Envíos y pago.** Las dos preguntas frecuentes correspondientes están
   escritas en términos generales ("se coordina por WhatsApp"). Si ya
   tenés una política fija de costos o de seña, conviene escribirla.

7. **La URL.** En el `<head>` hay tres lugares con
   `https://uziel44.github.io/betty/`. Cambialos si comprás dominio propio.

8. **Precios.** Tal como pediste, no hay ningún precio publicado en la
   web. Cada tarjeta de pieza y cada CTA llevan a WhatsApp para conversarlo.

---

## Cómo cambiar los colores

Todo está en `index.css`, en el bloque `:root` de arriba de todo.

```css
--oxido:   #591B04;   /* botones principales, wordmark */
--oliva:   #615D42;   /* footer, franja de "cómo encargar" */
--mostaza: #BF7A26;   /* único acento: hover, subrayados */
```

---

## La única sección oscura

A diferencia de Ilha Grande, acá hay una sola zona de color, no dos. El
fondo es lana cruda en toda la web, con un único corte a negro en "El
telar" — la sección que el blueprint marca como la más importante,
porque es la que explica por qué una pieza tarda lo que tarda y vale lo
que vale. Ese contraste es a propósito: si agregás más fondos oscuros
en otras secciones, "El telar" deja de destacarse.

Las dos franjas de color pleno (oliva en "Cómo encargar", óxido en el
CTA final) son la excepción permitida por el blueprint: máximo dos
fondos de color pleno en toda la página, además del oscuro.

---

## Cómo probarla

Abrí `index.html` con doble clic. Funciona directo desde el disco.

Para verla en celular: clic derecho → Inspeccionar → ícono de teléfono
arriba a la izquierda del panel.

---

## Cómo publicarla en GitHub Pages

1. Creá un repositorio nuevo.
2. Subí los archivos manteniendo la estructura, con `index.html` en la raíz.
3. Settings → Pages → Source: Deploy from a branch → main → /(root).
4. Esperá dos minutos.

---

## Cosas que evité a propósito

- **Nada de `onclick` en el HTML.** Todo el comportamiento en `index.js`.
- **Ningún `<style>` dentro del HTML.** Todo en `index.css`.
- **Ningún `href` vacío.**
- **Sin precios en la web**, como pediste: Betty vende encargos, no stock.
- **Sin carrito ni pasarela de pago.**
- **Todas las imágenes locales**, nada servido desde dominios ajenos.

---

## Detalle útil

Cada botón de "Consultar" en las tarjetas de piezas abre WhatsApp con un
mensaje distinto según la pieza — manta, bufanda, pashmina, ruana o
saco. Vas a saber qué pieza generó la consulta antes de leer el mensaje.
