/**
 * Repeat the function `func` `times` times, passing `args` as the arguments to it every time.
 * @param {function} func The function you want to run each time.
 * @param {number} times A **positive** number for how many times you want to run the function. **If it is a floating point, it will be rounded down.**
 * @param {...*=} args Arguments to be passed to `func`.
 */
function repeat(func, times, ...args) {
  //Check that times is a usable int or float
  if (!Number.isFinite(times)) {
    throw new Error(
      "Something that isn't a number was passed to times, or nothing at all."
    );
  } else if (times < 0) {
    throw new Error(
      "A number less than 0 was passed to times, that won't work."
    );
  }
  times = Math.floor(times); //At this point we now know we are working with an integer

  for (let i = 0; i < times; i++) {
    func(...args); 
  }
}

/**
 * Repeat the function `func` `times` times, passing `args` as the arguments to it every time.
 * @param {function} func The function you want to run each time.
 * @param {number} times A **positive** number for how many times you want to run the function. **If it is a floating point, it will be rounded down.**
 * @param {...*=} args Arguments to be passed to `func`.
 */
function t(func, times, ...args) {
  repeat(func, times, ...args);
}

export { repeat, t };