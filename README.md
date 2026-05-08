# Recursos Civiles PUCV

Plataforma de estudio para **Recursos Procesales Civiles**, pensada para preparación de examen oral de grado.

## Contenido

- 8 módulos de estudio.
- 47 flashcards filtrables por categoría.
- 30 preguntas de quiz con explicación.
- 8 preguntas de examen oral con estructura, respuesta modelo y errores comunes.
- 6 cuadros comparativos.
- Panel de progreso por temas.

## Desarrollo local

```bash
npm install
npm run dev
```

La app queda disponible en:

```txt
http://127.0.0.1:5173/
```

## Validación

```bash
npm run lint
npm run build
```

## Despliegue en Vercel

Configuración recomendada:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Si importas desde GitHub, Vercel detecta Vite automáticamente.

## Estructura

```txt
src/App.jsx      Aplicación completa
src/main.jsx     Entrada React
src/index.css    Reset mínimo
```

## Nota académica

El contenido está diseñado como apoyo de estudio. Antes de usarlo como material definitivo, revisa artículos, doctrina y criterios del curso.
