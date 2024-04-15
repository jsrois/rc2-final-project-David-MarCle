[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xq5TwZF7)
# rc2-template-proyecto-individual-final

Red social para estudiantes de Cine de España y Latinoamérica.

Una red donde los estudiantes y profesionales noveles, puedan compartir sus trabajos y experiencias en proyectos realizados. Y poder crear sinergias entre estudiantes, profesionales y empresas.

- Catálogo de cortometrajes, mediometrajes y largometrajes.
- Ficha personal de cada usuario (profesional y empresas)
- Sistema de match
- Sistema de recomendaciones
- Chat
- Anuncios laborales


## Cómo lanzar el proyecto

### Frontend

```
cd frontend 
npm install 
npm run dev
```

### Backend

Hace falta tener una base de datos Postgres según las especificaciones del archivo `src/main/resources/application.properties`

```
cd filmnectingproject
mvn spring-boot:run
```
