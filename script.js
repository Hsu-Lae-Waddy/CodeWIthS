const FrontendBtn=document.getElementById("FrontendBtn");
const roadMapH2=document.getElementById("roadMapH2");
const roadMapList = document.getElementById("roadMapList");
const BackendBtn=document.getElementById("BackendBtn");
const IOSBtn=document.getElementById("IOSBtn");
const UXBtn=document.getElementById("UXBtn");

FrontendBtn.onclick=function(){
    document.getElementById("roadMapH2").textContent=`Frontend Developer`;
    roadMapList.innerHTML = `
        <li>HTML+ CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>Git & Github</li>
    `;
   
}    
BackendBtn.onclick=function(){
    document.getElementById("roadMapH2").textContent=`Backend Developer`;
    roadMapList.innerHTML = `
        <li>JavaScript</li>
        <li>Python</li>
        <li>SQL</li>
        <li>REST & JSON APIs</li>
        <li>Git & Github</li>
    `;
}
iOSBtn.onclick=function(){
    document.getElementById("roadMapH2").textContent=`IOS Developer`;
    roadMapList.innerHTML = `
        <li>Swift or Objective C</li>
        <li>MVVM (Model-View-ViewModel)</li>
        <li>UIKit and SwiftUI</li>
        <li>Unit testing (XCTest)</li>
        <li>Git & Github</li>
    `;
}
UXBtn.onclick=function(){
    document.getElementById("roadMapH2").textContent=`UX Design`;
    roadMapList.innerHTML = `
        <li>Figma or Adobe XD</li>
        <li>Mobile UX (iOS / Android)</li>
        <li>Web UX</li>
        <li>UI basics</li>
        <li>Advanced UX</li>
    `;
}