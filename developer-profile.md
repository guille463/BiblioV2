# Perfil de Developer — para generación de curso adaptado

## Contexto
- Developer con ~1 año de experiencia, estudiante de DAM.
- Aprende construyendo proyectos personales reales, no siguiendo tutoriales pasivos.
- Proyecto de referencia: BiblioV2, app fullstack de biblioteca (Express 5 + PostgreSQL en backend, React 19 + Vite en frontend).
- Entorno: Windows, VS Code, pnpm, Git básico. Trabaja en español, código en inglés con comentarios en español.


## Nivel actual - REPASAR
**JavaScript/Node:**
- ES modules (import/export, named vs default), async/await, destructuring, optional chaining, nullish coalescing, template literals, ternarios.
- Arquitectura en capas: routes → controllers → services → database, con responsabilidades separadas correctamente (la capa de servicios traduce nulls de la BD a errores de dominio, el controller los mapea a códigos HTTP).
- Express: middlewares (cors, morgan, express.json), Router, params, manejo de errores con try/catch y códigos de estado (200/201/400/404/500), distinción de errores por código (incluye códigos de error de PostgreSQL como 22P02).
- PostgreSQL: queries parametrizadas ($1) sin concatenación (sin riesgo de SQL injection), RETURNING, ILIKE, pool de conexiones, diseño básico de tablas con constraints.
- Configuración por variables de entorno (dotenv, config.js centralizado).
- JSDoc con tipos de Express para autocompletado.

**React (nivel inicial pero funcional):**
- Componentes funcionales, props, composición básica.
- useState, useEffect (fetch inicial con async interno), useRef.
- Custom hook propio (useBooks) que encapsula estado de datos, loading y error.
- Capa de servicios con axios (cliente configurado con baseURL desde import.meta.env) separada de los componentes.
- Renderizado condicional, listas con key, estado derivado (calcular valores a partir de props/estado en vez de duplicarlos en estado).
