import { writeFileSync } from "node:fs";
import { colors } from "../src/theme/colors";

function toKebabCase(str: string) {
  return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

let css = `@theme {\n`;

for (const [group, shades] of Object.entries(colors)) {
  for (const [shade, value] of Object.entries(shades as Record<string, string>)) {
    css += `  --color-${toKebabCase(group)}-${shade}: ${value};\n`;
  }
}

css += `}\n`;

writeFileSync("src/theme/tailwind-theme.css", css);
console.log("✅ Generated: src/theme/tailwind-theme.css");
