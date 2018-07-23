var clipHistory = JSON.parse(tk.global("ClipHistory"));

function saveHistory() {
    if (clipHistory.indexOf(tk.global("CLIP")) !== -1) {
        clipHistory = clipHistory.filter(item => item !== tk.global("CLIP"));
    }
    clipHistory.unshift(tk.global("CLIP"));
    if (clipHistory.length > 20) {
        clipHistory.pop();
    }
    tk.setGlobal("ClipHistory", JSON.stringify(clipHistory));
}

function joinWithE000() {
    return clipHistory.join("");
}
