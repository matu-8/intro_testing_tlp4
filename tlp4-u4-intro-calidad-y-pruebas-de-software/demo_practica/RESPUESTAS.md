# Trabajo Practico: Introduccion al testing
---
### Consignas de comprension:
1. ¿Qué total devuelve actualmente un descuento del 150 % sobre $1.000?
2. ¿Por qué ese resultado no cumple la regla de negocio?
3. ¿Por qué la prueba falla si la función terminó de ejecutarse?
---
### Desarrollo
1. El total que devuelve la funcion es un monto negativo.
2. No cumple la regla de negocio porque carece de sentido que se descuente -500 sobre un precio.
3. La prueba falla debido a que falta que la funcion lance un error que pueda ser capturado por la prueba.
---
### Consigna de correcion

Modificá **solo** `src/services/precios.ts`. Antes de realizar la operación, incorporá comprobaciones para que:

- El precio sea un número finito, igual o mayor que cero.
- El descuento sea un número finito entre 0 y 100, inclusive.
- Los valores inválidos provoquen un `RangeError`.  
**Desarrollo**: Realizado en el directorio correspondiente.
---
### Consigna de integracion
**Desarrollo**: Realizado en el directorio correspondiente.
