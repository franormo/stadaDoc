# Configuración de Tablas

Para definir correctamente una tabla en la base de datos, es importante establecer su **[clave primaria](#/glosario.md#Clave%20primaria)**.

### Ejemplo

```sql
CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY,
  nombre TEXT NOT NULL
);
```

### Captura

![Ejemplo de tabla](capturas/tabla-ejemplo.png)
