const addEvent = (submitEvent) => {
  console.log(submitEvent);
  submitEvent.preventDefault();
  const form = submitEvent.target;
  const input = form.elements;
  const toDolist = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i].tagName !== "BUTTON") {
      const inputValue = input[i].value;
      const inputId = input[i].id;
      toDolist[inputId] = inputValue;
    }
  }
  console.log(toDolist);

  const conferma = confirm("add");
  if (conferma) {
    const container = document.querySelector(".eventi");
    container.innerHTML += `<li> <input type="checkbox" >${toDolist.activity}</input> | ${toDolist.date} </li>`;
  }
};
