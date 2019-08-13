const debug = require("debug")("challenge");
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { add, last, reduce, uniq } = require("ramda");

const dataDir = path.join(__dirname, "data");
const fStream = fs.createReadStream(path.join(dataDir, "large.in"));
const writeStream = fs.createWriteStream(path.join(dataDir, "result.out"));
const lineReader = readline.createInterface({
  input: fStream
});

debug("App start");

lineReader.on("line", l => {
  const numbers = l.split(" ");

  if (numbers.length < 2) {
    return null;
  }

  let hasSequence = false;

  if (numbers.indexOf("0") >= 0) {
    hasSequence = true;
  } else {
    const sums = reduce(
      (acc, number) => {
        acc.push(add(last(acc) || 0, number));
        return acc;
      },
      [],
      numbers
    );

    hasSequence = uniq(sums).length !== sums.length;
  }

  writeStream.write(hasSequence ? "yes\n" : "no\n");
});

process.on("beforeExit", () => {
  debug("App finished.");
});
