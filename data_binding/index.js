import Observable from "./Observable.js"
import Computed from "./Computed.js"
// const first = new Observable("Jeremy");
// const last = new Observable("Likness");
// const full = new Computed(() => `${first.value} ${last.value}`.trim(), [first, last]);
// first.value = "Doreen";
// console.log(full.value);

const bindValue = (input, observable) => {
  input.value = observable.value;
  observable.subscribe(() => {
    input.value = observable.value
    console.log(observable.value)
  });
  input.onkeyup = () => observable.value = input.value;
} 

// const first = new Observable("Jeremy");
// const second = new Observable("Likness");
// const $firstInp = document.getElementById('first');
// const $secondInp = document.getElementById('second');
// bindValue($firstInp, first);
// bindValue($secondInp, second);

// const full = new Computed(() => `${first.value} ${second.value}`.trim(), [first,second]);
// const $result = document.getElementById('result');
// bindValue($result, full);

const bindings = {};

const app = () => {
  bindings.first = new Observable("Jeremy");
  bindings.last = new Observable("");
  bindings.full = new Computed(() => 
    `${bindings.first.value} ${bindings.last.value}`.trim(),
    [bindings.first, bindings.last]);
  applyBindings();
};

setTimeout(app, 0);

const applyBindings = () => {
  document.querySelectorAll("[data-bind]").forEach(elem => {
    const obs = bindings[elem.getAttribute("data-bind")];
    bindValue(elem,obs);
  });
}