export function getCurrentDate(sep = '.') {
  const d = new Date();
  const year = d.getFullYear();
  const month = setTenFormat(d.getMonth() + 1);
  const date = setTenFormat(d.getDate());
  return `${year}${sep}${month}${sep}${date}`;
}

type TenNumber = number | string;
function setTenFormat(num: TenNumber): string {
  if (typeof num === 'number') {
    return num < 10 ? '0' + num : num + '';
  } else {
    return +num < 10 ? '0' + num : num;
  }
}
