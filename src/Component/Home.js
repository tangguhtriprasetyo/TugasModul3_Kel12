import React from 'react'

import Produk from '../Component/Produk';
import Bab from '../Component/Bab';
import Asisten from '../Component/Asisten';

const Home = () => {
    return <div>
        {
        <div>
         <Produk nama="Bebek Belum Di goreng" stock="2" harga="2.000.000" />
         <Bab judul="Hewan - hewan apa yang kalo ditabrak gapapa?"/>
         <Asisten title="Siapa asisten yang anda sukai ?" nama= "Asisten yang anda sukai" modul="Modul ke berapa asisten tersebut mengampu" judulModul="Judul modul yang diampu asisten" />
        </div>

        }
    </div>



}

export default Home;