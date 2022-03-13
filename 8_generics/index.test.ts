import { log } from '../log';
import { useState, ranker, IGetRankFunction } from '.'

interface User {
  first: string,
  last: string
}

const user1: User = {
  first: 'Jassi',
  last: 'Sing'
}

const user2: User = {
  first: 'Jassi',
  last: 'Singh'
}

const test = () => {
  const [a, b] = useState<User | null>(null)
  console.log(`get val`, a())
  b(user1)
  console.log(`get val`, a())
  b(user2)
  console.log(`get val`, a())
}

// --------------------------------------------

interface Customer {
  name: string;
  age: number;
  city: string
}

interface Employee {
  name: string;
  age: number;
  city: string;
  role: string;
}

const list1: Customer[] = [
  {
    name: 'Jassi',
    age: 32,
    city: 'Delhi'
  },
  {
    name: 'Happy',
    age: 28,
    city: 'Jalandhar'
  }
]

const list2: Employee[] = [
  {
    name: 'Jassi',
    age: 32,
    city: 'Delhi',
    role:'Backend'
  },
  {
    name: 'Happy',
    age: 28,
    city: 'Jalandhar',
    role:'Tester'
  }
]


const get_customer_rank: IGetRankFunction<Customer> = (v: Customer) => {
  return v.age
}

const get_employee_rank: IGetRankFunction<Employee> = (v: Employee) => {
  return v.age
}

const test2 = () => {
  log('ranker', ranker<Customer>(list1, get_customer_rank))
  log('ranker', ranker<Employee>(list2, get_employee_rank))
}

export default test2;