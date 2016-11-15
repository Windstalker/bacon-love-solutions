module.exports = (Bacon, fieldA, validationA, fieldB, validationB, fieldC, validationC) => {
  const optional = f => v => (!v || f(v));
  const fieldAValid = fieldA.map(validationA).toProperty(false);
  const fieldBValid = fieldB.map(optional(validationB)).toProperty(true);
  const fieldCValid = fieldC.map(validationC).toProperty(false);
  const formValid = fieldAValid.and(fieldBValid).and(fieldCValid);
  return { fieldAValid, fieldBValid, fieldCValid, formValid };
};
