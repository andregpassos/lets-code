export function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export function showMsgAndSleep(message: string, milliseconds: number) {
  console.log(message);
  sleep(milliseconds);
}