export declare const TYPE_OPERATIONS: {
    readonly '33': {
        readonly code: "33";
        readonly name: "Nota Débito para facturación electrónica V1 (Decreto 2242)";
    };
    readonly '32': {
        readonly code: "32";
        readonly name: "Nota Débito sin referencia a facturas";
    };
    readonly '30': {
        readonly code: "30";
        readonly name: "Nota Débito que referencia una factura electrónica";
    };
    readonly '23': {
        readonly code: "23";
        readonly name: "Nota Crédito para facturación electrónica V1 (Decreto 2242)";
    };
    readonly '22': {
        readonly code: "22";
        readonly name: "Nota Crédito sin referencia a facturas";
    };
    readonly '09': {
        readonly code: "09";
        readonly name: "AIU";
    };
    readonly '10': {
        readonly code: "10";
        readonly name: "Estandar";
    };
    readonly '11': {
        readonly code: "11";
        readonly name: "Mandatos bienes";
    };
    readonly '20': {
        readonly code: "20";
        readonly name: "Nota Crédito que referencia una factura electrónica";
    };
    readonly '01': {
        readonly code: "01";
        readonly name: "Combustibles";
    };
    readonly '02': {
        readonly code: "02";
        readonly name: "Emisor es Autorretenedor";
    };
    readonly '03': {
        readonly code: "03";
        readonly name: "Excluidos y Exentos";
    };
    readonly '04': {
        readonly code: "04";
        readonly name: "Exportación";
    };
    readonly '05': {
        readonly code: "05";
        readonly name: "Genérica";
    };
    readonly '06': {
        readonly code: "06";
        readonly name: "Genérica con pago anticipado";
    };
    readonly '07': {
        readonly code: "07";
        readonly name: "Genérica con periodo de facturacion";
    };
    readonly '08': {
        readonly code: "08";
        readonly name: "Consorcio";
    };
    readonly '12': {
        readonly code: "12";
        readonly name: "Mandatos Servicios";
    };
};
export type TypeOperationCode = keyof typeof TYPE_OPERATIONS;
export type TypeOperationEntry = typeof TYPE_OPERATIONS[TypeOperationCode];
//# sourceMappingURL=type-operations.d.ts.map