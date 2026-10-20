/** Calcula el precio luego de aplicar un porcentaje de descuento. */
export function calcularPrecioFinal(precio: number, descuento: number): number {
  if (descuento > 100 || descuento < 0) throw new RangeError;
  if (precio < 0 || !Number.isFinite(precio)) throw new RangeError;
  if(Number.isNaN(precio)) throw new RangeError
    return precio - (precio * descuento) / 100;
}
