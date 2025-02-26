# NativeScript Benchmarks for android

This repository contains the benchmarks for the NativeScript Android runtime.

## Running the benchmarks

First install the dependencies:

```bash
npm install
```

Then run the benchmarks:

```bash
npm run start.android.release
```

Tap on the `Start Benchmark` button in the app to start the benchmarks.

## Switching the android-runtime

To switch the android runtime, you can do the following:

First run `ns clean` to remove the current android runtime.

Then install the desired android runtime:

### V8

```
npm install @nativescript/android@napi-v8
```

### QuickJS

```
npm install @nativescript/android@napi-quickjs
```

### Hermes

```
npm install @nativescript/android@napi-hermes
```

### JSC

```
npm install @nativescript/android@napi-jsc
```
