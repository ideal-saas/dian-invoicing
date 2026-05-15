export declare const TYPE_DOCUMENTS: {
    readonly '01': {
        readonly code: "01";
        readonly name: "Factura de Venta Nacional";
        readonly algorithm: "CUFE-SHA384";
        readonly type: "fv";
    };
    readonly '02': {
        readonly code: "02";
        readonly name: "Factura de Exportación";
        readonly algorithm: "CUFE-SHA384";
        readonly type: "fv";
    };
    readonly '03': {
        readonly code: "03";
        readonly name: "Factura de Contingencia";
        readonly algorithm: "CUDE-SHA384";
        readonly type: "fv";
    };
    readonly '91': {
        readonly code: "91";
        readonly name: "Nota Crédito";
        readonly algorithm: "CUDE-SHA384";
        readonly type: "nc";
    };
    readonly '92': {
        readonly code: "92";
        readonly name: "Nota Débito";
        readonly algorithm: "CUDE-SHA384";
        readonly type: "nd";
    };
    readonly '89': {
        readonly code: "89";
        readonly name: "AttachedDocument";
        readonly algorithm: "";
        readonly type: "at";
    };
    readonly '88': {
        readonly code: "88";
        readonly name: "ApplicationResponse";
        readonly algorithm: "CUDE-SHA384";
        readonly type: "ar";
    };
    readonly '1': {
        readonly code: "1";
        readonly name: "Nomina Individual";
        readonly algorithm: "CUNE-SHA384";
        readonly type: "ni";
    };
    readonly '2': {
        readonly code: "2";
        readonly name: "Nomina Individual de Ajuste";
        readonly algorithm: "CUNE-SHA384";
        readonly type: "na";
    };
};
export type TypeDocumentCode = keyof typeof TYPE_DOCUMENTS;
export type TypeDocumentEntry = typeof TYPE_DOCUMENTS[TypeDocumentCode];
//# sourceMappingURL=type-documents.d.ts.map