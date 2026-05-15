export const TYPE_DOCUMENT_IDENTIFICATIONS = {
  '11': { code: '11', name: 'Registro civil' },
  '12': { code: '12', name: 'Tarjeta de identidad' },
  '13': { code: '13', name: 'Cédula de ciudadanía' },
  '21': { code: '21', name: 'Tarjeta de extranjería' },
  '22': { code: '22', name: 'Cédula de extranjería' },
  '31': { code: '31', name: 'NIT' },
  '41': { code: '41', name: 'Pasaporte' },
  '42': { code: '42', name: 'Documento de identificación extranjero' },
  '50': { code: '50', name: 'NIT de otro país' },
  '91': { code: '91', name: 'NUIP *' },
} as const;

export type TypeDocumentIdentificationCode = keyof typeof TYPE_DOCUMENT_IDENTIFICATIONS;
export type TypeDocumentIdentificationEntry = typeof TYPE_DOCUMENT_IDENTIFICATIONS[TypeDocumentIdentificationCode];
