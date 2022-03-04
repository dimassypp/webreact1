import React from 'react';
import '../images/switch.jpg';
import pic3 from '../images/logoar.png';

export default class About extends React.Component{
    render(){
        return(
            <div class="bg-gray-200">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <img src={pic3} alt="switch" className="mr-4 box-border w-6/12" />
                        <h2 class="font-extrabold tracking-tight text-gray-900">
                            <span class="block text-3xl text-cyan-700">Tentang Kami</span>
                            <span class="block text">AsteRisk adalah toko elektronik online terbesar di Indonesia, menyediakan segala peralatan elektronik mulai dari alat keluarga sampai barang elektronik kekinian. Harga dijamin murah karena kami mendistribusikan barang langsung dari pabrik. Keamanan barang juga terjamin, semua barang memiliki garansi toko minimal 1 tahun. AsteRisk adalah pilihan yang tepat bagi anda yang ingin mencari peralatan elektronik murah dan berkualitas.</span>
                        </h2>
                    </div>
                </div>
          </div>
        )
    }
}