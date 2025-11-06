const fs = require('fs');

const glosario = JSON.parse(fs.readFileSync('glosario.json', 'utf8'));

let contenido = '# Glosario de Términos\n\n';
for (const [termino, definicion] of Object.entries(glosario)) {
  contenido += `## ${termino}\n\n${definicion}\n\n`;
}

fs.writeFileSync('glosario.md', contenido);
console.log('✅ Glosario generado con éxito.');