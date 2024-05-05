//1. Button Status - tinh nang loc san pham
const buttonsStatus = document.querySelectorAll("[button-status]")

if(buttonsStatus.length > 0){
    let url = new URL(window.location.href)
    // console.log(url)

    buttonsStatus.forEach(button => {
        button.addEventListener("click", () => {
            const status  = button.getAttribute("button-status")

            if(status){
                url.searchParams.set("status", status)
            } else {
                url.searchParams.delete("status")
            }
            
            // reset after click
            window.location.href = url.href
        })
    })
}

//2. Form Search - tinh nang tim kiem
const formSearch = document.querySelector("#form-search")
if(formSearch){
    let url = new URL(window.location.href)

    formSearch.addEventListener("submit", (e) => {
        e.preventDefault()   //prohibit re-loading the web
        const keyword = e.target.elements.keyword.value

        if(keyword){
            url.searchParams.set("keyword", keyword)
        } else {
            url.searchParams.delete("keyword")
        }

        window.location.href = url.href
    })
}