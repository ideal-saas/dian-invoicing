export declare const TYPE_REGIMES: {
    readonly '48': {
        readonly code: "48";
        readonly name: "Responsable de IVA";
    };
    readonly '49': {
        readonly code: "49";
        readonly name: "No Responsable de IVA";
    };
};
export type TypeRegimeCode = keyof typeof TYPE_REGIMES;
export type TypeRegimeEntry = typeof TYPE_REGIMES[TypeRegimeCode];
//# sourceMappingURL=type-regimes.d.ts.map