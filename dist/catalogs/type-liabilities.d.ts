export declare const TYPE_LIABILITIES: {
    readonly 'O-13': {
        readonly code: "O-13";
        readonly name: "Gran contribuyente";
    };
    readonly 'O-15': {
        readonly code: "O-15";
        readonly name: "Autorretenedor";
    };
    readonly 'O-23': {
        readonly code: "O-23";
        readonly name: "Agente de retención en el impuesto sobre las ventas";
    };
    readonly 'O-47': {
        readonly code: "O-47";
        readonly name: "Régimen Simple de Tributación – SIMPLE";
    };
    readonly 'R-99-PN': {
        readonly code: "R-99-PN";
        readonly name: "No responsable";
    };
};
export type TypeLiabilityCode = keyof typeof TYPE_LIABILITIES;
export type TypeLiabilityEntry = typeof TYPE_LIABILITIES[TypeLiabilityCode];
//# sourceMappingURL=type-liabilities.d.ts.map