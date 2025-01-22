import { Observable } from '@nativescript/core'

if (!global.performance) {
  //@ts-ignore
  global.performance = {
    now() {
      if (global.android) {
        return java.lang.System.nanoTime() / 1000000;
      } else {
        return CACurrentMediaTime();
      }
    }
  };
}

declare const org: {
  nativescript: {
    Benchmarks: {
      Field: string,
      voidMethod: () => void,
      returnString: () => string,
      returnInt: () => number,
      passString: (arg: string) => void,
      returnBoolean: () => boolean,
      returnDouble: () => number,
      passInt: (arg: number) => void,
      passDouble: (arg: number) => void,
      passBoolean: (arg: boolean) => void,
      returnIntArray: () => number[],
      passIntArray: (arg: number[]) => void,
      returnStringArray: () => string[],
      passStringArray: (arg: string[]) => void,
      returnDoubleArray: () => number[],
      passDoubleArray: (arg: number[]) => void,
      returnBooleanArray: () => boolean[],
      passBooleanArray: (arg: boolean[]) => void,
      returnDateObject: () => java.util.Date,
      passDateObject: (date: java.util.Date) => void
    }
  }
}

let score = 0;
function measure(name: string, action: () => void): string {
  const start = performance.now();

  action();

  const stop = performance.now();

  score += stop - start;
  return `${(stop - start).toFixed(1)} ms (${name})`;
}


export class HelloWorldModel extends Observable {
  private _counter: number
  private _message: string

  constructor() {
    super()
  }

  get engine(): string {
    //@ts-ignore
    return __engine  || "V8-Current";
  }

  get message(): string {
    return this._message
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value
      this.notifyPropertyChange('message', value)
    }
  }

  onTap() {
    this.startBenchmark()
  }

  private startBenchmark() {
    score = 0;
    let message = 'Benchmarks:\n';

    message += measure('Get Field', () => {
      let f;
      for (var i = 0; i < 1e6; i++) {
        f = org.nativescript.Benchmarks.Field;
      }
    }) + '\n';

    message += measure('Void Method', () => {
      for (var i = 0; i < 1e6; i++) {
        org.nativescript.Benchmarks.voidMethod();
      }
    }) + '\n';
    
    message += measure('Return a String', () => {
      let res;
      for (var i = 0; i < 1e6; i++) {
        res = org.nativescript.Benchmarks.returnString();
      }
    }) + '\n';

    message += measure('Return an Int', () => {
      let res;
      for (var i = 0; i < 1e6; i++) {
        res = org.nativescript.Benchmarks.returnInt();
      }
    }) + '\n';

    message += measure('Pass a String', () => {
      for (var i = 0; i < 1e6; i++) {
        org.nativescript.Benchmarks.passString("test");
      }
    }) + '\n';

    message += measure('Return a Boolean', () => {
      let res;
      for (var i = 0; i < 1e6; i++) {
        res = org.nativescript.Benchmarks.returnBoolean();
      }
    }) + '\n';

    message += measure('Return a Double', () => {
      let res;
      for (var i = 0; i < 1e6; i++) {
        res = org.nativescript.Benchmarks.returnDouble();
      }
    }) + '\n';

    message += measure('Pass an Int', () => {
      for (var i = 0; i < 1e6; i++) {
        org.nativescript.Benchmarks.passInt(10);
      }
    }) + '\n';

    message += measure('Pass a Double', () => {
      for (var i = 0; i < 1e6; i++) {
        org.nativescript.Benchmarks.passDouble(10.5);
      }
    }) + '\n';

    message += measure('Pass a Boolean', () => {
      for (var i = 0; i < 1e6; i++) {
        org.nativescript.Benchmarks.passBoolean(true);
      }
    }) + '\n';

    message += measure('Return an Int Array', () => {
      let res;
      for (var i = 0; i < 1000; i++) {
        res = org.nativescript.Benchmarks.returnIntArray();
      }
    }) + '\n';

    message += measure('Pass an Int Array', () => {
      for (var i = 0; i < 1000; i++) {
          org.nativescript.Benchmarks.passIntArray([1, 2, 3, 4, 5]);
      }
    }) + '\n';

    message += measure('Return a String Array', () => {
      let res;
      for (var i = 0; i < 1000; i++) {
        res = org.nativescript.Benchmarks.returnStringArray();
      }
    }) + '\n';

    message += measure('Pass a String Array', () => {
      for (var i = 0; i < 1000; i++) {
        org.nativescript.Benchmarks.passStringArray(["one", "two", "three"]);
      }
    }) + '\n';

    message += measure('Return a Double Array', () => {
      let res;
      for (var i = 0; i < 1000; i++) {
        res = org.nativescript.Benchmarks.returnDoubleArray();
      }
    }) + '\n';

    message += measure('Pass a Double Array', () => {
      for (var i = 0; i < 1000; i++) {
        org.nativescript.Benchmarks.passDoubleArray([1.1, 2.2, 3.3]);
      }
    }) + '\n';

    message += measure('Return a Boolean Array', () => {
      let res;
      for (var i = 0; i < 1000; i++) {
        res = org.nativescript.Benchmarks.returnBooleanArray();
      }
    }) + '\n';

    message += measure('Pass a Boolean Array', () => {
      for (var i = 0; i < 1000; i++) {
        org.nativescript.Benchmarks.passBooleanArray([true, false, true]);
      }
    }) + '\n';

    message += measure('Return a Date Object', () => {
      let res;
      for (var i = 0; i < 1000; i++) {
        res = org.nativescript.Benchmarks.returnDateObject();
      }
    }) + '\n';

    message += measure('Pass a Date Object', () => {
      for (var i = 0; i < 1000; i++) {
        org.nativescript.Benchmarks.passDateObject(new java.util.Date());
      }
    }) + '\n';

    message += `\n\nTotal Score (Lower Better): ${score.toFixed(0)}`;

    this.message = message;
}
}