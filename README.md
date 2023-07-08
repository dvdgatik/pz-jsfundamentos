# pz-jsfundamentos
Fundamentos de JavaScript

Size Limit is a performance budget tool for JavaScript. It checks every commit
on CI, calculates the real cost of your JS for end-users and throws an error
if the cost exceeds the limit.

* **ES modules** and **tree-shaking** support.
* Add Size Limit to **Travis CI**, **Circle CI**, **GitHub Actions**
  or another CI system to know if a pull request adds a massive dependency.
* **Modular** to fit different use cases: big JS applications
  that use their own bundler or small npm libraries with many files.
* Can calculate **the time** it would take a browser
  to download and **execute** your JS. Time is a much more accurate
  and understandable metric compared to the size in bytes.
* Calculations include **all dependencies and polyfills**
  used in your JS.
