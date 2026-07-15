# Curso React 19 — Índice de contenidos

> Base: documentación oficial React 19. Stack de referencia: Vite + React 19, CSS nativo, pnpm.
> Formato de petición: "Dame el tema X.Y".

---

## Nivel 1 — Fundamentos sólidos (repaso con criterio)

Objetivo: consolidar lo que ya sé, corregir malos hábitos y fijar el modelo mental de React.

| Nº | Tema | Contenido |
|----|------|-----------|
| 1.1 | JSX y componentes | Reglas de JSX, fragmentos, expresiones, componentes puros, composición, children |
| 1.2 | Props | Paso de props, destructuring, valores por defecto, props como contrato de solo lectura |
| 1.3 | Renderizado condicional y listas | `&&`, ternarios, early return, `map` + `key` (por qué el índice es mala key) |
| 1.4 | useState en profundidad | Snapshot del estado, batching, updater functions, estado con objetos y arrays (inmutabilidad) |
| 1.5 | Estado derivado y elevación | Calcular vs duplicar, lifting state up, single source of truth |
| 1.6 | Eventos | Handlers, paso de argumentos, propagación, eventos de formulario |
| 1.7 | Estructura del proyecto React | Organización de carpetas (components, hooks, services), convenciones de nombres, CSS por componente |

## Nivel 2 — Interactividad y datos

Objetivo: dominar el ciclo de vida real de una SPA: formularios, efectos bien usados, contexto y datos remotos.

| Nº | Tema | Contenido |
|----|------|-----------|
| 2.1 | Formularios controlados | Inputs controlados vs no controlados, select, checkbox, radio, validación básica |
| 2.2 | useEffect bien usado | Dependencias, cleanup, cuándo NO usar un efecto ("You Might Not Need an Effect"), race conditions en fetch con AbortController |
| 2.3 | useRef y el DOM | Referencias a DOM, valores mutables sin re-render, `ref` como prop en React 19 (adiós forwardRef) |
| 2.4 | Custom hooks | Extracción de lógica, reglas de hooks, mejorar tu `useBooks` (refetch, parámetros) |
| 2.5 | useReducer | Estado complejo, acciones, reducer puro, cuándo elegirlo sobre useState |
| 2.6 | Context | `createContext`, `use(Context)` en React 19, provider como `<Context>`, evitar prop drilling, combinar con useReducer |
| 2.7 | Fetching de datos y capa de servicios | Patrón loading/error/data, axios vs fetch, servicios separados, manejo de errores HTTP hacia la UI |

## Nivel 3 — React 19 moderno y calidad

Objetivo: lo nuevo de React 19 aplicable a frontend SPA, rendimiento y patrones profesionales.

| Nº | Tema | Contenido |
|----|------|-----------|
| 3.1 | Actions y useActionState | Formularios con actions, estado pending/error automático, `formAction` |
| 3.2 | useOptimistic y useFormStatus | UI optimista, feedback de envío en componentes hijos |
| 3.3 | use() y Suspense | Leer promesas con `use`, Suspense para loading declarativo, lazy loading de componentes con `lazy` |
| 3.4 | Rendimiento | memo, useMemo, useCallback: cuándo sí y cuándo es ruido; React Compiler (visión general) |
| 3.5 | Error handling en UI | Error boundaries, errores de render vs errores de datos, fallbacks |
| 3.6 | Portales y DOM avanzado | createPortal (modales, tooltips), `<title>`/`<meta>` en componentes (React 19) |
| 3.7 | Patrones de composición | children avanzado, render props, compound components básicos, cuándo cada uno |

## Anexos

| Nº | Tema | Contenido |
|----|------|-----------|
| A.1 | React Router — fundamentos | Rutas, `<Link>`, rutas anidadas, `Outlet`, parámetros de URL |
| A.2 | React Router — datos y navegación | Navegación programática, loaders básicos, rutas de error, layouts |

---

## Fuera de alcance (decisión, no olvido)
- SSR, Server Components, streaming (`react-dom/server`, `react-dom/static`).
- Librerías externas (TanStack Query, Redux, styled-components, etc.). Única excepción: React Router como anexo.
- TypeScript: ejemplos en JS con JSDoc donde aporte.

## Diseño de cada .md temático
- Contenido explicativo extenso: cada concepto se desarrolla con el porqué (modelo mental), no solo el cómo.
- Agnóstico de proyecto: patrones estándar aplicables a cualquier app React.
- Ejemplos funcionales completos, código en inglés, comentarios en español.
- Sección "Errores comunes" al final de cada tema.
- CSS nativo cuando el tema lo requiera (un archivo .css por componente).