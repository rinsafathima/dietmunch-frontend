// import React from 'react';
// import  { ServerStyleSheet, StyleSheetManager } from '@node_modules/styled-components';
// import { Pie } from 'react-chartjs-2';

// const Dashboard = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const MealPlan = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const MealItem = styled.div`
//   // styles for your meal item
// `;

// const Chart = styled.div`
//   // styles for your chart
// `;

// export default function Home() {
//   const data = {
//     labels: ['Carbs', 'Protein', 'Fat'],
//     datasets: [
//       {
//         label: 'Macronutrients',
//         data: [56, 61, 40], // example data
//         backgroundColor: [
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(255, 99, 132, 0.2)',
//         ],
//         borderColor: [
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(255, 99, 132, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <Dashboard>
//       <Chart>
//         <Pie data={data} />
//       </Chart>
//       <MealPlan>
//         <MealItem>Beef 250g</MealItem>
//         <MealItem>Avocado 50g</MealItem>
//         <MealItem>Potatoes 200g</MealItem>
//         <MealItem>Blueberry 75g</MealItem>
//         <MealItem>Broccoli 80g</MealItem>
//         {/* Add more MealItems as needed */}
//       </MealPlan>
//       {/* Add more components for Calories, Protein, Carbs, Fat */}
//     </Dashboard>
//   );
// }
