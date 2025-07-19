const characters = [
  {
    name: "Goat NPC",
    x: 8, y: 10,
    color: "gray",
    task: "waterFlowers",
    dialogue: [
      "Baaa... I lost my watering can.",
      {
        prompt: "Can you water my flowers?",
        choices: [
          { text: "Yes!", next: 2, action: () => completeTask("waterFlowers") },
          { text: "Nope", next: 3 }
        ]
      },
      "Thank you, angel!",
      "Oh... okay."
    ]
  }
];
