<p align="center">
  <a href="https://github.com/node-ffi-packager"><img src="https://raw.githubusercontent.com/node-ffi-packager/resources/master/logotype/node-ffi-libraries.svg?sanitize=true" alt="node-ffi-libraries logotype, impossible cubes in orange" width="256" border="0" /></a>
</p>

# [@ffi-libraries/libusb-v1.0.23](https://github.com/node-ffi-libraries/node-ffi-library-libusb-v1.0.23)

[Automatically generated](https://github.com/node-ffi-packager) [Node.js](https://nodejs.org/en/) [Foreign Function Interface (FFI)](https://en.wikipedia.org/wiki/Foreign_function_interface) package for [`libusb`](https://github.com/libusb/libusb) v1.0.23. It is meant as a base to build feature-rich packages on top of &mdash; without the hassle of writing library bindings and building native dependencies.

> **`libusb`**: A cross-platform library to access USB devices

[Bugs? Report them!](https://github.com/node-ffi-packager)

## Platforms supported in this package

<details>

<summary>linux-x86_64</summary>

Conan package id `81e0007a28308bfd7066b549778d9742cdf72ea6`.

### Library dependencies

No library dependencies.

### Header files

- [`./include/libusb-1.0/libusb.h`](./platforms/linux-x86_64/include/libusb-1.0/libusb.h) ([`.js`](./platforms/linux-x86_64/include/libusb-1.0/libusb.h.js))

- [`./include/libusb-1.0/libusb.h`](./platforms/linux-x86_64/include/libusb-1.0/libusb.h) ([`.js`](./platforms/linux-x86_64/include/libusb-1.0/libusb.h.js))

### Library files

- [`./lib/libusb-1.0.so.0.2.0`](./platforms/linux-x86_64/lib/libusb-1.0.so.0.2.0)

</details>

<details>

<summary>macos-armv8</summary>

Conan package id `30acef53c04f36d5f9412c84a1b3a7434a1f10fb`.

### Library dependencies

No library dependencies.

### Header files

- [`./include/libusb-1.0/libusb.h`](./platforms/macos-armv8/include/libusb-1.0/libusb.h) ([`.js`](./platforms/macos-armv8/include/libusb-1.0/libusb.h.js))

- [`./include/libusb-1.0/libusb.h`](./platforms/macos-armv8/include/libusb-1.0/libusb.h) ([`.js`](./platforms/macos-armv8/include/libusb-1.0/libusb.h.js))

### Library files

- [`./lib/libusb-1.0.0.dylib`](./platforms/macos-armv8/lib/libusb-1.0.0.dylib)

</details>

<details>

<summary>macos-x86_64</summary>

Conan package id `ca6b19bf89270552244fca32806dded803132e76`.

### Library dependencies

No library dependencies.

### Header files

- [`./include/libusb-1.0/libusb.h`](./platforms/macos-x86_64/include/libusb-1.0/libusb.h) ([`.js`](./platforms/macos-x86_64/include/libusb-1.0/libusb.h.js))

- [`./include/libusb-1.0/libusb.h`](./platforms/macos-x86_64/include/libusb-1.0/libusb.h) ([`.js`](./platforms/macos-x86_64/include/libusb-1.0/libusb.h.js))

### Library files

- [`./lib/libusb-1.0.0.dylib`](./platforms/macos-x86_64/lib/libusb-1.0.0.dylib)

</details>

<details>

<summary>windows-x86_64</summary>

Conan package id `995e0f0b86a651012a3bfca00d60f35ae037db5e`.

### Library dependencies

No library dependencies.

### Header files

- [`./include/libusb-1.0/libusb.h`](./platforms/windows-x86_64/include/libusb-1.0/libusb.h) ([`.js`](./platforms/windows-x86_64/include/libusb-1.0/libusb.h.js))

- [`./include/libusb-1.0/libusb.h`](./platforms/windows-x86_64/include/libusb-1.0/libusb.h) ([`.js`](./platforms/windows-x86_64/include/libusb-1.0/libusb.h.js))

### Library files

- [`./bin/libusb-1.0.dll`](./platforms/windows-x86_64/bin/libusb-1.0.dll)

</details>

## Installation

```shell
npm install --save github:node-ffi-libraries/node-ffi-library-libusb-v1.0.23#semver:^2.0.1
```

## Example

```javascript
const { load } = require("@ffi-libraries/libusb-v1.0.23");

async function main() {
  // Lazy-loading the library and all dependencies.
  const library = await load();

  // A library might have more than one header file.
  console.dir(library);

  // Lazy-load an individual header file (random example, see output from above).
  const headerLoader = library.headers["./include/libusb-1.0/libusb.h"];
  const header = await headerLoader();

  // You can now use the functions and types exported by the header file.
  console.dir(header);

  // Properly unload when done.
  await library.unload();
}

main();
```

## Usage

- Used from [Node.js](https://nodejs.org/) (Javascript) to call the `libusb` dynamic library (C/C++).
  - No compilation required. All available binaries are included in the package and are loaded automatically.
  - Library header files are included, but most other documentation is not. See instead documentation for [`libusb`](https://github.com/libusb/libusb).
- The `header` variable in the above example contains a Javascript object generated from the C/C++ header file.
  - C/C++ constants.
  - FFI typedefs.
  - Bindings to C/C++ functions.
- See the [Node.js FFI tutorial](https://github.com/node-ffi/node-ffi/wiki/Node-FFI-Tutorial) to get started.
  - Using [N-API](https://nodejs.org/dist/latest/docs/api/n-api.html) (`-napi`) versions of FFI libraries is required.
  - See [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi), [ref-napi](https://github.com/node-ffi-napi/ref-napi), and [related `-napi` packages](https://github.com/node-ffi-napi).

## Package information

- Repository/package automatically generated by [`@ffi-packager/ffi-packager`](https://github.com/node-ffi-packager):
  - Version: v2.0.1
  - Generator run by: [Joel Purra](https://joelpurra.com/)
- Repository published to [Github](https://github.com/):
  - Branch: [`v2.0.1`](https://github.com/node-ffi-libraries/node-ffi-library-libusb-v1.0.23/tree/v2.0.1)
  - Repository: [`node-ffi-library-libusb-v1.0.23`](https://github.com/node-ffi-libraries/node-ffi-library-libusb-v1.0.23)
  - Organization: [`node-ffi-libraries`](https://github.com/node-ffi-libraries)
- Package was _not_ published to [NPM](https://npmjs.com/).
  - Version: `2.0.1` (based on the package generator version)
  - Name: `@ffi-libraries/libusb-v1.0.23`
  - Organization/scope: `ffi-libraries`
- Library binaries made available by [Conan.io](https://conan.io/):
  - Package reference: [`libusb/1.0.23@`](https://github.com/conan-io/conan-center-index)
  - Conan remote: `conan-center`
- The library is [`libusb`](https://github.com/libusb/libusb):
  - Version: v1.0.23
  - Description: "A cross-platform library to access USB devices"
  - License: <a href="https://spdx.org/licenses/LGPL-2.1.html">LGPL-2.1</a>
  - Topics: libusb, usb, device

---

[@ffi-libraries/libusb-v1.0.23](https://github.com/node-ffi-libraries/node-ffi-library-libusb-v1.0.23) Copyright &copy; 2021 [Joel Purra](https://joelpurra.com/). License: <a href="https://spdx.org/licenses/MIT.html">MIT</a>.
