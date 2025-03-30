// 🧪 Throttling With lodash

import throttle from 'lodash/throttle';

const throttledFn = throttle(() => {
  console.log("Throttled!");
}, 1000);

// ✅ Handles edge cases like leading/trailing calls with options.


const throttled = throttle(fn, 1000, { leading: true, trailing: false });