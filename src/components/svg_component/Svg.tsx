import { readFileSync } from 'fs';
import { parse } from 'node-html-parser';

export default function Svg({icon, ...attribute}: {icon: string, attribute: any}) {
  const raw = readFileSync(`src/assets/images/${icon}.svg`, 'utf8');

  const svgRaw = parse(raw);
  const svgElement = svgRaw.querySelector('svg');
  if (!svgElement) {
    throw new Error('Specified SVG file does not contain SVG element.');
  }
  const innerHTML = svgElement.innerHTML;
  const originalAttributes = svgElement.attributes;
  const mergedAttribute = {...attribute, ...originalAttributes};

  return (
    <svg {...mergedAttribute} dangerouslySetInnerHTML={{__html: innerHTML}}></svg>
  );
}
