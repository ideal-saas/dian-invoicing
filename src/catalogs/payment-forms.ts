export const PAYMENT_FORMS = {
  '1': { code: '1', name: 'Contado' },
  '2': { code: '2', name: 'Crédito' },
} as const;

export type PaymentFormCode = keyof typeof PAYMENT_FORMS;
export type PaymentFormEntry = typeof PAYMENT_FORMS[PaymentFormCode];
