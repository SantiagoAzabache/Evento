    const insForm = document.getElementById('formulario')
    // consige todas las entradas del formulario.

    //Para poder capturar todos las entradas del formulario.

    insForm.onsubmit = async (e)=>{
        e.preventDefault()
        const formData = new FormData(insForm)
        const data = Object.fromEntries(formData.entries())
        
        try{
            const response = await fetch('http://localhost:3000/enviar-inscripcion',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(data)
            })
            if (response.ok){
                const responseBody = await response.json()
                alert(`Se envio tu inscription a  ${data.Email}`)
            }else{
                alert('Hubo un problema con el envio')
            }
        }catch(error){
            console.error('Error al enviar la inscripcion', error)
            alert('Error al enviar la inscripcion')
        }

        insForm.reset()
    }
   

