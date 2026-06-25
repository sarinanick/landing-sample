export function formatPersianNumber(value: number | string) {
  return Number(value).toLocaleString("fa-IR");
}

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
