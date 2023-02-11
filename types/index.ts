export type TailwindWidth = "s" | "md" | "lg" | "xl" | "full" | "sm" | "xs";
// TODO: need to add another type variable for font size

export type Mode = "copywriter" | "developer";

export type ButtonColours =
  | "etonBlue"
  | "goldCrayola"
  | "cinnabar"
  | "independence"
  | "pinkLace";

/**
 * Typescript wizardry allowing us to produce a tuple that must contain a string
 * for every key in an interface. Accidentally omitting some keys or including
 * extras will cause a type error.
 *
 * Usage:
 * ```
 * interface Person {
 *     name: string;
 *     age: number;
 * }
 *
 * const fields = arrayOfAll<keyof Person>()("name", "age");
 * ```
 *
 * Source: https://stackoverflow.com/a/73457231
 */
export const arrayOfAll =
  <T>() =>
  <U extends T[]>(
    ...array: U & ([T] extends [U[number]] ? unknown : Invalid<T>[])
  ) =>
    array;
type Invalid<T> = ["Needs to be all of", T];
