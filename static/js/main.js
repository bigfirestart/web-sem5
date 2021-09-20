var btn = document.getElementById("btn")
var listView = document.getElementById("list")
var pageEnd = document.getElementById("page-end")
var contactRedirect = document.getElementById("contact-redirect-btn")

const scrollParams = {block: "center", behavior: "smooth"}

function scrollToList() {
    listView.scrollIntoView(scrollParams)
}
btn.addEventListener('click', scrollToList)

function scrollToContact() {
    pageEnd.scrollIntoView(scrollParams)
}
contactRedirect.addEventListener('click', scrollToContact)



