import React from "react";

export default function ContactForm() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("送信中....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "c6f41207-d043-40c6-b4ae-73a3aee472e7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("フォームが正常に送信されました");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        <form onSubmit={onSubmit}>
            <div className="pb-6">
                <label className="text-media-black dark:text-media-white" htmlFor="email">メールアドレス</label><br />
                <div className="w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input className="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0" type="email" name="メールアドレス" id="email" required/>
                </div>
            </div>
            <div className="pb-6">
                <label className="text-media-black dark:text-media-white" htmlFor="name">お名前</label><br />
                <div className="w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input className="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0" type="text" name="お名前" id="name" required/>
                </div>
            </div>
            <div className="pb-6">
                <label className="text-media-black pb-2 dark:text-media-white">ご所属</label>
                <div className="flex items-center">
                  <input className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 accent-indigo-600" type="checkbox" name="ご所属" value="個人" id="個人" />
                  <p className="text-media-black pl-3 dark:text-media-white">個人</p><br />
                </div>
                <div className="flex items-center">
                  <input className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 accent-indigo-600" type="checkbox" name="ご所属" value="法人" id="法人" />
                  <p className="text-media-black pl-3 dark:text-media-white">法人</p>
                </div>
            </div>
            <div className="pb-12">
                <label className="text-media-black dark:text-media-white" htmlFor="request">お問い合わせ内容</label><br />
                <div className="w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <textarea className="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0" name="お問い合わせ内容" id="request" required></textarea>
                </div>
            </div>
            <div className="flex justify-center">
                <button className='relative inline-flex items-center justify-center rounded-md py-3 px-8 text-lg text-media-white font-medium border border-indigo-600 bg-gradient-to-tr from-indigo-600 to-indigo-500 hover:drop-shadow-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-media-white' type="submit">送信</button>
            </div>
        </form>
        <span>{result}</span>
  
      </div>
    );
  }