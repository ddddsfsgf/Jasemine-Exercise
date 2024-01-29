
it('Should calculate the monthly rate correctly!', function () {
  const values = {amount: 10000, years: 12, rate: 5.3}
  expect(calculateMonthlyPayment(values)).toEqual('94.00')
  });
  it("Should return a result with 2 decimal places!", function() {
    const values = {amount: 12345, years: 6, rate: 4.7}
    expect(calculateMonthlyPayment(values)).toEqual('197.10')
  });
  it("Should handle high interest rates!", function () {
    const values = {amount: 16745, years: 4, rate: 7.2}
    expect(calculateMonthlyPayment(values)).toEqual('402.54')
  })