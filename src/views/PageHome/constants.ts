export const ASPEKPENILAIAN = [
  "Aspek Penilaian 1",
  "Aspek Penilaian 2",
  "Aspek Penilaian 3",
  "Aspek Penilaian 4",
];

export const MAHASISWA = [
  "Mahasiswa 1",
  "Mahasiswa 2",
  "Mahasiswa 3",
  "Mahasiswa 4",
  "Mahasiswa 5",
  "Mahasiswa 6",
  "Mahasiswa 7",
  "Mahasiswa 8",
  "Mahasiswa 9",
  "Mahasiswa 10",
];

export const OPTIONSPENILAIAN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const DEFAULTPENILAIAN = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export const INITIALVALUESPENILAIAN = {
  aspekPenilaian1: DEFAULTPENILAIAN,
  aspekPenilaian2: DEFAULTPENILAIAN,
  aspekPenilaian3: DEFAULTPENILAIAN,
  aspekPenilaian4: DEFAULTPENILAIAN,
};

export const HANDLESUBMITPENILAIAN = (e: typeof INITIALVALUESPENILAIAN) => {
  const results = {};
  Object.keys(e).forEach((_, i) => {
    const childResults = {};
    Object.values(e)[i].forEach((v, index) => {
      Object.assign(childResults, { [`mahasiswa_${index + 1}`]: v });
    });
    Object.assign(results, {
      [`aspek_penilaian_${i + 1}`]: childResults,
    });
  });

  window.alert(JSON.stringify(results));
  console.log(results);
};

export const TITLE = "Aplikasi Penilaian Mahasiswa";
