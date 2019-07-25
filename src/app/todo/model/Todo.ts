export class Todo {
  id: number;
  description: string;
  done: boolean;
  _links: any;

  getId(): number {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(desc: string) {
    this.description = desc;
  }

  getDone(): boolean {
    return this.done;
  }

  setDone(d: boolean) {
    this.done = d;
  }

}
