export class DateFormatter {
  static yyyymmdd(dateIn: Date): string {
    const yyyy = dateIn.getFullYear();
    const mm = dateIn.getMonth() + 1; // getMonth() is zero-based
    const dd = dateIn.getDate();
    return String(10000 * yyyy + 100 * mm + dd); // Leading zeros for mm and dd
  }

  static yyyy(dateIn: Date): string {
    return dateIn.getFullYear().toString();
  }
}
