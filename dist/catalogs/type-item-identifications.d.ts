export declare const TYPE_ITEM_IDENTIFICATIONS: {
    readonly '001': {
        readonly code: "001";
        readonly name: "UNSPSC";
    };
    readonly '010': {
        readonly code: "010";
        readonly name: "GTIN";
    };
    readonly '020': {
        readonly code: "020";
        readonly name: "Partida Arancelarias";
    };
    readonly '999': {
        readonly code: "999";
        readonly name: "Estándar de adopción del contribuyente";
    };
};
export type TypeItemIdentificationCode = keyof typeof TYPE_ITEM_IDENTIFICATIONS;
export type TypeItemIdentificationEntry = typeof TYPE_ITEM_IDENTIFICATIONS[TypeItemIdentificationCode];
//# sourceMappingURL=type-item-identifications.d.ts.map