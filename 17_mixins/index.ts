// Revisit https://www.youtube.com/watch?v=Kn8TKLcd6d4

// Closure A - return func
const create_log_function = () => {
  const log_function = (str: string): void => {
    console.log('str ', str)
  }
  return log_function;
}

// Closure B - return class
export const create_log_class = () => {
  class LoggerClass {
    private stored_log: string = '';
    log(str: string): void {
      console.log('str - ', str);
      this.stored_log += str + '\n'
    }
    dump_log(): string {
      return this.stored_log
    }
  }
  return LoggerClass;
}

// Clousre C - clousure using some type T
export const create_simple_memory_database = <T>() => {
  class SimpleMemoryDatabase {
    private db: Record<string, T> = {};
    set(id: string, value: T) {
      this.db[id] = value;
    }
    get(id: string): T {
      return this.db[id]
    }
    get_db(): Record<string, T> {
      return this.db
    }
  }
  return SimpleMemoryDatabase
}

// Lets mix in some more methods in original function
// Step1: Create that new methods

// TRY - 1 - usual generic T, V do not work, if arg is an class Type
const add_more_methods1 = <B>(BaseClass: B) => {
  // # error below
  /*
  Type 'B' is not a constructor function type.
  Did you mean for 'B' to be constrained to type 'new (...args: any[]) => unknown'?
  */
  // class ExtendedClass extends BaseClass {} 
}

// TRY - 2
// Declare a type for class
type ClassType = new (...args: any[]) => any;
const add_more_methods2 = <B extends ClassType>(BaseClass: B) => {
  class ExtendedClass extends BaseClass {
    dump() {
      // this.get_object may or maynot exists on BaseClass
      return this.get_object()
    }
  }
  return ExtendedClass
}

// TRY - 3 - usual generic T, V do not work, if arg is an class Type
// Declare a type for class
type ClassTypeWithMethods<T> = new (...args: any[]) => T;
const add_more_methods3 = <
  B extends ClassTypeWithMethods<{
    get_db(): object
  }>
>
  (BaseClass: B) => {
  // Logic starts
  class ExtendedClass extends BaseClass {
    dump() {
      // this.get_object may or maynot exists on BaseClass
      return this.get_db()
    }
  }
  return ExtendedClass
}

const SDB = create_simple_memory_database<number>()
const XX = add_more_methods3(SDB)
const DDB1 = new XX()
DDB1.set('a', 12)
DDB1.dump()