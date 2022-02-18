const string = "|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|\n ";
let delay = 100;
for (const elem of string) {
  setTimeout(() => {
    process.stdout.write(`\r${elem}`);
  },delay += 125);
}
