export class Console {
  private id: number;
  private name: String;
  private model: String;
  private version: String;
  private developer: String;
  private relase_date: String;
  private finished: boolean;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || Math.floor(Math.random() * 1000);
    this.name = (obj && obj.name) || '';
    this.model = (obj && obj.model) || '';
    this.version = (obj && obj.version) || '';
    this.developer = (obj && obj.developer) || '';
    this.relase_date = (obj && obj.relase_date) || '';
    this.finished = (obj && obj.finished) || false;
  }

  getId(): number {
    return this.id;
  }
  getName(): String {
    return this.name;
  }
  isFinished(): boolean {
    return this.finished;
  }
  toggleStatus(): void {
    this.finished = !this.finished;
  }
  getVersion(): String {
    return this.version;
  }

  getDeveloper(): String {
    return this.developer;
  }

  getModel(): String {
    return this.model;
  }

  getRelase_date(): String {
    return this.relase_date;
  }
}
