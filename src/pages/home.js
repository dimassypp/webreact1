import React from 'react';
import pic1 from '../images/switch.jpg';
import pic2 from '../images/miband.jpg';


export default class Home extends React.Component{
    render(){
        return(
            <div class="bg-white-100">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span class="block text-5xl">AsteRisk</span>
                <span class="block text-cyan-600">Tempat jual beli elektronik terlengkap!</span>
              </h2>
              <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div class="inline-flex rounded-md shadow">
                  <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Mulai Disini </a>
                </div>
                <div class="ml-3 inline-flex rounded-md shadow">
                  <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"> Pelajari </a>
                </div>
              </div>
            </div>  
                    <h2 class="font-extrabold tracking-tight text-gray-400">
                        <span class="block text-3xl">___________________________________________________________________________________________</span>
                    </h2>
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <img src={pic1} alt="switch" className="mr-4 box-border w-6/12" />
                    <h2 class="font-extrabold tracking-tight text-gray-900">
                        <span class="block text-3xl">Nintendo Switch</span>
                        <span class="block text">Compatible with Mi 4, Mi 3, Redmi Note 4G, or any device with Android 4.4 and above. Compatible with iPhone models 4s and above that run on iOS 7.0 and above.</span>
                    </h2>
                    <div class="inline-flex rounded-md shadow">
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"> BELI </a>
                    </div>
                </div>
                    <h2 class="font-extrabold tracking-tight text-gray-400">
                        <span class="block text-3xl">___________________________________________________________________________________________</span>
                    </h2>
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <img src={pic2} alt="switch" className="mr-4 box-border w-6/12" />
                    <h2 class="font-extrabold tracking-tight text-gray-900">
                        <span class="block text-3xl">Mi Band</span>
                        <span class="block text">The Nintendo Switch is a video game console developed by Nintendo and released worldwide in most regions on March 3, 2017. The console itself is a tablet that can either be docked for use as a home console or used as a portable device,</span>
                    </h2>
                    <div class="inline-flex rounded-md shadow">
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"> BELI </a>
                    </div>
                </div>
          </div>
        )
    }
}