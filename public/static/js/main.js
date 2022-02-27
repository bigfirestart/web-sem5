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


// Pulse button
contactRedirect.classList += ' animate__pulse animate__infinite'
contactRedirect.style.setProperty('--animate-duration', '2s')


// Modal
let modalContent = $('#modalGithub')

modal = new jBox('Modal', {
  width: 500,
  height: 250,
  title: 'Have you seen my Github?',
  content: modalContent,
  onOpen: function () {
    
  }
})

$(window).on('load', function(){
    setTimeout(function() {
       modal.open()
    }, 1 * 1000);
});