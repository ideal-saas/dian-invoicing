export declare const TYPE_ORGANIZATIONS: {
    readonly '1': {
        readonly code: "1";
        readonly name: "Persona Jurídica y asimiladas";
    };
    readonly '2': {
        readonly code: "2";
        readonly name: "Persona Natural y asimiladas";
    };
};
export type TypeOrganizationCode = keyof typeof TYPE_ORGANIZATIONS;
export type TypeOrganizationEntry = typeof TYPE_ORGANIZATIONS[TypeOrganizationCode];
//# sourceMappingURL=type-organizations.d.ts.map