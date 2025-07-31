const generateProgressBar = (progressOfYear, progressBarCapacity = 30) => {
	const passedBars = Math.floor(progressOfYear * progressBarCapacity);
	const remainingBars = progressBarCapacity - passedBars - 1;
	const progressBar =
		"=".repeat(passedBars) + ">" + ".".repeat(Math.max(remainingBars, 0));
	return `[${progressBar}]`;
};

const thisYear = new Date().getFullYear();
const startTimeOfYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime();
const endTimeOfYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime();
const now = Date.now();
const progressOfYear =
	(now - startTimeOfYear) / (endTimeOfYear - startTimeOfYear);

const dayOfYear =
	Math.floor((now - startTimeOfYear) / (1000 * 60 * 60 * 24)) + 1;
const totalDaysInYear =
	Math.floor((endTimeOfYear - startTimeOfYear) / (1000 * 60 * 60 * 24)) + 1;

const progressBarOfYear = generateProgressBar(progressOfYear);

const readme = `\
<pre>
┌──┤ whoami ├─────────▰▰▰
│
├─▣ ekkx
├─▣ backend developer based in tokyo
├─▣ clear code, considered interface
├─▣ <a href="https://xtrz.cc">blog</a>
│
└───────────────────────────────▰▰▰

${thisYear}: ${progressBarOfYear} ${(progressOfYear * 100).toFixed(
	1
)} %（${dayOfYear}/${totalDaysInYear}）
</pre>
`;

console.log(readme);
