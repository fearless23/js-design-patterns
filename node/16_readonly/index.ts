class OldSchoolDoggy {
  public name: string = ''
  public age: number = 0
  constructor(name: string, age: number) {

  }
}

class NewSchoolDoggy {
  constructor(public readonly name: string, public readonly age: number) { }
}

interface IDatabase {
  url: string;
  username: string;
  password: string;
}

class Database {
  constructor(public readonly db: IDatabase) { }
}

export class Singleton {
  // Private variable names, not directly accesible from outside
  private ctx: Database = {
    db: {
      url:'',
      username: '',
      password: ''
    }
  }
  static instance: Singleton = new Singleton();

  // having private constructor -> disallows using new Singleton()
  private constructor() { }

  static addUrl(url:string): void {
    Singleton.instance.ctx.db.url = url;
  }
}