export interface MockData {
  id: number;
  date: number;
  content: string;
}

export const mockData: MockData[] = [
  { id: 1, date: new Date().getTime(), content: "나는야 1번이지롱" },
  { id: 2, date: new Date().getTime(), content: "나는야 2번이지롱" },
  { id: 3, date: new Date().getTime(), content: "나는야 3번이지롱" },
];
