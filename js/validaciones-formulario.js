const d = document;

export default function contactFormValidations(){
    d.addEventListener("submit",(e) => {
        
        e.preventDefault();
        //alert("Sending message");
    

        const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response"),
        $form = d.querySelector("form");

        $loader.classList.remove("none")

        fetch("https://formsubmit.co/ajax/cesar3713@outlook.com",{
            method: "POST",
            body: new FormData(e.target)
        })
            .then(res=>res.ok ? res.json() : Promise.reject(res))
            .then(json=>{
                console.log(json);
                $loader.classList.add("none");
                $response.classList.remove("none");
                $response.innerHTML=`<p>${json.message}`;
                $form.reset();
            })
            .catch(err=>{
                console.log(err);
                let message=err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
                $response.innerHTML=`<p>Error${err.status}:${message}</p>`;
            })
            .finally(()=>setTimeout(()=>{
                $response.classList.add("none");
                $response.innerHTML="";
            },4500));

        /*setTimeout(()=>{
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();

        setTimeout(()=>$response.classList.add("none"),3000);

        },3000);*/

       
      
    })
}