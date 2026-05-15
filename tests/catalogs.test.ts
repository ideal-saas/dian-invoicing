import { describe, it, expect } from 'vitest';
import { COUNTRIES, TYPE_DOCUMENTS, TYPE_ENVIRONMENTS, TAXES, getCatalogName } from '../src/index.js';

describe('DIAN Catalogs', () => {
  it('COUNTRIES should have CO', () => {
    expect(COUNTRIES['CO']).toBeDefined();
    expect(COUNTRIES['CO'].name).toBeTruthy();
  });

  it('TYPE_DOCUMENTS should have 01 (Factura)', () => {
    expect(TYPE_DOCUMENTS['01']).toBeDefined();
    expect(TYPE_DOCUMENTS['01'].name).toContain('Factura');
  });

  it('TYPE_ENVIRONMENTS should have 1 and 2', () => {
    expect(TYPE_ENVIRONMENTS['1']).toBeDefined();
    expect(TYPE_ENVIRONMENTS['2']).toBeDefined();
  });

  it('TAXES should have 01 (IVA)', () => {
    expect(TAXES['01']).toBeDefined();
    expect(TAXES['01'].name).toBe('IVA');
  });

  it('getCatalogName should return name', () => {
    const name = getCatalogName('01', TYPE_DOCUMENTS);
    expect(name).toBeTruthy();
  });
});
