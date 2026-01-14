# 🚀 Next.js 16 PWA Boilerplate (Tecnonets)

[English](#english) | [Español](#español)

---

## English

A professional boilerplate to create **Progressive Web Apps (PWA)** using **Next.js 16**, TypeScript, and Tailwind CSS. This template is optimized for performance, installability, and offline reliability.

### ✨ Key Features

- **📱 Fully Installable**: Ready to be added to the home screen on iOS and Android.
- **📶 Offline Support**: Includes a Service Worker and a custom offline fallback page (`app/~offline`).
- **⚡ Next.js 16 & React 19**: Built with the latest technologies and the App Router.
- **🎨 Modern Design**: Styled with Tailwind CSS for a premium look and feel.
- **🛠️ Optimized Configuration**: Pre-configured `next-pwa` with Webpack support.

### 📋 Prerequisites

- **Node.js**: v18 or higher.
- **Package Manager**: npm, yarn, or pnpm.

### 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:
   _Note: We use the `--webpack` flag to ensure PWA compatibility._

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Start the production server**:
   ```bash
   npm run start
   ```

### ⚠️ Technical Notes

- **Webpack vs Turbopack**: `next-pwa` requires Webpack. Ensure you use the `--webpack` flag in development.
- **HTTPS**: PWAs require an HTTPS connection to work (except for `localhost`).
- **Icons**: Icons are located in the `public/` directory. If you change them, update `public/manifest.json`.

---

## Español

Una plantilla profesional para crear **Progressive Web Apps (PWA)** utilizando **Next.js 16**, TypeScript y Tailwind CSS. Este template está optimizado para ofrecer rendimiento, ser instalable y funcionar sin conexión.

### ✨ Características Principales

- **📱 Completamente Instalable**: Lista para ser añadida a la pantalla de inicio en iOS y Android.
- **📶 Soporte Offline**: Incluye un Service Worker y una página de respaldo personalizada (`app/~offline`).
- **⚡ Next.js 16 y React 19**: Construido con las últimas tecnologías y el App Router.
- **🎨 Diseño Moderno**: Estilizado con Tailwind CSS para una experiencia visual premium.
- **🛠️ Configuración Optimizada**: `next-pwa` pre-configurado con soporte para Webpack.

### 📋 Requisitos

- **Node.js**: v18 o superior.
- **Gestor de paquetes**: npm, yarn o pnpm.

### 🚀 Primeros Pasos

1. **Instalar dependencias**:

   ```bash
   npm install
   ```

2. **Ejecutar servidor de desarrollo**:
   _Nota: Usamos el flag `--webpack` para asegurar la compatibilidad con PWA._

   ```bash
   npm run dev
   ```

3. **Compilar para producción**:

   ```bash
   npm run build
   ```

4. **Iniciar servidor de producción**:
   ```bash
   npm run start
   ```

### ⚠️ Notas Técnicas

- **Webpack vs Turbopack**: `next-pwa` requiere Webpack. Asegúrate de usar el flag `--webpack` en desarrollo.
- **HTTPS**: Las PWA requieren una conexión HTTPS para funcionar (excepto en `localhost`).
- **Generación de Archivos**: Los archivos `sw.js` y `workbox-*.js` se generan automáticamente en la carpeta `public/` al compilar.

### 📚 Documentación Detallada (Español)

- [¿Qué es una PWA? (Conceptos)](./EXPLICACION_PWA.md)
- [Guía paso a paso de creación](./GUIA_CREACION_PWA.md)

---

Created with ❤️ by [Tecnonets](https://github.com/tecno-nets)
