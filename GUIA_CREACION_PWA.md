# 🛠️ Guía Pro: Cómo crear tu PWA en Next.js 16 desde Cero

¡Bienvenido! En esta guía aprenderás a transformar una aplicación estándar de Next.js en una **Progressive Web App (PWA)** profesional. Al finalizar, tu web será instalable, rápida y funcionará incluso sin conexión a internet.

---

## 📑 Índice de Contenidos

1. [¿Por qué crear una PWA?](#-por-qué-crear-una-pwa)
2. [Requisitos Previos](#-requisitos-previos)
3. [Paso 1: Inicializar el Proyecto](#paso-1-inicializar-el-proyecto)
4. [Paso 2: Instalar la Librería PWA](#paso-2-instalar-la-librería-pwa)
5. [Paso 3: Preparar los Iconos](#paso-3-preparar-los-iconos)
6. [Paso 4: El Manifiesto (manifest.json)](#paso-4-crear-el-manifiesto-manifestjson)
7. [Paso 5: Soporte para TypeScript](#paso-5-arreglar-typescript-solo-si-usas-ts-)
8. [Paso 6: Configuración Master (next.config.ts)](#paso-6-configurar-nextjs-nextconfigts)
9. [Paso 7: Vinculación en el Layout](#paso-7-vincular-la-pwa-en-el-layout)
10. [Paso 8: Configurar Webpack y Scripts](#paso-8-configurar-los-comandos-packagejson)
11. [Paso 9: Limpieza de Git](#paso-9-mantener-tu-casa-limpia-gitignore-)
12. [Paso 10: Página Offline de Respaldo](#paso-10-página-offline-de-respaldo-)
13. [Paso 11: Verificación Final](#paso-11-cómo-verificar-que-todo-funciona-)
14. [Consejos de Pro y Solución de Problemas](#paso-12-consejos-de-pro-para-una-pwa-de-10-)

---

## 🚀 ¿Por qué crear una PWA?

- **Instalación**: Los usuarios pueden añadir tu web a su pantalla de inicio sin usar una App Store.
- **Velocidad**: Gracias a la caché inteligente, la app carga instantáneamente.
- **Offline**: Tus usuarios pueden interactuar con la app aunque no tengan señal.
- **Engagement**: Incrementa la retención de usuarios con una experiencia nativa.

---

## 📋 Requisitos Previos

- **Node.js** (Versión 18 o superior).
- **Next.js 16** (App Router recomendado).
- Conocimientos básicos de React y terminal.

---

## Paso 1: Inicializar el Proyecto

Si empiezas desde cero, crea tu proyecto:

```bash
npx create-next-app@latest mi-pwa
```

_(Recomendado: TypeScript, ESLint, Tailwind, App Router)._

---

## Paso 2: Instalar la Librería PWA

Usaremos `next-pwa`, la librería líder para gestionar el **Service Worker** (el "motor" que permite el modo offline).

```bash
npm install next-pwa
```

---

## Paso 3: Preparar los Iconos 🎨

Tu app necesita una identidad visual. Debes colocar tus iconos en `public/`.

1. Crea iconos en formato `.png` de varios tamaños (el más importante es 512x512).
2. **Herramienta Útil**: Usa [PWA Asset Generator](https://www.npmjs.com/package/pwa-asset-generator) para generar todos los tamaños automáticamente.

---

## Paso 4: Crear el Manifiesto (`manifest.json`)

Este archivo le dice al sistema operativo cómo mostrar tu app. Crea `public/manifest.json`:

```json
{
  "name": "Mi Increíble PWA",
  "short_name": "MiApp",
  "description": "Una aplicación web de alto rendimiento",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    { "src": "/icon-192x192.png", "sizes": "192x192", "type": "image/png" },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```

---

## Paso 5: Arreglar TypeScript (Solo si usas TS) 🟦

Evita errores de tipos creando el archivo `next-pwa.d.ts` en la raíz:

```typescript
declare module "next-pwa";
```

---

## Paso 6: Configurar Next.js (`next.config.ts`)

Activa el plugin en tu configuración principal. **Nota**: Desactivamos la PWA en desarrollo para mayor comodidad al programar.

```typescript
import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  /* Otras configuraciones */
};

export default withPWA(nextConfig);
```

---

## Paso 7: Vincular la PWA en el Layout

Añade las referencias en `app/layout.tsx`. Esto es lo que activa el botón de instalación.

```tsx
export const metadata: Metadata = {
  title: "Mi PWA",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mi PWA",
  },
};

export const viewport = {
  themeColor: "#000000",
};
```

---

## Paso 8: Configurar los Comandos (`package.json`)

Debido a que `next-pwa` usa Webpack, debemos forzar este motor en el comando de desarrollo:

```json
"scripts": {
  "dev": "next dev --webpack",
  "build": "next build",
  "start": "next start"
}
```

---

## Paso 9: Mantener tu casa limpia (`.gitignore`) 🧹

Evita subir los archivos generados automáticamente por el Service Worker. Añade esto a `.gitignore`:

```text
# PWA files
**/public/sw.js
**/public/workbox-*.js
**/public/worker-*.js
**/public/sw.js.map
**/public/workbox-*.js.map
**/public/worker-*.js.map
```

---

## Paso 10: Página Offline de Respaldo 📶

Asegura una experiencia profesional cuando no haya conexión. Crea `app/~offline/page.tsx`:

```tsx
export default function OfflinePage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>📶 Vaya, estás Offline</h1>
      <p>
        Las secciones que ya visitaste funcionan, pero esta requiere internet.
      </p>
      <button onClick={() => window.location.reload()}>
        Intentar conectar
      </button>
    </div>
  );
}
```

---

## Paso 11: Cómo verificar que todo funciona ✅

### Prueba en Producción (Esencial)

1. Ejecuta `npm run build` para compilar.
2. Ejecuta `npm run start` para arrancar.
3. Abre Chrome/Edge y ve a la URL.
4. Verás el mensaje "Service Worker registered" en la consola.
5. Verás el icono de **"Instalar App"** en la barra de direcciones.

---

## Paso 12: Consejos de Pro (Para una PWA de 10) 🌟

1.  **Iconos Maskable**: Asegúrate de que el icono de 512px tenga el propósito `maskable` para que Android no lo recorte mal.
2.  **HTTPS**: Fuera de `localhost`, las PWA **solo** funcionan bajo HTTPS. Usa Vercel o Netlify para despliegues rápidos y seguros.
3.  **Lighthouse**: Usa la herramienta de auditoría de Chrome para verificar que cumples con todos los estándares de PWA.

---

## ⚠️ Errores Comunes

- **Iconos no encontrados**: Revisa que las rutas en `manifest.json` coincidan con los archivos en `/public`.
- **Caché persistente**: Si haces cambios, borra la caché del sitio en la pestaña "Application" de la consola.

---

¡Felicidades! Has creado una PWA profesional con Next.js 16. 🚀
