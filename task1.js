const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// // then catch
// cekHariKerja("sabtu") //panggil promise
//   .then((res) => { //jika promise dieksekusi sampai berhasil, jalankan command diblock bawah ini dengan data resolve yang dipassing ke res
// console.log(res); //print isi variable res
//   })
//   .catch((error) => { //jika promise dieksekusi dan ditemukan error/ direject, makan jalankan command dibawah block ini dengan data reject dipassing ke error
//     console.log(error); //print isi variable error
//   });

// async try catch
async function hariKerja(hari) {
  //inisialisasi function hariKerja dengan parameter hari
  try {
    // coba lakukan command dalam block di bawah. jika ada error, jalankan comman dalam catch block
    const res = await cekHariKerja(hari); //inisialisasi variable res yang akan menapung hasil resolve pada promise cekHariKerja
    console.log(res); //tampilkan isi variable res
  } catch (error) {
    //jika adaa error jalankan block di bawah
    console.log(error); //tampilkan isi varible error
  }
}

hariKerja("sabtu"); //eksekusi function hariKerja dengan isi parameter string sabtu
