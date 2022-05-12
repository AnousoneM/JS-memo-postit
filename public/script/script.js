// Declaration de variables
let allMemo = document.getElementById('allMemo')
let object = document.getElementById('object')
let memoText = document.getElementById('memoText')

// Variable pour compter nos memos
let countMemo = 6

// fonction qui permets de nettoyer les inputs
function cleanForm() {
    object.value = ""
    memoText.value = ""
}

// fonction permettant de créer un memo
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


function createMemo() {
    if (object.value != '' && memoText.value != '') {
        createNewMemo()
    } else {
        window.alert('ATTENTION TOUS LES CHAMPS DOIVENT ETRE REMPLIS')
    }
}

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

let myArray = [
    {
        id: 'memo-1',
        object: 'Kebab',
        memoText: 'Stella : Complet sans tomate / Samuraï'
    },
    {
        id: 'memo-2',
        object: 'Kebab',
        memoText: 'Mickael : Complet / Algérienne'
    },
    {
        id: 'memo-3',
        object: 'Kebab',
        memoText: 'Sophie : Complet sans sauce'
    },
    {
        id: 'memo-4',
        object: 'Kebab',
        memoText: 'Valentin : Complet / Mayo'
    },
    {
        id: 'memo-5',
        object: 'Kebab',
        memoText: 'Alexandre : Complet sans tomate / Andalouse'
    }
]

myArray.forEach(element => {
    allMemo.innerHTML += `
    <div id="${element.id}" class="note shadow pt-1 pb-2 ps-4 pe-2 rounded">
        <div class="close"><i class="bi bi-x-square-fill" onclick="deleteMemo('${element.id}')"></i></div>
        <h2 class="fs-4 m-0">${element.object}</h2>
        <p>${element.memoText}</p>
    </div>
`
})

