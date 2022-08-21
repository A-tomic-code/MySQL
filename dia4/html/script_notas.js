const table = document.querySelector('table');

const inputs = document.querySelectorAll('input[type=text]')

const student_id_input = inputs[0]
const subject_id_input = inputs[1]
const date_input = inputs[2]
const mark_input = inputs[3]

const id_input = inputs[4] //!

const base_url = "http://localhost:5555/notas"



table.style.height = document.querySelector('form').style.height;



function parseFormData() {
    let student_id = student_id_input.value ? student_id_input.value : -1;
    let subject_id = subject_id_input.value ? subject_id_input.value : -1;
    
    let date;
    if(date_input.value){
        date = date_input.value
    }else{
        let _date = new Date();

        date = `${_date.getFullYear()}-${_date.getMonth() + 1}-${_date.getDay()}`
    }

    let mark = mark_input.value ? mark_input.value : -1

    return new Mark(student_id, subject_id, date, mark)
}

function consultar() {
    let url = base_url;

    if (id_input.value) {
        url += `?id=${id_input.value}`
    }

    const params = {
        headers: { 'content-type': 'application/json' },
        method: 'GET'
    }

    let HTML_tabla = `
        <tr>
            <th>ID</th>
            <th>Alumno</th>
            <th>Asignatura</th>
            <th>Fecha</th>
            <th>Nota</th>
        </tr>`

    fetch(url, params)
        .then((result) => {
            return result.json()
        })
        .then((data) => {

            console.log(data.data)
            data.data.forEach((nota => {

                HTML_tabla +=
                    `
                    <tr>
                        <td>${nota.id_}</td>
                        <td>${nota.first_name + ' ' + nota.last_name}</td>
                        <td>${nota.title}</td>
                        <td>${nota.date}</td>
                        <td>${nota.mark}</td>
                    </tr>
                `
            }));

            table.innerHTML = HTML_tabla;
        });

}

function modificar() {
    let id = id_input.value;

    let alumno = parseFormData();

    if (id) {

        let req_body = JSON.parse(JSON.stringify(alumno));
        req_body.id = id;

        console.log(req_body);

        const params = {
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(req_body),
            method: 'PUT'
        }

        fetch(base_url, params)
            .then((result) => {
                return result.json()
            })
            .then((data) => {
                console.log(data)
                alert(data.message)
            })
            .catch((e) => {
                alert('ERROR >> ' + e.message);
            })

    } else {
        alert('No se puede realzar la operacion --> FALTA EL TARGET ID O NO ES VALIDO')
    }

    consultar()
}

function crear() {
    let student = parseFormData();

    const params = {
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(student),
        method: 'POST'
    }

    fetch(base_url, params)
        .then((data) => {
            return data.json()
        })
        .then((result) => {
            alert(result.message)
        })
        .catch((e) => {
            alert('ERROR >> ' + e.message)
        })

    consultar()
}

function borrar() {
    let ID = id_input.value;

    if (ID) {
        const params = {
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ id: ID }),
            method: 'DELETE'
        }

        fetch(base_url, params)
            .then((result) => {
                return result.json()
            })
            .then((data) => {
                console.log(data);
                alert(data.message)
            })
    } else {
        alert('No se puede realzar la operacion --> FALTA EL TARGET ID O NO ES VALIDO')
    }

    consultar();
}
