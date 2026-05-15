export const TYPE_ORGANIZATIONS = {
  '1': { code: '1', name: 'Persona Jurídica y asimiladas' },
  '2': { code: '2', name: 'Persona Natural y asimiladas' },
} as const;

export type TypeOrganizationCode = keyof typeof TYPE_ORGANIZATIONS;
export type TypeOrganizationEntry = typeof TYPE_ORGANIZATIONS[TypeOrganizationCode];
