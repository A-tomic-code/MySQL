const display = document.querySelector('#display');

function getID() {
    return document.querySelector('#id').value ? document.querySelector('#id').value : -1
}

function avg() {
    let url = 'http://localhost:5555/media?id='

    let id = getID();

    if (id != -1) {
        url += id

        //ya esta la URL

        const params = {
            headers: { 'content-type': 'application/json' },
            method: 'GET'
        }

        fetch(url, params)
            .then((result) => {
                return result.json()
            })
            .then((data) => {
                display.innerHTML = `Media del alumno con ID: ${id} --> ${data.data}`
            });
    }else{
        alert('id no valido')
    }


}

function apuntadas (){
    let url = 'http://localhost:5555/apuntadas?id='

    let id = getID();

    if (id != -1) {
        url += id

        //ya esta la URL

        const params = {
            headers: { 'content-type': 'application/json' },
            method: 'GET'
        }

        fetch(url, params)
            .then((result) => {
                return result.json()
            })
            .then((data) => {
                let asignaturas = '';
                console.log(data.data)
                data.data.forEach( (asignatura) => {
                    asignaturas += asignatura.title + ', '
                })
                
                display.innerHTML = `Asignaturas del alumno con ID: ${id} --> ${asignaturas}`
            });
    } else {
        alert('id no valido')
    }
}

function impartidas() {
    let url = 'http://localhost:5555/impartidas'

    let id = getID();

    if(id != -1){
        url += `?id=${id}`
    }

    const params = {
        headers: { 'content-type': 'application/json' },
        method: 'GET'
    }

    fetch(url, params)
        .then((result) => {
            return result.json()
        })
        .then((data) => {

            console.log(data.data)
            let txt = ''

            data.data.forEach( item => {
                txt +=`ID Profesor: ${item.teacher_id} --> Asignatura: ${item.subject_title} <br>`
            })
            
            display.innerHTML = txt;
        });
        
}