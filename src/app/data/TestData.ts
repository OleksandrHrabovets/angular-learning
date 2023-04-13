import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Home'},
    {id: 2, title: 'Family'},
    {id: 3, title: 'Car'},
    {id: 4, title: 'Hobby'},
  ]

  static priorities: Priority[] = [
    {id: 1, title: 'High', color: 'red'},
    {id: 2, title: 'Medium', color: 'blue'},
    {id: 3, title: 'Low', color: 'green'},
  ]

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Buy products',
      status: true,
      category: TestData.categories[0],
      priority: TestData.priorities[0]
    },
    {
      id: 2,
      title: 'Buy clothes',
      status: false,
      category: TestData.categories[0],
      priority: TestData.priorities[1]
    },
    {
      id: 3,
      title: 'Buy services',
      status: false,
      category: TestData.categories[2],
      priority: TestData.priorities[2]

    },
    {
      id: 4,
      title: 'Journey',
      status: false,
      category: TestData.categories[3],
      priority: TestData.priorities[2],
      date: new Date('2023-07-01')
    },

    {
      id: 5,
      title: 'Buy gas',
      status: false,
      category: TestData.categories[2]
    }
  ]

}
