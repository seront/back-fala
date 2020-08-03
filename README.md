# Backend Prueba Falabella

Creado por Nestor Mendoza

## Instalacion de dependencias

Luego de descargar el repositorio, se debe ejecutar el siguiente comando en el directorio `./back-fala` para instalar las dependencias necesarias

``` node
npm i
```

## Levantar el proyecto

Para ejecutar el proyecto de forma local se debe ejecutar el siguiente comando desde `./back-fala`

``` node
npm run start
```

## Endpoint del ambiente

Por defecto la aplicacion apunta disponibiliza la direccion <http://localhost:3000>, este proyecto se debe usar en conjunto con el proyecto <https://github.com/seront/front-fala.git>

Para acceder al endpoint <http://localhost:3000/validaSolicitud>, espera una llamada post con el siguiente body:

``` json
{
    "rut":"6665555",
    "celular":"912345678",
    "email":"email@example.com",
    "renta":"444444"
}
```

La unica validacion que se realiza es si los campos estan completos.
