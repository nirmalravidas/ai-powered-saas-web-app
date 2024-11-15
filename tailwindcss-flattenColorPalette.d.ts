// tailwindcss-flattenColorPalette.d.ts
declare module 'tailwindcss/lib/util/flattenColorPalette' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const flattenColorPalette: (theme: any) => Record<string, string>;
    export default flattenColorPalette;
  }
  