import { describe, expect, it } from 'vitest';
import { calcularPrecioFinal } from '../src/services/precios.ts';

describe('calcularPrecioFinal', () => {
  it('aplica un descuento del 10 %', () => {
    expect(calcularPrecioFinal(1000, 10)).toBe(900);
  });

  it('conserva el precio si el descuento es cero', () => {
    expect(calcularPrecioFinal(1000, 0)).toBe(1000);
  });
  it('rechaza descuentos superiores al 100 %', () => {
    expect(() => calcularPrecioFinal(1000, 150)).toThrow(RangeError);
  });
//
  // Pruebas nuevas escritas
  it('se espera precio 0 si el procentaje del descuento es 100%', () => {
    expect(calcularPrecioFinal(1000, 100)).toBe(0)
  });
  it('rechaza precios negativos', () => {
    expect(() => calcularPrecioFinal(-100, 10)).toThrow(RangeError)
  });
  it('rechaza descuento negativo', () => {
    expect(() => calcularPrecioFinal(-1000, -10)).toThrow(RangeError)
  });
  it('rechaza valores que no son un numero (NaN)', () => {
    expect(() => calcularPrecioFinal(NaN, 10)).toThrow(RangeError)
  });
});
