// Tiny inline formatter for data strings: escapes HTML and turns [text](url) into links.
// Lets content files contain links without writing HTML.

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inline(text: string): string {
  return escape(text).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label: string, href: string) => {
    const external = /^https?:/.test(href);
    return `<a href="${href}"${external ? ' target="_blank" rel="noopener"' : ''}>${label}</a>`;
  });
}
