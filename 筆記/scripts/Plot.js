const data = [
    { year: 2019, count:  2 },
    { year: 2020, count:  3 },
    { year: 2021, count: 10 },
    { year: 2022, count: 14 },
    { year: 2023, count: 65 },
    { year: 2024, count: 14 },
  ];
  
  new Chart("ai_literacy_publications_per_year", {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: '每年發表篇數',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );