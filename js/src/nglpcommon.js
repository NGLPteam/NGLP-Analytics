export function extractPalette(sheetName, paletteSelector) {
    if (!paletteSelector) {
        paletteSelector = "#palette"
    }

    let palette = {};
    for (let i = 0; i < document.styleSheets.length; i++) {
        let sheet = document.styleSheets[i];
        if (sheet.href && sheet.href.includes(sheetName)) {
            for (let j = 0; j < sheet.rules.length; j++) {
                let rule = sheet.rules[j];
                if (rule.selectorText && rule.selectorText && rule.selectorText.startsWith(paletteSelector + " ")) {
                    let key = rule.selectorText.substring(paletteSelector.length + 2);
                    palette[key] = rule.style.color;
                }
            }
        }
    }
    return palette;
}


let DEMO_CONTAINERS = {
    "1531-7714" : "Practical assessment, research & evaluation",
    "2604-7438" : "Translat library",
    "0024-7766" : "Lymphology"
}

/* This function is a dumb function for the purposes of demo.  The real thing should be able to look up
or otherwise return data about the containers
 */
export function getContainerMetadata(containers) {
    let meta = {};
    for (let c of containers) {
        meta[c] = {
            title: c in DEMO_CONTAINERS ? DEMO_CONTAINERS[c] : "Unknown title"
        }
    }
    return meta;
}