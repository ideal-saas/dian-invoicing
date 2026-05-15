export declare const TYPE_ENVIRONMENTS: {
    readonly '1': {
        readonly code: "1";
        readonly name: "Producción";
    };
    readonly '2': {
        readonly code: "2";
        readonly name: "Pruebas";
    };
};
export type TypeEnvironmentCode = keyof typeof TYPE_ENVIRONMENTS;
export type TypeEnvironmentEntry = typeof TYPE_ENVIRONMENTS[TypeEnvironmentCode];
//# sourceMappingURL=type-environments.d.ts.map