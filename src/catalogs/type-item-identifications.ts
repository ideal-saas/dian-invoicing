export const TYPE_ITEM_IDENTIFICATIONS = {
  '001': { code: '001', name: 'UNSPSC' },
  '010': { code: '010', name: 'GTIN' },
  '020': { code: '020', name: 'Partida Arancelarias' },
  '999': { code: '999', name: 'Estándar de adopción del contribuyente' },
} as const;

export type TypeItemIdentificationCode = keyof typeof TYPE_ITEM_IDENTIFICATIONS;
export type TypeItemIdentificationEntry = typeof TYPE_ITEM_IDENTIFICATIONS[TypeItemIdentificationCode];
