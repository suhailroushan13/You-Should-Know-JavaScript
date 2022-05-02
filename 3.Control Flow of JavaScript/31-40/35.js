function box(start, end, input) {
  let result = input >= start && input <= end ? "Its in Range" : "Not In Range";
  console.log(result);
}
box(1, 2, 3);
