const email = document.getElementById("email");
const msg = document.getElementById("msg");
const sendButton = document.getElementById("send");

const handleSendEmail = () => {
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
        console.log(myJson);
        // Acá debe ir la acción de envío correcto
      })
      .catch(function(error) {
        console.log("Something went wrong");
        // Acá debe ir la acción de envío fallido
      });
}

sendButton.addEventListener("click", handleSendEmail);
