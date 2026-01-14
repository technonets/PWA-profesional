# 🚀 Guía Definitiva: Cómo subir tu proyecto Next.js a GitHub

Esta guía está diseñada para que cualquier persona, sin importar su nivel, pueda subir y actualizar su proyecto de Next.js en GitHub como un profesional.

---

## 1. El Cimiento: El archivo `.gitignore`

Antes de tocar Git, Next.js necesita una regla de oro: **No subir archivos basura**. En la raíz de tu proyecto, asegúrate de tener un archivo llamado `.gitignore`.

### ¿Por qué es vital?

Evita que subas carpetas gigantescas como `node_modules` o archivos de configuración temporal como `.next`. Si no las ignoras, tu repositorio pesará gigas y será imposible de manejar.

---

## 2. Paso a Paso: La Primera Subida (Setup)

Sigue estos comandos en tu terminal de VS Code:

### Paso A: Inicializar Git

```bash
git init
```

Esto crea el "cerebro" de Git en tu carpeta. Solo se hace **una vez**.

### Paso B: El "Semáforo" (git status)

```bash
git status
```

**Úsalo siempre**. Te dirá en rojo qué archivos han cambiado y no están guardados aún.

### Paso C: Preparar los archivos

```bash
git add .
```

Esto pone todos tus archivos en "verde" (zona de espera). Es como preparar las maletas antes del viaje.

### Paso D: Guardar la versión (Commit)

```bash
git commit -m "Mi primer despliegue: Next.js PWA"
```

Aquí "cierras la maleta". Le pones una etiqueta para saber qué hay dentro.

---

## 3. Conexión con el Mundo (GitHub)

1. Ve a [GitHub.com](https://github.com/new) y crea un repositorio **vacío**.
2. **NO** selecciones "Add a README" ni nada parecido. GitHub debe estar totalmente limpio.
3. Copia la URL que termina en `.git`.
4. En tu terminal, escribe:

```bash
# 1. Creamos la rama principal
git branch -M main

# 2. Conectamos tu PC con GitHub (Pega TU URL)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# 3. Subimos el código
git push -u origin main
```

---

## 4. ¿Cómo subir cambios nuevos? (Día a día)

Cuando modifiques un archivo en el futuro, no necesitas hacer todo lo anterior. Solo estos 3 pasos:

1. `git add .` (Preparar cambios)
2. `git commit -m "Añadí nueva característica"` (Guardar versión)
3. `git push` (Enviar a GitHub)

---

## 🛠️ Solución de Errores (Qué hacer si algo falla)

| El error dice...                          | ¿Por qué pasó?                                                      | Solución rápida                                                                                         |
| :---------------------------------------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------ |
| `remote origin already exists`            | Ya intentaste conectar un repo antes.                               | Escribe: `git remote remove origin` y luego intenta el `remote add` de nuevo.                           |
| `failed to push some refs`                | GitHub tiene archivos que tú no tienes.                             | Probablemente creaste el repo con un README en la web. Borra el repo en GitHub y créalo vacío de nuevo. |
| `remote: Not Found`                       | La URL está mal escrita o no tienes permiso.                        | Revisa que la URL sea idéntica a la de GitHub (ojo con las mayúsculas).                                 |
| `Everything up-to-date`                   | No has hecho un 'commit' de tus cambios.                            | Asegúrate de hacer `git add .` y `git commit` antes de hacer `push`.                                    |
| `ERROR: This build is using Turbopack...` | Next.js 16 usa Turbopack por defecto, pero la PWA necesita Webpack. | Asegúrate de que en `package.json` el script de build diga `"next build --webpack"`.                    |
| `Event handlers cannot be passed...`      | Usaste interactividad (como `onClick`) en un Server Component.      | Agrega `"use client";` en la primera línea de ese archivo (ej: en `app/~offline/page.tsx`).             |

---

## 💡 Consejos de Oro

- **Mensajes de commit claros**: En lugar de poner "cambio", pon "Corregido error en el botón de contacto".
- **Vercel**: Si conectas este repositorio a [Vercel](https://vercel.com), cada vez que hagas `git push`, tu página se actualizará sola en internet.

---

_Documentación creada profesionalmente para el flujo de trabajo con Next.js 16.1.1+._
