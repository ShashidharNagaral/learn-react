export const codes = [
  `setNumber(number + 1);
setNumber((n) => { 
    return n + 5;
});`,
  `setNumber((n) => {
        return n + 5;
    });
setNumber(number + 1)`,
  `setNumber((n) => {
    return n + 1;
});
setNumber((n) => {
    return n + 1;
});
setNumber((n) => {
    return n + 1;
});`,
];
