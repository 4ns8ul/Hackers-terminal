let dot = `<span class="dot">.</span>`;
// let hackerScript =
// `<p> ${l1} ${dot}</p>
// <p>Reading Files...</p>
// <p>Password Files Detected...</p>
// <p>Sending all passwords and personal files to the server...</p>
// <p>Cleaning Up...</p>`

let hackerScript = {
    l1: `<div class="line">Initializing Hacking</div>`,
    l2: `<div class="line">Reading Files</div>`,
    l3: `<div class="line">Password Files Detected</div>`,
    l4: `<div class="line">Sending all passwords and personal files to the server</div>`,
    l5: `<div class="line">Cleaning Up</div>`,
}


function hecker(line) {
    return new Promise((resolve) => {

        let count = 0;
        let div = document.createElement("div");
        div.classList.add("line");
        document.querySelector(".heck").appendChild(div);
        let interval = setInterval(() => {
            div.innerHTML = line + ".".repeat(count + 1);
            count++;

            if (count === 3) {
                clearInterval(interval)
                setTimeout(() => resolve("Success"), 1000)
            }
        }, 500);
    })
}

async function scriptRunner() {
    // console.log("Hullo")
    for (const key in hackerScript) {
        if (Object.prototype.hasOwnProperty.call(hackerScript, key)) {
            const element = hackerScript[key];
            console.log(element);
            await hecker(element);
        }
    }
}

scriptRunner()
