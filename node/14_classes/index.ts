interface IDatabase {
  get(id: string): string;
  set(id: string, value: string): void
}

interface IPersistable {
  save_to_string(): string;
  restore_from_string(s: string): void;
}

export class InMemoryDatabase implements IDatabase {
  // db: Record<string, string> = {}; // db value can be set externally
  // private db: Record<string, string> = {}; // db only accessible in this class
  protected db: Record<string, string> = {}; // db only accessible in this class + inherited classes
  get(id: string): string {
    return this.db[id]
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

export class PersistentMemory extends InMemoryDatabase implements IPersistable {
  save_to_string(): string {
    return JSON.stringify(this.db) // db is protected
  }

  restore_from_string(s: string): void {
    this.db = JSON.parse(s);
  }
}

// ---------------------------------------
// Generics in class
interface IDatabaseG<IdType, ValueType> {
  get(id: IdType): ValueType;
  set(id: IdType, value: ValueType): void
}

interface IPersistableG {
  save_to_string(): string;
  restore_from_string(s: string): void;
}

// Record<K,T> => K can only be number, string or symbol
type RecordDefaultKey = string | number | symbol

export class InMemoryDatabaseG<K extends RecordDefaultKey, T> implements IDatabaseG<K, T> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id]
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

export class PersistentMemoryG<K extends RecordDefaultKey, T> extends InMemoryDatabaseG<K, T> implements IPersistableG {
  save_to_string(): string {
    return JSON.stringify(this.db) // db is protected
  }

  restore_from_string(s: string): void {
    this.db = JSON.parse(s);
  }
}