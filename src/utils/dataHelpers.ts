import { hasValue } from '../components/inputs/inputHelpers';

export const removeEmptyFields = (data: any): any => {
  if (hasValue(data)) {
    const cleanData: any = {};
    for (const key in data) {
      if (data.hasOwnProperty(key) && hasValue(data[key])) {
        cleanData[key] = data[key];
      }
    }
    return cleanData;
  }
  return {} as any;
};

export const cleanComboValue = (value: any): any => {
  if (Array.isArray(value)) {
    return value.map(cleanComboValue);
  } if (value && typeof value === 'object') {
    return value.id;
  } if (typeof value === 'string' || typeof value === 'number') {
    return value;
  }
  return null;
};
