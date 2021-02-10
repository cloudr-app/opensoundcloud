import ky from "ky-universal"

ky("https://httpbin.org/anything").json().then(console.log)
