export const TYPE_ENVIRONMENTS = {
  '1': { code: '1', name: 'Producción' },
  '2': { code: '2', name: 'Pruebas' },
} as const;

export type TypeEnvironmentCode = keyof typeof TYPE_ENVIRONMENTS;
export type TypeEnvironmentEntry = typeof TYPE_ENVIRONMENTS[TypeEnvironmentCode];
