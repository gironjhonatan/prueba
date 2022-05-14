const doc = document, 
$tabla = doc.querySelector(".c-tabla"),
$formulario = doc.querySelector(".c-formulario"),
$titulo = doc.querySelector("c-titulo"),
$template = doc.getElementById("c-template").content,
$fragment = doc.createDocumentFragment();

const get = async () => {
    try {
        let resp = await fetch("https://test-api-met.herokuapp.com/stores"),
        json = await resp.json();

        if (!resp.ok) throw {status: resp.status, statusText: resp.statusText};
        console.log(json);

        json.array.forEach(element => {
            $template.querySelector(".name").textContent = element.nombre;
            $template.querySelector(".items").textContent = element.item;
            $template.querySelector(".editar").dataset.id = element.id;
            $template.querySelector(".editar").dataset.name = element.nombre;
            $template.querySelector(".editar").dataset.items = element.item;
            $template.querySelector(".eliminar").dataset.id = element.id;

            let $clonar = doc.importNode($template, true);
            $fragment.appendChild($clonar);
        });

        $tabla.querySelector("tbody").appendChild($fragment);
    } catch (error) {
        let mensaje = error.statusText || "hay un error";
        $tabla.insertAdjacentHTML("afterend", `<p> error ${error.status}: ${mensaje} </p>`);
    }   
}

doc.addEventListener("DOMContentLoaded", get);

doc.addEventListener("submit", async e => {
    if (e.target === $formulario) {
        e.preventDefault();

        if (!e.target.id.value) {
            //post
            try {
                let opj = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=uft.8"
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        item: e.target.item.value
                    })
                },
                resp = await fetch("https://test-api-met.herokuapp.com/stores", opj),
                json = await resp.json();

                if(!resp.ok) throw {status: resp.status, statusText: resp.statusText};

                location.reload();

            } catch (error) {
                let mensaje = error.statusText || "hay un error";
                $formulario.insertAdjacentHTML("afterend", `<p> error ${error.status}: ${mensaje} </p>`);
            }
        }else{
            //put
            try {
                let obj = {
                    method: "PUT",
                    headers: {
                        "Contente-type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        item: e.target.item.value
                    })
                },
                resp = await fetch( `https://test-api-met.herokuapp.com/stores/${e.target.id.value}`,obj),
                json = await resp.json();

                if(!resp.ok) throw {status: resp.status, statusText: resp.status}
            } catch (error) {
                let mensaje = error.statusText || "hay un error";
                $formulario.insertAdjacentHTML("afterend", `<p> error ${error.status}: ${mensaje} </p>`);
            }
        }
    }
});

doc.addEventListener("click", async e =>{
    if(e.target.matches(".editar")){
        $titulo.textContent = "editar tienda";
        $formulario.nombre.value = e.target.dataset.name;
        $formulario.item.value = e.target.dataset.items;
        $formulario.id.value = e.target.dataset.id;
    }
    if(e.target.matches(".eliminar")){
        let borrar = confirm(`quieres eliminar ${e.target.dataset.id}`);
        if(borrar){
            try {
                let opj = {
                    method:  "DLETE",
                    headers: {
                        "Content-type": "application/json; charset-utf-8"
                    }
                },
                resp = await fetch(`https://test-api-met.herokuapp.com/stores/${e.target.dataset.id}`,opj),
                json = await resp.json();

                if(!resp.ok) throw {status: resp.status, statusText: resp.statusText};


            } catch (error) {
                let mensaje = error.statusText || "hay un error";
                alert(`error ${error.status}: ${mensaje}`)
            }
        }
    }
})