export declare const TYPE_DOCUMENT_IDENTIFICATIONS: {
    readonly '11': {
        readonly code: "11";
        readonly name: "Registro civil";
    };
    readonly '12': {
        readonly code: "12";
        readonly name: "Tarjeta de identidad";
    };
    readonly '13': {
        readonly code: "13";
        readonly name: "Cédula de ciudadanía";
    };
    readonly '21': {
        readonly code: "21";
        readonly name: "Tarjeta de extranjería";
    };
    readonly '22': {
        readonly code: "22";
        readonly name: "Cédula de extranjería";
    };
    readonly '31': {
        readonly code: "31";
        readonly name: "NIT";
    };
    readonly '41': {
        readonly code: "41";
        readonly name: "Pasaporte";
    };
    readonly '42': {
        readonly code: "42";
        readonly name: "Documento de identificación extranjero";
    };
    readonly '50': {
        readonly code: "50";
        readonly name: "NIT de otro país";
    };
    readonly '91': {
        readonly code: "91";
        readonly name: "NUIP *";
    };
};
export type TypeDocumentIdentificationCode = keyof typeof TYPE_DOCUMENT_IDENTIFICATIONS;
export type TypeDocumentIdentificationEntry = typeof TYPE_DOCUMENT_IDENTIFICATIONS[TypeDocumentIdentificationCode];
//# sourceMappingURL=type-document-identifications.d.ts.map