import fs from 'fs';

// Функция для загрузки и парсинга JSON-файла
function parseJsonFile(filepath) {
  const data = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(data);
}

// Основная функция сравнения
const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parseJsonFile(filepath1);
  const obj2 = parseJsonFile(filepath2);

  const allKeys = Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)])).sort();
  
  const result = allKeys.map((key) => {
    if (!obj2.hasOwnProperty(key)) {
      return `  - ${key}: ${obj1[key]}`;
    }
    if (!obj1.hasOwnProperty(key)) {
      return `  + ${key}: ${obj2[key]}`;
    }
    if (obj1[key] !== obj2[key]) {
      return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
    }
    return `    ${key}: ${obj1[key]}`;
  });

  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
