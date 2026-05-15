export const TYPE_DOCUMENTS = {
  '01': { code: '01', name: 'Factura de Venta Nacional', algorithm: 'CUFE-SHA384', type: 'fv' },
  '02': { code: '02', name: 'Factura de Exportación', algorithm: 'CUFE-SHA384', type: 'fv' },
  '03': { code: '03', name: 'Factura de Contingencia', algorithm: 'CUDE-SHA384', type: 'fv' },
  '91': { code: '91', name: 'Nota Crédito', algorithm: 'CUDE-SHA384', type: 'nc' },
  '92': { code: '92', name: 'Nota Débito', algorithm: 'CUDE-SHA384', type: 'nd' },
  '89': { code: '89', name: 'AttachedDocument', algorithm: '', type: 'at' },
  '88': { code: '88', name: 'ApplicationResponse', algorithm: 'CUDE-SHA384', type: 'ar' },
  '1': { code: '1', name: 'Nomina Individual', algorithm: 'CUNE-SHA384', type: 'ni' },
  '2': { code: '2', name: 'Nomina Individual de Ajuste', algorithm: 'CUNE-SHA384', type: 'na' },
} as const;

export type TypeDocumentCode = keyof typeof TYPE_DOCUMENTS;
export type TypeDocumentEntry = typeof TYPE_DOCUMENTS[TypeDocumentCode];
