// interfaces.ts
export interface Item {
  id: number;
  name: string;
  description: string;
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
  items: Item[];
}
