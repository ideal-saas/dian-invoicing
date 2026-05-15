export const TAXES = {
  '01': { code: '01', name: 'IVA', description: 'Impuesto sobre la Ventas' },
  '02': { code: '02', name: 'IC', description: 'Impuesto al Consumo Departamental' },
  '03': { code: '03', name: 'ICA', description: 'Impuesto de Industria, Comercio y Aviso' },
  '04': { code: '04', name: 'INC', description: 'Impuesto Nacional al Consumo' },
  '05': { code: '05', name: 'ReteIVA', description: 'Retención sobre el IVA' },
  '06': { code: '06', name: 'ReteRenta', description: 'Retención sobre Renta' },
  '07': { code: '07', name: 'ReteICA', description: 'Retención sobre el ICA' },
  '20': { code: '20', name: 'FtoHorticultura', description: 'Cuota de Fomento Hortifrutícula' },
  '21': { code: '21', name: 'Timbre', description: 'Impuesto de Timbre' },
  '22': { code: '22', name: 'INC Bolsas', description: 'Impuesto al Consumo de Bolsa Plástica' },
  '23': { code: '23', name: 'INCarbono', description: 'Impuesto Nacional al Carbono' },
  '24': { code: '24', name: 'INCombustibles', description: 'Impuesto Nacional a los Combustibles' },
  '25': { code: '25', name: 'Sobretasa Combustibles', description: 'Sobretasa a los combustibles' },
  '26': { code: '26', name: 'Sordicom', description: 'Contribución minoristas (Combustibles)' },
  'ZZ': { code: 'ZZ', name: 'Nombre de la figura tributaria', description: 'Otros tributos, tasas, contribuciones, y similares' },
} as const;

export type TaxCode = keyof typeof TAXES;
export type TaxEntry = typeof TAXES[TaxCode];
