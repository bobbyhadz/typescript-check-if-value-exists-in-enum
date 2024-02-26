export {};

// Example 1 - Check if a Value exists in an Enum in TypeScript

// ✅ For String Enums
enum Sizes {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}

const keys = Object.keys(Sizes);
console.log(keys); // 👉️ ['Small', 'Medium', 'Large']

const values = Object.values(Sizes);
console.log(values); // 👉️ ['S', 'M', 'L']

if (values.includes('S' as unknown as Sizes)) {
  console.log('✅ Value exists in enum');
}

// ---------------------------------------------------

// // EXAMPLE 2 - Check if a Value exists in a Numeric Enum

// // ✅ For Numeric Enums
// enum SizesNumeric {
//   Small,
//   Medium,
//   Large,
// }

// if (2 in SizesNumeric) {
//   console.log(SizesNumeric[2]); // 👉️ "Large"
// }
