import { OrganizationData } from "@/types";

export const mock: OrganizationData[] = [
  {
    name: "Google",
    id: "5d366f1a-6161-4144-85e0-15f67fd74211",
    departments: [
      {
        id: "d366f1a-6161-4144-85e0",
        name: "R&D",
        employees: [
          {
            name: "Idan",
            id: "#id789010"
          },
          {
            name: "Mor",
            id: "#id919192"
          }
        ]
      },
      {
        id: "d366f1a-6161-4144-8517",
        name: "UX",
        employees: [
          {
            name: "Moti",
            id: "#id789076"
          },
          {
            name: "LOLO",
            id: "#id919184"
          }
        ]
      }
    ]
  },
  {
    name: "Microsoft",
    id: "4814b199-dfd8-4e41-aa12-30a4cf542bf6",
    departments: [
      {
        id: "d366f1a-6161-4144-8123",
        name: "R&D",
        employees: [
          {
            name: "Linor",
            id: "#id789098"
          },
          {
            name: "Mor",
            id: "#id919192"
          }
        ]
      },
      {
        id: "d366f1a-6161-4144-887E",
        name: "UX",
        employees: [
          {
            name: "Moti",
            id: "#id789023"
          },
          {
            name: "LOLO",
            id: "#id919124"
          }
        ]
      }
    ]
  }
];

// export const mockData: MockData = {
//   organizations: [
//     {
//       name: "Google",
//       id: "5d366f1a-6161-4144-85e0-15f67fd74211"
//     },
//     {
//       name: "Microsoft",
//       id: "4814b199-dfd8-4e41-aa12-30a4cf542bf6"
//     }
//   ],
//   orgDepartments: {
//     "5d366f1a-6161-4144-85e0-15f67fd74211": {
//       orginizationId: "5d366f1a-6161-4144-85e0-15f67fd74211",
//       departments: [
//         {
//           id: "d366f1a-6161-4144-85e0",
//           name: "R&D",
//           employees: [
//             {
//               name: "Idan",
//               id: "#id789010"
//             },
//             {
//               name: "Mor",
//               id: "#id919192"
//             }
//           ]
//         },
//         {
//           id: "d366f1a-6161-4144-8517",
//           name: "UX",
//           employees: [
//             {
//               name: "Moti",
//               id: "#id789076"
//             },
//             {
//               name: "LOLO",
//               id: "#id919184"
//             }
//           ]
//         }
//       ]
//     },
//     ["4814b199-dfd8-4e41-aa12-30a4cf542bf6"]: {
//       orginizationId: "4814b199-dfd8-4e41-aa12-30a4cf542bf6",
//       departments: [
//         {
//           id: "d366f1a-6161-4144-8123",
//           name: "R&D",
//           employees: [
//             {
//               name: "Linor",
//               id: "#id789098"
//             },
//             {
//               name: "Mor",
//               id: "#id919192"
//             }
//           ]
//         },
//         {
//           id: "d366f1a-6161-4144-887E",
//           name: "UX",
//           employees: [
//             {
//               name: "Moti",
//               id: "#id789023"
//             },
//             {
//               name: "LOLO",
//               id: "#id919124"
//             }
//           ]
//         }
//       ]
//     }
//   }
// };
