const getPercents = require  ("./index");

  test ("getPercents 30% of 200 equals 60", () => {
    const result = getPercents(30, 200);
    expect(result).toBe(60);
  });
