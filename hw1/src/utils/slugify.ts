export const slugify = (text: string): string => {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD')                 // Normalize to decompose characters (for handling accents)
        .replace(/[\u0300-\u036f]/g, '')  // Remove diacritical marks
        .replace(/\s+/g, '-')             // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, '')         // Remove all non-word characters
        .replace(/\-\-+/g, '-')           // Replace multiple hyphens with single hyphen
        .replace(/^-+/, '')               // Trim hyphens from start of text
        .replace(/-+$/, '');              // Trim hyphens from end of text
};
