let aBid = 0
let bBid = 0
let cBid = 0
let dBid = 0

let aWicket = 0
let bWicket = 0
let cWicket = 0
let dWicket = 0

let role = "Wicketkeeper"

let safeBtn = "Safe Mode"
let normalBtn = "Normal Mode"

let aCellNum = 1
let bCellNum = 1
let cCellNum = 1
let dCellNum = 1

function AddPlayer(fi){
    
    l = fi.parentNode.parentNode.rowIndex;
    var h = document.getElementById('playAuction')
    
    let newPlr = document.getElementById('newplayer').value
    let newBs = document.getElementById('bsp').value
    
    if(newPlr === "" || newBs === ""){
        alert('The fields about the player can not be empty during the addtion of new player.')
    }
    else{
    
        var newRow = h.insertRow(9)
        var cell0 = newRow.insertCell(0)
        var cell1 = newRow.insertCell(1)
        var cell2 = newRow.insertCell(2)
    
        cell0.innerHTML = document.getElementById('newplayer').value
        cell1.innerHTML = document.getElementById('type').value
        cell2.innerHTML = document.getElementById('bsp').value
        
        var cell3 = newRow.insertCell(3)
        
        var x = document.createElement("button");
        var t = document.createTextNode("Selected Players");
        x.appendChild(t);
            
        document.getElementById('playAuction').rows[9].cells[3].appendChild(x);
        
        document.getElementById('playAuction').rows[9].cells[3].addEventListener("click", function(d){
            Go(this);
        });
        
        for(n=4;n<9;n++){
            newRow.insertCell(n)
        }
    
    }

}

function Go(d){
    
    x = d.parentNode.rowIndex
    var p = document.getElementById("playAuction")
    var objCells = p.rows.item(x).cells;

    r = 0
    i = 0

    while(r<3){
        if(r==0){
            document.getElementById("pn1").value = objCells.item(i).innerHTML;
        }
        else if(r==1){
            document.getElementById("pt1").value = objCells.item(i).innerHTML;
        }
        else if(r==2) {
            
            document.getElementById("pb1").value = objCells.item(i).innerHTML;
        }

        r += 1
        i++
    }    
    p.deleteRow(x)
}

function SelectPlayer(v) {
    x = v.parentNode.parentNode.rowIndex
    var p = document.getElementById("playAuction")

    var objCells = p.rows.item(x).cells;

    r = 0
    i = 0
    while(r<3){
        if(r==0){
            document.getElementById("pn1").value = objCells.item(i).innerHTML;
        }
        else if(r==1){
            document.getElementById("pt1").value = objCells.item(i).innerHTML;
        }
        else if(r==2) {
            document.getElementById("pb1").value = objCells.item(i).innerHTML;
        }

        r += 1
        i++
    }    
    p.deleteRow(x)
}


function Bid(){

    base = document.getElementById("pb1").value
    
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    let c = document.getElementById('c').value
    let d = document.getElementById('d').value

    let aInt = Number.parseInt(a)
    let bInt = Number.parseInt(b)
    let cInt = Number.parseInt(c)
    let dInt = Number.parseInt(d)

    let e = document.getElementById('aBalance').innerHTML;
    let f = document.getElementById('bBalance').innerHTML;
    let g = document.getElementById('cBalance').innerHTML;
    let h = document.getElementById('dBalance').innerHTML;
    
    let aBalance = Number.parseInt(e)
    let bBalance = Number.parseInt(f)
    let cBalance = Number.parseInt(g)
    let dBalance = Number.parseInt(h)
    
    let playerName = document.getElementById('pn1').value
    let getPlayerBase = document.getElementById('pb1').value
    let playerBase = Number.parseInt(getPlayerBase)


    if(aBid >= 5 || bBid >= 5 || cBid >= 5 || dBid >= 5 ){
        if(aBid >= 5){
            aInt = base + 1
        }
        if(bBid >= 5){
            bInt = base + 2
        }
        if(cBid >= 5){
            cInt = base + 3
        }
        if(dBid >= 5){
            dInt = base + 4
        }
        else{}
    }
    else{}
    
    if(playerName === "" || isNaN(playerBase)) {
        alert("No player has been selected or parts of the information is missing")
    }

    else{

        if((aInt > 0) && (bInt > 0) && (cInt > 0) && (dInt > 0)){

            if((aInt > base) && (bInt > base) && (cInt > base) && (dInt > base)){
    
                if((aInt == bInt) || (aInt == cInt) || (aInt == dInt) || (bInt == cInt) || (bInt == dInt) || (cInt == dInt) ){
                    alert("❗❗ There is a tie between the bidders.❗❗ \n Teams please change your bidding amount!")
                }
                else{
    
                    if(aBid == 5 || bBid == 5 || cBid == 5 || dBid == 5 ){
                        if(aBid == 5){
                            aInt = 0
                        }
                        if(bBid == 5){
                            bInt = 0
                        }
                        if(cBid == 5){
                            cInt = 0
                        }
                        if(dBid == 5){
                            dInt = 0
                        }
                        else{}
                    }
                    else{}
    
                    if((aInt <= aBalance) && (bInt <= bBalance) && (cInt <= cBalance) && (dInt <= dBalance) && (aBid < 5 || bBid < 5 || cBid < 5 || dBid < 5)){
    
                        max = Math.max(aInt, bInt, cInt, dInt)
        
                        if(aInt == max){
        
                            let aIsWicket = document.getElementById("pt1").value
                            if(aBid == 4 && aWicket < 1 && aIsWicket != role){
        
                                alert("This team need at least one Wicketkeeper")
                            }
                            else{
                                alert('Team A wins')    
                                aBalance -= aInt
                                document.getElementById('aBalance').innerHTML = aBalance
                                
                                document.getElementById('sold').rows[0].cells[aCellNum].innerHTML = playerName
                                aCellNum++
    
                                document.getElementById('pn1').value = ''
                                document.getElementById('pb1').value = ''
    
                                if(aIsWicket === role){
                                    aWicket++
                                }
                                else{
                                }
        
                                aBid++
                                if(aBid>=5){
                                    document.getElementById('a').value = "0"
                                    document.getElementById('a').disabled = true
                                    alert('Bid limit for Team A has been reached!')
                                }
                                else{
                                }
                                alert("Team A has bidden " + aBid + " times, have " + aWicket + " Wicketkeeps and " + aBalance + "$ in its balance")
                            }
        
                        }
                        
                        else if(bInt == max){
                            
                            let bIsWicket = document.getElementById("pt1").value
                            if(bBid == 4 && bWicket < 1 && bIsWicket != role){
        
                                alert("This team need at least one Wicketkeeper")
                            }
                            else{
                                alert('Team B wins')    
                                bBalance -= bInt
                                document.getElementById('bBalance').innerHTML = bBalance
        
                                document.getElementById('sold').rows[1].cells[bCellNum].innerHTML = playerName
                                bCellNum++
    
                                document.getElementById('pn1').value = ''
                                document.getElementById('pb1').value = ''
    
                                if(bIsWicket === role){
                                    bWicket++
                                }
                                else{
                                }
        
                                bBid++
                                if(bBid>=5){
                                    document.getElementById('b').value = "0"
                                    document.getElementById('b').disabled = true
                                    alert('Bid limit for Team B has been reached!')
                                }
                                else{
                                }
                                alert("Team B has bidden " + bBid + " times, have " + bWicket + " Wicketkeeps and " + bBalance + "$ in its balance")
                            }
                        }
                        
                        else if(cInt == max){
                            let cIsWicket = document.getElementById("pt1").value
                            if(cBid == 4 && cWicket < 1 && cIsWicket != role){
                                alert("This team need at least one Wicketkeeper")
                            }
                            else{
                                alert('Team C wins')    
                                cBalance -= cInt
                                document.getElementById('cBalance').innerHTML = cBalance
    
                                document.getElementById('sold').rows[2].cells[cCellNum].innerHTML = playerName
                                cCellNum++
    
                                document.getElementById('pn1').value = ''
                                document.getElementById('pb1').value = ''
        
                                if(cIsWicket === role){
                                    cWicket++
                                }
                                else{
                                    
                                }
                                cBid++
                                if(cBid>=5){
                                    document.getElementById('c').value = "0"
                                    document.getElementById('c').disabled = true
                                    alert('Bid limit for Team C has been reached!')
                                }
                                else{
                                }
                                alert("Team C has bidden " + cBid + " times, have " + cWicket + " Wicketkeeps and " + cBalance + "$ in its balance")
                            }
                        }
                         
                        else if(dInt == max){
        
                            let dIsWicket = document.getElementById("pt1").value
                            if(dBid == 4 && dWicket < 1 && dIsWicket != role){
        
                                alert("This team need at least one Wicketkeeper")
                            }
                            else{
                                alert('Team D wins')    
                                dBalance -= dInt
                                document.getElementById('dBalance').innerHTML = dBalance
    
                                document.getElementById('sold').rows[3].cells[dCellNum].innerHTML = playerName
                                dCellNum++
    
                                document.getElementById('pn1').value = ''
                                document.getElementById('pb1').value = ''
                                
                                if(dIsWicket === role){
                                    dWicket++
                                }
                                else{
                                }
    
                                dBid++
                                if(dBid>=5){
                                    document.getElementById('d').value = "0"
                                    document.getElementById('d').disabled = true
                                    alert('Bid limit for Team D has been reached!')
                                }
                                else{
                                }
                                alert("Team D has bidden " + dBid + " times, have " + dWicket + " Wicketkeeps and " + dBalance + "$ in its balance")
                            }
    
                        }
                        else{
                        }
                    
                        if(aBid == 5 && bBid == 5 && cBid == 5 && dBid == 5){
                            alert("🎉✨🎆The Auction has been completed🎆✨🎉")
                        }
    
                    }
                    else if(aBid >= 5 && bBid >= 5 && cBid >= 5 && dBid >= 5){
                        alert("❌⁉❗❗❗ The Auction has already been completed ❗❗❗❗ ")
                    }
                    else{
                        let failMax = Math.max(aInt, bInt, cInt, dInt)
                        
                        alert(failMax + ' is greater than balance of the team!')
                    }
    
                }
    
            }
            else{
                smallBid = Math.min(aInt, bInt, cInt, dInt)
                alert("value"+ smallBid + " must be greater than base: " + base)
            }
    
        }
    
        else if(isNaN(aInt) || isNaN(bInt) || isNaN(cInt) || isNaN(dInt)){
            alert('The bidding money can not be empty.')
        }
    
        else{
            alert("value less than 0!")
        }

    }

}

function Disable(secure){
    let mode = secure.innerHTML

    if(mode === safeBtn){
        document.getElementById('pn1').disabled = true
        document.getElementById('pt1').disabled = true
        document.getElementById('pb1').disabled = true
        alert('     Safe Mode \n It blocks any change in characteristics of the player to be bidden upon.')
    }
    else{
        document.getElementById('pn1').disabled = false
        document.getElementById('pt1').disabled = false
        document.getElementById('pb1').disabled = false
        alert('     Normal Mode \nIt allows you to change the characteristics of the player to be bidden upon manually')
    }
}

function Suggest(){
    alert("You can add as many player you want using Add Player section")
}
