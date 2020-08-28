var e = document.createElement("textarea");
var t = [];
var crn = document.querySelector("body > div.pagebodydiv > table:nth-child(5) > tbody > tr:nth-child(2) > td").textContent;
t.push(["name","uin","status","email","crn"].join("\t"));
document.querySelectorAll(".datadisplaytable")[2].querySelectorAll("tr").forEach(x => {
    if (x.querySelectorAll("td").length == 8) {
        var elts = x.querySelectorAll("td");
        var name = elts[1].textContent,
                   uin = elts[2].textContent,
                   status = elts[3].textContent,
                   email = elts[7].querySelector("a").href.substring(7);
        t.push([name, uin, status, email, crn].join("\t"))
    }
})
e.value = t.join("\n");
e.rows = 20;
e.cols = 78;
document.body.insertBefore(e, document.body.childNodes[0])