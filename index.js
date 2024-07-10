const generateProgressBar = () => {
    const progressBarCapacity = 30
    const passedProgressBarIndex = Math.floor(progressOfYear * progressBarCapacity)
    const progressBar = '█'.repeat(passedProgressBarIndex) + '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const thisYear = new Date().getFullYear();
const startTimeOfYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime();
const endTimeOfYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime();
const progressOfYear = (Date.now() - startTimeOfYear) / (endTimeOfYear - startTimeOfYear);
const progressBarOfYear = generateProgressBar();

const readme = `\
<pre>
      ___           ___           ___       ___       ___
     /\\__\\         /\\  \\         /\\__\\     /\\__\\     /\\  \\
    /:/  /        /::\\  \\       /:/  /    /:/  /    /::\\  \\
   /:/__/        /:/\\:\\  \\     /:/  /    /:/  /    /:/\\:\\  \\
  /::\\  \\ ___   /::\\~\\:\\  \\   /:/  /    /:/  /    /:/  \\:\\  \\
 /:/\\:\\  /\\__\\ /:/\\:\\ \\:\\__\\ /:/__/    /:/__/    /:/__/ \\:\\__\\
 \\/__\\:\\/:/  / \\:\\~\\:\\ \\/__/ \\:\\  \\    \\:\\  \\    \\:\\  \\ /:/  /
      \\::/  /   \\:\\ \\:\\__\\    \\:\\  \\    \\:\\  \\    \\:\\  /:/  /
      /:/  /     \\:\\ \\/__/     \\:\\  \\    \\:\\  \\    \\:\\/:/  /
     /:/  /       \\:\\__\\        \\:\\__\\    \\:\\__\\    \\::/  /
     \\/__/         \\/__/         \\/__/     \\/__/     \\/__/

┌──┤ WHOAMI ├─────────▰▰▰
│
├─▣ ekkx
├─▣ <a href="https://ekkxy.com">ekkx's blog (coming soon...)</a>
│
└───────────────────────────────▰▰▰

┌──┤ LANGUAGES ├─────────▰▰▰
│
├─▣ TypeScript
├─▣ Go
├─▣ PHP
├─▣ Java
├─▣ Python
│
└───────────────────────────────▰▰▰

┌──┤ HOBBIES ├─────────▰▰▰
│
├─▣ Coding
├─▣ DTM
├─▣ Skiing
├─▣ Piano
│
└───────────────────────────────▰▰▰

⏳ ${new Date().getFullYear()}: ${progressBarOfYear} ${(progressOfYear * 100).toFixed(2)} %

⏰ Updated on ${new Date().toDateString()}
</pre>
`

console.log(readme)
