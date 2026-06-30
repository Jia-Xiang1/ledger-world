export function todayInputValue(): string {
  return new Date().toISOString().slice(0, 10);
}

export function isSameDay(dateValue: string, target = new Date()): boolean {
  return dateValue === target.toISOString().slice(0, 10);
}

export function isSameMonth(dateValue: string, target = new Date()): boolean {
  return dateValue.slice(0, 7) === target.toISOString().slice(0, 7);
}

export function formatMoney(amount: number): string {
  return new Intl.NumberFormat('zh-TW', { style: 'currency', currency: 'TWD', maximumFractionDigits: 0 }).format(amount);
}
