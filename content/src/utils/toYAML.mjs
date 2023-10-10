import YAML from 'yaml';

export function toYAML(object) {
  return YAML.stringify(object);
}
