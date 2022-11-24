import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const endpointInput: HTMLInputElement =
  document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');

fromEvent(fetchButton, 'click')
  .pipe(map(() => endpointInput.value))
  .subscribe((value) => console.log(value));
