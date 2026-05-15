export declare const PAYMENT_FORMS: {
    readonly '1': {
        readonly code: "1";
        readonly name: "Contado";
    };
    readonly '2': {
        readonly code: "2";
        readonly name: "Crédito";
    };
};
export type PaymentFormCode = keyof typeof PAYMENT_FORMS;
export type PaymentFormEntry = typeof PAYMENT_FORMS[PaymentFormCode];
//# sourceMappingURL=payment-forms.d.ts.map