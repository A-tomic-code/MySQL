const table = document.querySelector('table');

const inputs = document.querySelectorAll('input[type=text]')

const student_first_name_input = inputs[0]
const student_last_name_input = inputs[1]
const student_group_id_input = inputs[2]
const student_id_input = inputs[3]

const base_url = "http://localhost:5555/alumnos"

function parseFormData() {

    let first_name = student_first_name_input.value ? student_first_name_input.value : 'NoName';
    let last_name = student_last_name_input.value ? student_last_name_input.value : 'NoLastName';
    let group_id = student_group_id_input ? student_group_id_input.value : 'NoGroup';

    return new Student(first_name, last_name, group_id);
}

function consultar() {
    let url = base_url;

    if (student_id_input.value) {
        url += `?id=${student_id_input.value}`
    }

    const params = {
        headers: { 'content-type': 'application/json' },
        method: 'GET'
    }

    let HTML_tabla = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Grupo</th>
        </tr>`

    fetch(url, params)
        .then((result) => {
            return result.json()
        })
        .then((data) => {

            data.data.forEach( (alumno => {

                HTML_tabla += 
                `
                    <tr>
                        <td>${alumno.id_}</td>
                        <td>${alumno.first_name}</td>
                        <td>${alumno.last_name}</td>
                        <td>${alumno.group_id}</td>
                    </tr>
                `
            }));
 
            table.innerHTML = HTML_tabla;
        });

}

function modificar() {
    let id = student_id_input.value;

    let alumno = parseFormData();

    if(id){

        let req_body = JSON.parse( JSON.stringify(alumno) );
        req_body.id = id;
        
        console.log(req_body);

        const params = {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(req_body),
            method: 'PUT'
        }

        fetch(base_url, params)
        .then( (result) => {
            return result.json()
        })
        .then( (data) => {
            console.log(data)
            alert(data.message)
        })
        .catch( (e) => {
            alert('ERROR >> ' + e.message);
        })

    }else{
        alert('No se puede realzar la operacion --> FALTA EL TARGET ID O NO ES VALIDO')
    }

    consultar()
}

function crear(){
    let student = parseFormData();

    const params = {
        headers: {'content-type':'application/json'},
        body: JSON.stringify(student),
        method: 'POST'
    }

    fetch(base_url, params)
    .then( (data) => {
        return data.json()
    })
    .then( (result) => {
        alert(result.message)
    })
    .catch( (e) => {
        alert('ERROR >> ' + e.message)
    })

    consultar()
}

function borrar(){
    let ID = student_id_input.value;

    if(ID){
        const params = {
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({id: ID}),
            method: 'DELETE'
        }

        fetch(base_url, params)
        .then( (result) => {
            return result.json()
        })
        .then( (data) => {
            console.log(data);
            alert(data.message)
        })
    } else { 
        alert('No se puede realzar la operacion --> FALTA EL TARGET ID O NO ES VALIDO')
    }

    consultar();
}