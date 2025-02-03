export class Validate {
  static email(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
  }

  static password(password: string): boolean {
    return password.length >= 6;
  }
}
