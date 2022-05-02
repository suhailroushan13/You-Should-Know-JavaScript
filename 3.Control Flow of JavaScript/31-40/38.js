function box(year) {
  let result =
    (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
      ? "Its a Leap Year"
      : "Not a Leap Year";
  console.log(result);
}
box(2012);

// Year Must be Divisible By 4 and 400 and it should not be divisible by 100

// 4 and 400 ok but not on 100