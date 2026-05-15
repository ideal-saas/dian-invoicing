export declare const TAXES: {
    readonly '01': {
        readonly code: "01";
        readonly name: "IVA";
        readonly description: "Impuesto sobre la Ventas";
    };
    readonly '02': {
        readonly code: "02";
        readonly name: "IC";
        readonly description: "Impuesto al Consumo Departamental";
    };
    readonly '03': {
        readonly code: "03";
        readonly name: "ICA";
        readonly description: "Impuesto de Industria, Comercio y Aviso";
    };
    readonly '04': {
        readonly code: "04";
        readonly name: "INC";
        readonly description: "Impuesto Nacional al Consumo";
    };
    readonly '05': {
        readonly code: "05";
        readonly name: "ReteIVA";
        readonly description: "Retención sobre el IVA";
    };
    readonly '06': {
        readonly code: "06";
        readonly name: "ReteRenta";
        readonly description: "Retención sobre Renta";
    };
    readonly '07': {
        readonly code: "07";
        readonly name: "ReteICA";
        readonly description: "Retención sobre el ICA";
    };
    readonly '20': {
        readonly code: "20";
        readonly name: "FtoHorticultura";
        readonly description: "Cuota de Fomento Hortifrutícula";
    };
    readonly '21': {
        readonly code: "21";
        readonly name: "Timbre";
        readonly description: "Impuesto de Timbre";
    };
    readonly '22': {
        readonly code: "22";
        readonly name: "INC Bolsas";
        readonly description: "Impuesto al Consumo de Bolsa Plástica";
    };
    readonly '23': {
        readonly code: "23";
        readonly name: "INCarbono";
        readonly description: "Impuesto Nacional al Carbono";
    };
    readonly '24': {
        readonly code: "24";
        readonly name: "INCombustibles";
        readonly description: "Impuesto Nacional a los Combustibles";
    };
    readonly '25': {
        readonly code: "25";
        readonly name: "Sobretasa Combustibles";
        readonly description: "Sobretasa a los combustibles";
    };
    readonly '26': {
        readonly code: "26";
        readonly name: "Sordicom";
        readonly description: "Contribución minoristas (Combustibles)";
    };
    readonly ZZ: {
        readonly code: "ZZ";
        readonly name: "Nombre de la figura tributaria";
        readonly description: "Otros tributos, tasas, contribuciones, y similares";
    };
};
export type TaxCode = keyof typeof TAXES;
export type TaxEntry = typeof TAXES[TaxCode];
//# sourceMappingURL=taxes.d.ts.map