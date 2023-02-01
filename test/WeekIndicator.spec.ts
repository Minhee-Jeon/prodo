import { indicateWeek } from "../src/components/topNav/WeekIndicator";

test("test1", () => {
  expect(indicateWeek(new Date('January 24, 2023'))).toBe('2023년 1월 넷째주');
});

test("test2", () => {
  expect(indicateWeek(new Date('January 31, 2023'))).toBe('2023년 1월 다섯째주');
});

test("test3", () => {
  expect(indicateWeek(new Date('February 3, 2023'))).toBe('2023년 2월 첫째주');
});