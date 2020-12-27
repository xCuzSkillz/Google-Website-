function searcher(){
    var searchBox = document.getElementById('inp-1','bt-1')
    if(searchBox.value !=''){
        window.open('https://google.com/search?q=' + searchBox.value, '_blank')
        searchBox.value = ''
    }
}