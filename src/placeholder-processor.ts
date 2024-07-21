export const processPlaceholders = (
  content: string,
  placeholders: Record<string, string>
): string => {
  for (const [key, value] of Object.entries(placeholders)) {
    content = content.replace(new RegExp(`{{${key}}}`), value);
  }

  return content;
};
