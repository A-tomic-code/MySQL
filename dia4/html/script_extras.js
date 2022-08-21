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

                let DATA = data.data.pop();

                display.innerHTML =
                    `
                <tr>
                    <th>Alumno</th>
                    <th>Nota media</th>
                </tr>

                <tr>
                    <td>${DATA.first_name + ' ' + DATA.last_name}</td>
                    <td>${DATA.avg}</td>
                </tr>
                `
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

                display.innerHTML =
                    `
                <tr>
                    <th>Alumno</th>
                    <th>Asignatura/th>
                </tr>
                `

                data.data.forEach( (asignatura) => {
                    display.innerHTML += 
                    `
                    <tr>
                        <td>${asignatura.first_name + ' ' + asignatura.last_name}</td>
                        <td>${asignatura.title}</td>
                    </tr>
                    `
                })
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

            display.innerHTML =
            `
            <tr>
            <th>ID</th>
            <th>Profesor</th>
            <th>Asignatura</th>
            </tr>
            `
            
            console.log(data.data)
            data.data.forEach( item => {

                display.innerHTML +=
                    `
                    <tr>
                        <td>${item.teacher_id}</td>
                        <td>${item.first_name + ' ' + item.last_name}</td>
                        <td>${item.title}</td>
                    </tr>
                    `
            })
            
        });


}