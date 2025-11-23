let display = document.getElementById("display");

const appendValue = (val) => {
  display.value += val;
};

const clearDisplay = () => {
  display.value = "";
};

const deleteLast = () => {
  display.value = display.value.slice(0, -1);
};

const appendBrackets = () => {
  const start = display.selectionStart;
  const end = display.selectionEnd;

  const text = display.value;

  display.value = text.slice(0, start) + "()" + text.slice(end);

  display.setSelectionRange(start + 1, start + 1);

  display.focus();
};

const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
};
