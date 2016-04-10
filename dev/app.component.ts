import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
      <section class="pipe">
        <h2>The Date Pipe</h2>
        <p>Today is: {{today | date:'short'}}</p>
        <p>Today is: {{today | date:'longDate'}}</p>
        <p>Today is: {{today | date:'ymd'}}</p>
      </section>

      <section class="pipe">
        <h2>The Lowercase and UPPERCASE Pipe</h2>
        <input type="text" #inputCasePipes (keyup)="0">
        <div>Output Lowercase: XX</div>
        <div>Output Uppercase: XX</div>
      </section>

      <section class="pipe">
        <h2>The Slice Pipe</h2>
        <input type="text" #inputSlicePipe (keyup)="0"> - from <input type="text" #start (keyup)="0"> - to <input type="text" #end (keyup)="0">
         <div>Output: XX</div>
      </section>

      <section class="pipe">
        <h2>Number Pipe</h2>
        <input type="text" #inputNumberPipes (keyup)="0"> - currency: <input type="text" #currency (keyup)="0"><br>
        <div>Decimal: XX</div>
        <div>Currency: XX</div>
        <input type="checkbox" #currencyShort checked (change)="0">Short currency code
      </section>

      <section class="pipe">
        <h2>Chaining Multiple Pipe (e.g. uppercase and slice)</h2>
        <input type="text" #inputChainPipes (keyup)="0">
         <div>Output: XX</div>
      </section>

      <!--<section class="pipe">-->
        <!--<h2>Custom Pipe (reverse string)</h2>-->
        <!--<input type="text" #inputCustomPipe (keyup)="0"><br>-->
        <!--<div>Output: XX</div>-->
      <!--</section>-->

      <section class="pipe">
        <h2>Async (stateful) Pipes</h2>
        <div>Output (received after 2s): XX</div>
      </section>

    `,
})
export class AppComponent {
    today = new Date();
}
