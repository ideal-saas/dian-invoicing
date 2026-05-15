export interface CatalogEntry {
  code: string;
  name: string;
  [key: string]: unknown;
}

export function getCatalogName(code: string, catalog: Record<string, CatalogEntry>): string | undefined {
  return catalog[code]?.name;
}

export function getCatalogEntry<T extends CatalogEntry>(code: string, catalog: Record<string, T>): T | undefined {
  return catalog[code];
}
