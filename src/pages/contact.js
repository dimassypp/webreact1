import React from 'react';
import pic1 from '../images/switch.jpg';
import pic2 from '../images/miband.jpg';


export default class Home extends React.Component{
    render(){
        return(
            <div className="bg-indigo-600 bg">    
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold">
                        <span className="block font-lg">Get in Touch!</span>
                        <span className="block text-gray-100 text-base subpixel-antialiased tracking-wide font-medium">Kami sangat mudah dijangkau dan dengan senang hati ingin berbicara dengan anda. Kirim form jika ada masalah atau saran yang ingin diberikan.</span>
                        <br/>
                        <hr className=' w-6/12'/>
                    </h2>
                    <div className="mr-32"></div>
                <form class="flex w-full max-w-sm space-x-3">
                    <div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                    <div class="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white   ">
                        Kontak Kami !
                    </div>
                    <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div class="col-span-2 lg:col-span-1">
                        <div class=" relative ">
                            <input type="text" id="contact-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Nama"/>
                        </div>
                    </div>
                    <div class="col-span-2 lg:col-span-1">
                        <div class=" relative ">
                            <input type="text" id="contact-form-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <label class="text-gray-700" for="name">
                            <textarea class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Masukkan komentar" name="comment" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div class="col-span-2 text-right">
                        <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Kirim
                        </button>
                    </div>
                </div>
            </div>
        </form>
        </div>
        </div>
    )
  }
}