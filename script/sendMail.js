/* global MicroModal*/

const email = document.getElementById("email");
const msg = document.getElementById("msg");
const sendButton = document.getElementById("send");

const handleSendEmail = () => {
    if (email.validity.valid || msg.value.length === 0) {
      // formulario no válido!
      console.log("Not valid");
      return;
    }
    sendButton.disabled = true;
    const data = {
                    email: email.value, 
                    text: msg.value,
                  }
    fetch('https://killpop-api.glitch.me/sendMail',{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
        }
      }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        sendButton.disabled = false;
        console.log(myJson);
        // Acá debe ir la acción de envío correcto
        MicroModal.close('modal-1');
        email.value = "";
        msg.value = "";
      })
      .catch(function(error) {
        sendButton.disabled = false;
        console.log("Something went wrong");
        // Acá debe ir la acción de envío fallido
      });
}

sendButton.addEventListener("click", handleSendEmail);
