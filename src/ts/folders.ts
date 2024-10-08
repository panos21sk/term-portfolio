type file = {
    content: string;
    name: string;
    parent: folder;
}

type folder = {
    content: Array<folder|file>
    name: string
    parent: folder | null;
}

//files will be immutable as i wont create mkdir, tee, touch, etc...
//structure:
// /
// |home
// ||username
// |||Documents
// ||||projects
// ||||about_me
// ||||contact
// ||||certificates
// |bin
// ||all binary files

//name must always be the same as var name to recreate the structure above
const root: folder = {
    content: [],
    name: "/",
    parent: null
}

//--
const bin: folder = {
    content: [],
    name: "bin",
    parent: root
}
//help, man, pwd, whoami, cd, ls, cat, echo, clear, sudo
const clear: file = { content: "", name: "clear", parent: bin}
const echo: file = { content: "", name: "echo", parent: bin}
const ls: file = { content: "", name: "ls", parent: bin}
const cd: file = { content: "", name: "cd", parent: bin}
const whoami: file = { content: "", name: "whoami", parent: bin}
const pwd: file = { content: "", name: "pwd", parent: bin}
const man: file = { content: "", name: "man", parent: bin}
const help: file = { content: "", name: "help", parent: bin}
const cat: file = { content: "", name: "cat", parent: bin}

bin.content.push(cat, cd, clear, echo, help, ls, man, pwd, whoami)
root.content.push(bin)


const home: folder = {
    content: [],
    name: "home",
    parent: root
}
//have to reassign username's name to user's name
let username: folder = {
    content: [],
    name: "", //must reassign
    parent: home
}
const Documents: folder = {
    content: [],
    name: "Documents",
    parent: username //must reassign
}
const about_me: file = {
    content: `Hey! Thank you for visiting my site! <br/>
    My name is Panagiotis Skoulis. I am (in 2024) an 18 year old self-taught programmer that will soon start studying electrical & computer engineering @ Aristotle university of Thessaloniki <br/>
    I knew I wanted to pursue computer since ever since grade 5. That is when I had my first contact with programming. I was cursed, or blessed- rather, with the engineering mindset of: "Hey, I wonder how this works", or "Hey, how could I make something similar?" <br/>
    And with my "passion" at the time being videogames, I started looking into how they were made, and was fascinated by the more technical side of things like glitches. <br/>
    Everything since is history. <br/>
    So here I am now: <br/>
    I have experience working minimally with C# and C++, a bit more experience working with python and C, and I'm working mostly with JavaScript and TypeScript (+HTML/CSS too of course) <br/>
    I have experience with React, ExpressJs, MongoDB, sass and bootstrap. I also daily drive linux on both my desktop and my laptop (EndeavourOs and Debian respectively) <br/>
    I also experimented with the Unity game engine, and build PCs professionaly for clients (inqueries open, see contact) <br/>
    I still tinker with all my electronics, whether that be resurrecting abandoned hardware or modding my consoles. This is my inspiration to purse hardware.`,
    name: "about_me",
    parent: Documents
}
const contact: file = {
    content: `Github: panos21sk <br/>
    Email: panos99sk@gmail.com <br/>
    Instagram: panos21sk <br/>
    Discord: panos21sonic <br/>
    email me for my phone number, should you desire it`,
    name: "contact",
    parent: Documents
}
const certificates: file = {
    content: `Astro-Pi, Proficiency in Eng, Mikroi episthmones, Hmerida Kvantikhs fysikhs, Steaming the future, Sololearn Ruby cert`,
    //TODO: Touch it up and link to google drive with imgs of my certs
    name: "certificates",
    parent: Documents
}
const projects:file = {
    content: `Term-portfolio: A simple barebones linux install simulation on the web built to display my work, skills and credentials while being geeky and faithful to my inspirations. <br/>
    Available on github.com/panos21sl/term-portfolio as a public repo, and open sourced under the MIT license <br/>
    <br/>
    Simple harmonic oscillation simulation: Simple Harmonic Oscillation Simulation program made using raylib in C. <br/>
    Available on github.com/panos21sk/Simple-Harmonic-Oscillation-Simulation as a public repo, and open sourced under the MIT license <br/>
    <br/>
    <br/>
    UNFINISHED PROJECTS: <br/>
    LearnToCode: A website I wanted to create to share my notes and thought processes in a written course, to try and help people understand programming concepts more easily <br/>
    This was being made with React, ExpressJs and MongoDB. I got quite far in development, finished the UI for the most part and had a working account creation and sign-in system <br/>
    Development ceased as I thought this would be hypocritical for a first project. Also self hosted the site for a while with a node server and a DDNS. <br/>
    Hosted on a private github repo, contact for access.`,

    name: "projects",
    parent: Documents
}
Documents.content.push(about_me, contact, certificates, projects)
username.content.push(Documents)
home.content.push(username)
root.content.push(home)






export {file, folder, root}
