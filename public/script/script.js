// Declaration de variables
let allMemo = document.getElementById('allMemo')
let object = document.getElementById('object')
let memoText = document.getElementById('memoText')

// Variable pour compter nos memos
let countMemo = 1

// fonction qui permets de nettoyer les inputs
function cleanForm() {
    object.value = ""
    memoText.value = ""
}

// fonction permettant de créer un memo dans le HTML
function createNewMemo() {
    // j'utilise innerHTML avec le += pour insérer mes mémos
    allMemo.innerHTML += `
        <div id="memo-${countMemo}" class="note shadow pt-1 pb-2 ps-4 pe-2 rounded">
            <div class="close"><i class="bi bi-x-square-fill" onclick="deleteMemo('memo-${countMemo}')"></i></div>
            <h2 class="fs-4 m-0">${object.value}</h2>
            <p>${memoText.value}</p>
        </div>
    `
    // on incrémente de 1
    countMemo++
    // j'appelle ma fonction de cleanForm()
    cleanForm()
}

// fonction pour effacer un élément
function deleteMemo(element) {
    let elementToDelete = document.getElementById(element)
    elementToDelete.remove()
}

// fonction pour creer un memo en controllant si les champs sont bien remplis
function createMemo() {
    if (object.value != '' && memoText.value != '') {
        createNewMemo()
    } else {
        window.alert('ATTENTION TOUS LES CHAMPS DOIVENT ETRE REMPLIS')
    }
}

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------



// myArray.forEach(element => {
//     allMemo.innerHTML += `
//     <div id="${element.id}" class="note shadow pt-1 pb-2 ps-4 pe-2 rounded">
//         <div class="close"><i class="bi bi-x-square-fill" onclick="deleteMemo('${element.id}')"></i></div>
//         <h2 class="fs-4 m-0">${element.object}</h2>
//         <p>${element.memoText}</p>
//     </div>
// `
// })

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

