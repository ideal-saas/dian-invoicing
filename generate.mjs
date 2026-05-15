#!/usr/bin/env node
// Script to generate TypeScript catalog files from CSV data
// Run with: node generate.mjs

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const CSV_DIR = '/Users/rcermeno/ideal/dian-invoicer-ms/public/csv';
const OUT_DIR = '/var/folders/6p/4x2n40xs7zz6p8rj83b63s940000gq/T/opencode/dian-invoicing/src/catalogs';

mkdirSync(OUT_DIR, { recursive: true });

function readTsv(filename) {
  const content = readFileSync(join(CSV_DIR, filename), 'utf-8');
  return content.trim().split('\n').map(line => line.split('\t'));
}

function escape(s) {
  return String(s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function writeTs(filename, content) {
  writeFileSync(join(OUT_DIR, filename), content, 'utf-8');
  console.log(`Written: ${filename}`);
}

function makeEntries(rows, keyFn, valFn) {
  const seen = new Set();
  const entries = [];
  for (const row of rows) {
    const key = keyFn(row)?.trim();
    if (!key || key === 'undefined' || seen.has(key)) continue;
    seen.add(key);
    entries.push(valFn(row, key));
  }
  return entries;
}

// ── COUNTRIES ──────────────────────────────────────────
// cols: id, name, code
{
  const rows = readTsv('countries.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('countries.ts', `export const COUNTRIES = {\n${entries.join('\n')}\n} as const;\n\nexport type CountryCode = keyof typeof COUNTRIES;\nexport type CountryEntry = typeof COUNTRIES[CountryCode];\n`);
}

// ── CURRENCIES ─────────────────────────────────────────
// cols: id, name, code
{
  const rows = readTsv('type_currencies.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('currencies.ts', `export const CURRENCIES = {\n${entries.join('\n')}\n} as const;\n\nexport type CurrencyCode = keyof typeof CURRENCIES;\nexport type CurrencyEntry = typeof CURRENCIES[CurrencyCode];\n`);
}

// ── TYPE_DOCUMENT_IDENTIFICATIONS ──────────────────────
// cols: id, name, code
{
  const rows = readTsv('type_document_identifications.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('type-document-identifications.ts', `export const TYPE_DOCUMENT_IDENTIFICATIONS = {\n${entries.join('\n')}\n} as const;\n\nexport type TypeDocumentIdentificationCode = keyof typeof TYPE_DOCUMENT_IDENTIFICATIONS;\nexport type TypeDocumentIdentificationEntry = typeof TYPE_DOCUMENT_IDENTIFICATIONS[TypeDocumentIdentificationCode];\n`);
}

// ── TYPE_DOCUMENTS ─────────────────────────────────────
// cols: id, name, code, algorithm, type
{
  const rows = readTsv('type_documents.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}', algorithm: '${escape(r[3]?.trim())}', type: '${escape(r[4]?.trim())}' },`
  );
  writeTs('type-documents.ts', `export const TYPE_DOCUMENTS = {\n${entries.join('\n')}\n} as const;\n\nexport type TypeDocumentCode = keyof typeof TYPE_DOCUMENTS;\nexport type TypeDocumentEntry = typeof TYPE_DOCUMENTS[TypeDocumentCode];\n`);
}

// ── TYPE_ENVIRONMENTS ──────────────────────────────────
// cols: id, name, code
{
  const rows = readTsv('type_environments.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('type-environments.ts', `export const TYPE_ENVIRONMENTS = {\n${entries.join('\n')}\n} as const;\n\nexport type TypeEnvironmentCode = keyof typeof TYPE_ENVIRONMENTS;\nexport type TypeEnvironmentEntry = typeof TYPE_ENVIRONMENTS[TypeEnvironmentCode];\n`);
}

// ── TYPE_OPERATIONS ────────────────────────────────────
// cols: id, name, code
{
  const rows = readTsv('type_operations.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('type-operations.ts', `export const TYPE_OPERATIONS = {\n${entries.join('\n')}\n} as const;\n\nexport type TypeOperationCode = keyof typeof TYPE_OPERATIONS;\nexport type TypeOperationEntry = typeof TYPE_OPERATIONS[TypeOperationCode];\n`);
}

// ── TYPE_LIABILITIES ───────────────────────────────────
// cols: id, name, code  (only 3 columns!)
{
  const rows = readTsv('type_liabilities.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('type-liabilities.ts', `export const TYPE_LIABILITIES = {\n${entries.join('\n')}\n} as const;\n\nexport type TypeLiabilityCode = keyof typeof TYPE_LIABILITIES;\nexport type TypeLiabilityEntry = typeof TYPE_LIABILITIES[TypeLiabilityCode];\n`);
}

// ── TYPE_ORGANIZATIONS ─────────────────────────────────
// cols: id, name, code
{
  const rows = readTsv('type_organizations.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('type-organizations.ts', `export const TYPE_ORGANIZATIONS = {\n${entries.join('\n')}\n} as const;\n\nexport type TypeOrganizationCode = keyof typeof TYPE_ORGANIZATIONS;\nexport type TypeOrganizationEntry = typeof TYPE_ORGANIZATIONS[TypeOrganizationCode];\n`);
}

// ── TYPE_REGIMES ───────────────────────────────────────
// cols: id, name, code
{
  const rows = readTsv('type_regimes.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('type-regimes.ts', `export const TYPE_REGIMES = {\n${entries.join('\n')}\n} as const;\n\nexport type TypeRegimeCode = keyof typeof TYPE_REGIMES;\nexport type TypeRegimeEntry = typeof TYPE_REGIMES[TypeRegimeCode];\n`);
}

// ── PAYMENT_METHODS ────────────────────────────────────
// cols: id, name, code
{
  const rows = readTsv('payment_methods.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('payment-methods.ts', `export const PAYMENT_METHODS = {\n${entries.join('\n')}\n} as const;\n\nexport type PaymentMethodCode = keyof typeof PAYMENT_METHODS;\nexport type PaymentMethodEntry = typeof PAYMENT_METHODS[PaymentMethodCode];\n`);
}

// ── PAYMENT_FORMS ──────────────────────────────────────
// cols: id, name, code
{
  const rows = readTsv('payment_forms.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('payment-forms.ts', `export const PAYMENT_FORMS = {\n${entries.join('\n')}\n} as const;\n\nexport type PaymentFormCode = keyof typeof PAYMENT_FORMS;\nexport type PaymentFormEntry = typeof PAYMENT_FORMS[PaymentFormCode];\n`);
}

// ── TAXES ──────────────────────────────────────────────
// cols: id, name, description, code
{
  const rows = readTsv('taxes.csv');
  const entries = makeEntries(rows, r => r[3], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}', description: '${escape(r[2]?.trim())}' },`
  );
  writeTs('taxes.ts', `export const TAXES = {\n${entries.join('\n')}\n} as const;\n\nexport type TaxCode = keyof typeof TAXES;\nexport type TaxEntry = typeof TAXES[TaxCode];\n`);
}

// ── DEPARTMENTS ────────────────────────────────────────
// cols: id, country_id, name, code
{
  const rows = readTsv('departments.csv');
  const entries = makeEntries(rows, r => r[3], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[2]?.trim())}' },`
  );
  writeTs('departments.ts', `export const DEPARTMENTS = {\n${entries.join('\n')}\n} as const;\n\nexport type DepartmentCode = keyof typeof DEPARTMENTS;\nexport type DepartmentEntry = typeof DEPARTMENTS[DepartmentCode];\n`);
}

// ── MUNICIPALITIES ─────────────────────────────────────
// cols: id, department_id, name, code, codefacturador
{
  const rows = readTsv('municipalities.csv');
  const entries = makeEntries(rows, r => r[3], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[2]?.trim())}' },`
  );
  writeTs('municipalities.ts', `export const MUNICIPALITIES = {\n${entries.join('\n')}\n} as const;\n\nexport type MunicipalityCode = keyof typeof MUNICIPALITIES;\nexport type MunicipalityEntry = typeof MUNICIPALITIES[MunicipalityCode];\n`);
}

// ── UNIT_MEASURES ──────────────────────────────────────
// cols: id, name, code
{
  const rows = readTsv('unit_measures.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('unit-measures.ts', `export const UNIT_MEASURES = {\n${entries.join('\n')}\n} as const;\n\nexport type UnitMeasureCode = keyof typeof UNIT_MEASURES;\nexport type UnitMeasureEntry = typeof UNIT_MEASURES[UnitMeasureCode];\n`);
}

// ── TYPE_ITEM_IDENTIFICATIONS ──────────────────────────
// cols: id, name, code, additional
{
  const rows = readTsv('type_item_identifications.csv');
  const entries = makeEntries(rows, r => r[2], (r, k) =>
    `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('type-item-identifications.ts', `export const TYPE_ITEM_IDENTIFICATIONS = {\n${entries.join('\n')}\n} as const;\n\nexport type TypeItemIdentificationCode = keyof typeof TYPE_ITEM_IDENTIFICATIONS;\nexport type TypeItemIdentificationEntry = typeof TYPE_ITEM_IDENTIFICATIONS[TypeItemIdentificationCode];\n`);
}

// ── LANGUAGES ──────────────────────────────────────────
// cols: id, name, code  (has duplicates with upper/lower case - use lowercase only)
{
  const rows = readTsv('languages.csv');
  const entries = makeEntries(
    rows,
    r => r[2]?.trim().toLowerCase(),
    (r, k) => `  '${escape(k)}': { code: '${escape(k)}', name: '${escape(r[1]?.trim())}' },`
  );
  writeTs('languages.ts', `export const LANGUAGES = {\n${entries.join('\n')}\n} as const;\n\nexport type LanguageCode = keyof typeof LANGUAGES;\nexport type LanguageEntry = typeof LANGUAGES[LanguageCode];\n`);
}

console.log('\nAll catalogs generated!');
