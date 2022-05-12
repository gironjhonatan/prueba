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
        let mensaje = error.statusText || "ahy un error";
        $tabla.insertAdjacentHTML("afterend", `<p> error ${error.status}: ${mensaje} </p>`);
    }   
}

doc.addEventListener("DOMContentLoaded", get);

doc.addEventListener("submit", async e => {
    if (e.target === $formulario) {
        e.preventDefault();

        if (!e.target.id.value) {
            //crear post
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
            } catch (error) {
                
            }
        }
    }
})