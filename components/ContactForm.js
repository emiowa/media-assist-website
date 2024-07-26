// import React from 'react';

// export default function ContactForm(){
// 	return (
// 		<form className="" action="https://api.web3forms.com/submit" method="POST">
// 			<input type="hidden" name="access_key" value="9ee00361-87a3-45b6-8a5e-138f253c3bb8" />
// 			<input className='inputStyle fw-light' type="text" id="name" name="name" placeholder="¿Cómo te llamas?" required />
// 			<input className='inputStyle fw-light' type="email" id="email" name="email" placeholder="¿Cuál es tu correo electrónico?" required />
// 			<input className='inputStyle fw-light' type="text" id="subject" name="subject" placeholder="Dame una pista, ¿de qué quieres hablar?" required />
// 			<textarea className='inputStyle fw-light' id="message" cols="50" rows="5" name="message" placeholder="Ahora sí, cuéntamelo todo, ¿en qué te puedo ayudar?" required></textarea>
// 			<button className='sendMessageButton' type="submit">Enviar!</button>
// 			<input type="hidden" name="redirect" value="https://oaharchitecture.com"></input>
// 			<script src="https://web3forms.com/client/script.js" async defer></script>
// 	  	</form>
// 	)
// }

import React from "react";

export default function ContactForm() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ecd03fb2-c94b-4052-8227-bd26d2e5c90e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        <form onSubmit={onSubmit}>
            <div className="sm:pb-6">
                <label className="text-media-black" htmlFor="email">メールアドレス</label><br />
                <input className="border border-media-black w-full" type="email" name="email" id="email" required/>
            </div>
            <div className="sm:pb-6">
                <label className="text-media-black" htmlFor="name">お名前</label><br />
                <input className="border border-media-black w-full" type="text" name="name" id="name" required/>
            </div>
            <div className="sm:pb-6">
                <p className="text-media-black">ご所属</p>
                <input className="border border-media-black" type="checkbox" id="option1" />
                    <label htmlFor='option1'>個人</label><br />
                <input className="border border-media-black" type="checkbox" id="option2" />
                    <label htmlFor='option2'>法人</label>
            </div>
            <div className="sm:pb-12">
                <label className="text-media-black" htmlFor="request">お問い合わせ内容</label><br />
                <textarea className="border border-media-black w-full" name="message" id="request" required></textarea>
            </div>
            <div className="flex justify-center">
                <button className='relative inline-flex items-center justify-center rounded-md py-3 px-8 text-lg text-media-white font-medium border border-indigo-600 bg-gradient-to-tr from-indigo-600 to-indigo-500 hover:drop-shadow-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-media-white' type="submit">Send</button>
            </div>
        </form>
        <span>{result}</span>
  
      </div>
    );
  }