import Dexie, { Table } from 'dexie';

export interface Note {
   id: string
   title: string;
   text: string;
   date: string
}

export class MySubClassedDexie extends Dexie {
   notes!: Table<Note>

   constructor() {
      super('myDatabase');
      this.version(1).stores({
         notes: 'id, title, text, date'
      });
   }
}

export const db = new MySubClassedDexie();