# Middleware de Validación de Roles en Express

Este proyecto consiste en el desarrollo de un middleware que valida el acceso a rutas específicas basado en el rol del usuario. El middleware verifica si el rol del usuario es permitido para acceder a la ruta, de lo contrario, retorna un error `403 Forbidden`.

## Requerimientos

- **Express** y **TypeScript**.
- La aplicación corre en el puerto `3000`.
- Se valida el rol de un usuario hardcodeado en el middleware para permitir o denegar el acceso a la ruta `/usuarios`.
- Los roles permitidos en la ruta `/usuarios` son: `admin` y `gerente`.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone <URL-del-repositorio>
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd nombre-del-proyecto
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

## Scripts

- Para iniciar la aplicación en modo de desarrollo con recompilación automática (si usas `nodemon`):
    ```bash
    npm run dev
    ```

- Para compilar el código TypeScript a JavaScript:
    ```bash
    npm run build
    ```

- Para iniciar la aplicación en producción (después de compilar):
    ```bash
    npm start
    ```

## Uso

1. Ejecuta el proyecto con el comando:
    ```bash
    npm start
    ```

2. La aplicación correrá en `http://localhost:3000`.

3. Se ha hardcodeado un usuario con rol en el middleware. Dependiendo del rol que tenga, al realizar una petición `GET` a la ruta `/usuarios`, se verificará si el rol del usuario tiene permiso para acceder.

4. Si el rol es `admin` o `gerente`, la aplicación responderá con el mensaje:
    ```
    lista de usuarios
    ```

5. Si el rol no está permitido, devolverá un error `403 Forbidden`.

## Ejemplo de Middleware de Roles

El middleware para validar los roles se implementa de la siguiente manera:

```typescript
import { Request, Response, NextFunction } from 'express';

export const rolesMiddleware = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        // Usuario hardcodeado con rol de "admin"
        const user = { role: 'admin' }; 
        const userRole = user.role;

        if (roles.includes(userRole)) {
            return next();
        }

        res.sendStatus(403); // Forbidden
    };
};
