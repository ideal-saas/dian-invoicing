export const TYPE_OPERATIONS = {
  '33': { code: '33', name: 'Nota Débito para facturación electrónica V1 (Decreto 2242)' },
  '32': { code: '32', name: 'Nota Débito sin referencia a facturas' },
  '30': { code: '30', name: 'Nota Débito que referencia una factura electrónica' },
  '23': { code: '23', name: 'Nota Crédito para facturación electrónica V1 (Decreto 2242)' },
  '22': { code: '22', name: 'Nota Crédito sin referencia a facturas' },
  '09': { code: '09', name: 'AIU' },
  '10': { code: '10', name: 'Estandar' },
  '11': { code: '11', name: 'Mandatos bienes' },
  '20': { code: '20', name: 'Nota Crédito que referencia una factura electrónica' },
  '01': { code: '01', name: 'Combustibles' },
  '02': { code: '02', name: 'Emisor es Autorretenedor' },
  '03': { code: '03', name: 'Excluidos y Exentos' },
  '04': { code: '04', name: 'Exportación' },
  '05': { code: '05', name: 'Genérica' },
  '06': { code: '06', name: 'Genérica con pago anticipado' },
  '07': { code: '07', name: 'Genérica con periodo de facturacion' },
  '08': { code: '08', name: 'Consorcio' },
  '12': { code: '12', name: 'Mandatos Servicios' },
} as const;

export type TypeOperationCode = keyof typeof TYPE_OPERATIONS;
export type TypeOperationEntry = typeof TYPE_OPERATIONS[TypeOperationCode];
