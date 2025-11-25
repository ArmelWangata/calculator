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

const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
};
