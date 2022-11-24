import { fromEvent } from 'rxjs';

const endpointInput: HTMLInputElement =
  document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');

fromEvent(fetchButton, 'input')
  .pipe()
  .subscribe((value) => console.log(value));
