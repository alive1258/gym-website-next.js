const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const consoleMsgs = [];
  page.on("console", (msg) => consoleMsgs.push(`[${msg.type()}] ${msg.text()}`));
  page.on("pageerror", (err) => consoleMsgs.push(`[pageerror] ${err.message}`));

  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  const buttons = await page.$$("div.scrollbar-hidden button[aria-haspopup='dialog']");
  console.log("Found modal-enabled video buttons:", buttons.length);

  if (buttons.length === 0) {
    console.log("NO BUTTONS FOUND");
  } else {
    await buttons[0].scrollIntoViewIfNeeded();
    await buttons[0].click();
    await page.waitForTimeout(1000);
    const dialog = await page.$("div[role='dialog']");
    console.log("Dialog present after click:", !!dialog);
    if (dialog) {
      const iframeSrc = await page.$eval("div[role='dialog'] iframe", (el) => el.src).catch(() => null);
      console.log("Iframe src:", iframeSrc);
    }
    await page.screenshot({ path: "C:/Users/zamirul/AppData/Local/Temp/claude/E--client-work-gym-website-gym-frontend/ccb7e79c-9783-4c7c-b7b0-736ec7fa598f/scratchpad/after-click.png" });
  }

  console.log("--- console messages ---");
  console.log(consoleMsgs.join("\n"));

  await browser.close();
})();
