export interface CatalogEntry {
    code: string;
    name: string;
    [key: string]: unknown;
}
export declare function getCatalogName(code: string, catalog: Record<string, CatalogEntry>): string | undefined;
export declare function getCatalogEntry<T extends CatalogEntry>(code: string, catalog: Record<string, T>): T | undefined;
//# sourceMappingURL=types.d.ts.map