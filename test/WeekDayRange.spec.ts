import { getDaysOfWeek } from "../src/components/topNav/WeekDayRange";

test("test1", () => {
  expect(getDaysOfWeek(new Date('January 24, 2023'))).toBe('01.23 ~ 01.29');
});

test("test2", () => {
  expect(getDaysOfWeek(new Date('January 30, 2023'))).toBe('01.30 ~ 02.05');
});

test("test3", () => {
  expect(getDaysOfWeek(new Date('January 1, 2022'))).toBe('12.27 ~ 01.02');
});

test("test4", () => {
  expect(getDaysOfWeek(new Date('March 1, 2024'))).toBe('02.26 ~ 03.03');
});