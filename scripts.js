const btnJellyfin = document.getElementById("btnJellyfin")
const btnNextcloud = document.getElementById("btnNextcloud")
const btnMenu = document.getElementById("btnMenu")
const btnHA = document.getElementById("btnHA")
const frame2 = document.getElementById("content")
const btnHome = document.getElementById("btnHome")
const homeSection = document.getElementById("homeSection")
const appSection = document.getElementById("app-section")
const hometip = document.getElementById("goHome")
const hometext = document.getElementById("homeText")
const inputsearch = document.getElementById("inputSearch")
const body = document.body

// document.getElementsById("btnJellyfin").tabIndex = "1"

btnJellyfin.onclick = function () {
  jellyfin()
}

btnNextcloud.onclick = function () {
  cloud()
}

btnMenu.onclick = function () {
  menu()
}

btnHA.onclick = function () {
  assist()
}

btnHome.onclick = function () {
  goHome()
}

function goHome() {
  frame2.src = ""
  frame2.classList.add("hidden")
  btnHome.classList.add("welcomeHome")
  btnJellyfin.classList.remove("activeFrame")
  btnNextcloud.classList.remove("activeFrame")
  btnMenu.classList.remove("activeFrame")
  btnHA.classList.remove("activeFrame")
  appSection.classList.add("hidden")
  homeSection.classList.remove("hidden")
  hometip.classList.remove("notHome")
  hometext.classList.add("hidden")
  inputsearch.focus()
}

function clickAway() {
  btnJellyfin.classList.remove("activeFrame")
  btnNextcloud.classList.remove("activeFrame")
  btnMenu.classList.remove("activeFrame")
  btnHA.classList.remove("activeFrame")
}

function jellyfin() {
  btnHome.classList.remove("welcomeHome")
  if (btnJellyfin.classList.contains("activeFrame")) {
    frame2.refresh()
  } else {
    frame2.src = "https://stream.ashserv.com/jellyfin"
    btnJellyfin.classList.add("activeFrame")
    btnNextcloud.classList.remove("activeFrame")
    btnMenu.classList.remove("activeFrame")
    btnHA.classList.remove("activeFrame")
    homeSection.classList.add("hidden")
    appSection.classList.add("hidden")
    frame2.classList.remove("hidden")
    hometip.classList.add("notHome")
    hometext.classList.remove("hidden")
  }
}

function cloud() {
  btnHome.classList.remove("welcomeHome")
  if (btnNextcloud.classList.contains("activeFrame")) {
    frame2.refresh()
  } else {
    frame2.src = "https://cloud.ashserv.com"
    btnJellyfin.classList.remove("activeFrame")
    btnNextcloud.classList.add("activeFrame")
    btnMenu.classList.remove("activeFrame")
    btnHA.classList.remove("activeFrame")
    homeSection.classList.add("hidden")
    appSection.classList.add("hidden")
    frame2.classList.remove("hidden")
    hometip.classList.add("notHome")
    hometext.classList.remove("hidden")
  }
}

function menu() {
  frame2.src = ""
  frame2.classList.add("hidden")
  btnHome.classList.remove("welcomeHome")
  btnJellyfin.classList.remove("activeFrame")
  btnNextcloud.classList.remove("activeFrame")
  btnMenu.classList.add("activeFrame")
  btnHA.classList.remove("activeFrame")
  appSection.classList.remove("hidden")
  homeSection.classList.add("hidden")
  hometip.classList.add("notHome")
  hometext.classList.remove("hidden")
}

function assist() {
  btnHome.classList.remove("welcomeHome")
  if (btnHA.classList.contains("activeFrame")) {
    frame2.refresh()
  } else {
    frame2.src = "https://assist.ashserv.com/lovelace/default_view"
    btnJellyfin.classList.remove("activeFrame")
    btnNextcloud.classList.remove("activeFrame")
    btnMenu.classList.remove("activeFrame")
    btnHA.classList.add("activeFrame")
    homeSection.classList.add("hidden")
    appSection.classList.add("hidden")
    frame2.classList.remove("hidden")
    hometip.classList.add("notHome")
    hometext.classList.remove("hidden")
  }
}
