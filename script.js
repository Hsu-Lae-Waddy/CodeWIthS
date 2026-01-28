const FrontendBtn = document.getElementById("FrontendBtn");
const BackendBtn  = document.getElementById("BackendBtn");
const IOSBtn      = document.getElementById("IOSBtn");
const UXBtn       = document.getElementById("UXBtn");
const KidBtn       = document.getElementById("KidBtn");

const roadMapH2   = document.getElementById("roadMapH2");
const roadMapList = document.getElementById("roadMapList");

if (FrontendBtn) {
    FrontendBtn.onclick = function () {
        roadMapH2.textContent = "Frontend Developer";
        roadMapList.innerHTML = `
            <li>HTML + CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
        `;
    };
}

if (BackendBtn) {
    BackendBtn.onclick = function () {
        roadMapH2.textContent = "Backend Developer";
        roadMapList.innerHTML = `
            <li>JavaScript</li>
            <li>Python</li>
            <li>SQL</li>
            <li>REST & JSON APIs</li>
            <li>Git & GitHub</li>
        `;
    };
}

if (IOSBtn) {
    IOSBtn.onclick = function () {
        roadMapH2.textContent = "iOS Developer";
        roadMapList.innerHTML = `
            <li>Swift or Objective-C</li>
            <li>MVVM</li>
            <li>UIKit & SwiftUI</li>
            <li>XCTest (Unit Testing)</li>
            <li>Git & GitHub</li>
        `;
    };
}

if (UXBtn) {
    UXBtn.onclick = function () {
        roadMapH2.textContent = "UX Design";
        roadMapList.innerHTML = `
            <li>Figma or Adobe XD</li>
            <li>Mobile UX</li>
            <li>Web UX</li>
            <li>UI Basics</li>
            <li>Advanced UX</li>
        `;
    };
}

if (KidBtn) {
    KidBtn.onclick = function () {
        roadMapH2.textContent = "Programming For Kids";
        roadMapList.innerHTML = `
            <li>Scratch Jr(Ages 5-7)</li>
            <li>Scratch-3 (Ages 8-16)</li>
            <li>Code.org (K-12)</li>
            <li>Tynker & CodeMonkey (All Ages)</li>
            <li>Python (Ages 10+)</li>
            <li>Roblox Studio(Age 8+)</li>
        `;
    };
}