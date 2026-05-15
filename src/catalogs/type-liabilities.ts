export const TYPE_LIABILITIES = {
  'O-13': { code: 'O-13', name: 'Gran contribuyente' },
  'O-15': { code: 'O-15', name: 'Autorretenedor' },
  'O-23': { code: 'O-23', name: 'Agente de retención en el impuesto sobre las ventas' },
  'O-47': { code: 'O-47', name: 'Régimen Simple de Tributación – SIMPLE' },
  'R-99-PN': { code: 'R-99-PN', name: 'No responsable' },
} as const;

export type TypeLiabilityCode = keyof typeof TYPE_LIABILITIES;
export type TypeLiabilityEntry = typeof TYPE_LIABILITIES[TypeLiabilityCode];
