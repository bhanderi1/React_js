function box(){
    let table =document.querySelector('#chessbox')

    for(let i=0; i<5; i++){
        {
            let row =document.createElement('tr')
            for(let j=0; j<5; j++){
                let col = document.createElement('td')
                row.appendChild(col)
            }
        table.appendChild(row)
        }
    }
}
box()
    
function click_box(){
        const elemenet = document.getElementsByTagName('td')
        function addText() {
            for (let a = 0; a < elemenet.length; a++) {
                elemenet[a].style.background = "red"
            }  
        }
        addText()
 }
 click_box()
    
    












