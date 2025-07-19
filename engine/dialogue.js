let activeDialogue = null;
let dialogueIndex = 0;
let showChoices = false;
let selectedChoice = 0;

function startDialogue(npc) {
  activeDialogue = npc.dialogue;
  dialogueIndex = 0;
  showChoices = false;
  selectedChoice = 0;
}

function updateDialogue() {
  if (!activeDialogue) return;
  const current = activeDialogue[dialogueIndex];
  if (typeof current === 'string') {
    dialogueIndex++;
  } else if (typeof current === 'object') {
    showChoices = true;
  } else {
    endDialogue();
  }
}

function chooseOption(choiceIndex) {
  const choice = activeDialogue[dialogueIndex];
  if (choice && choice.choices && choice.choices[choiceIndex]) {
    const result = choice.choices[choiceIndex];
    if (result.next !== undefined) {
      dialogueIndex = result.next;
      showChoices = false;
    } else {
      endDialogue();
    }
    if (result.action) result.action();
  }
}

function renderDialogue(ctx) {
  if (!activeDialogue) return;
  ctx.fillStyle = "rgba(0,0,0,0.7)";
  ctx.fillRect(50, 500, 700, 90);
  const current = activeDialogue[dialogueIndex];
  ctx.fillStyle = "white";
  ctx.font = "18px Arial";

  if (typeof current === 'string') {
    ctx.fillText(current, 60, 540);
    ctx.fillStyle = "gray";
    ctx.fillText("Tap to skip ⏩", 640, 580);
  } else if (typeof current === 'object' && showChoices) {
    ctx.fillText(current.prompt, 60, 520);
    current.choices.forEach((choice, i) => {
      ctx.fillStyle = i === selectedChoice ? "yellow" : "white";
      ctx.fillText(`> ${choice.text}`, 80, 550 + i * 20);
    });
  }
}

function endDialogue() {
  activeDialogue = null;
  dialogueIndex = 0;
  showChoices = false;
}
