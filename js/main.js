// Bài 1
// TÌM NGÀY THÁNG năm trước đó và tiếp theo
// Lấy các phần tử từ DOM  
const formNgayElement = document.getElementById("formNgay");
const ngayElement = document.getElementById("ngay");
const thangElement = document.getElementById("thang");
const namElement = document.getElementById("nam");
const ngayTruocDoElement = document.getElementById("ngayTruocDo");
const ngayTiepTheoElement = document.getElementById("ngayTiepTheo");

// Xử lý sự kiện khi người dùng nhấn nút "Tìm"
formNgayElement.addEventListener("submit", function (e) {
    e.preventDefault();

    // Lấy giá trị từ các trường input
    const ngay = parseInt(ngayElement.value);
    const thang = parseInt(thangElement.value);
    const nam = parseInt(namElement.value);

    // Tìm ngày trước đó và ngày tiếp theo
    const ngayTruocDo = tinhNgayTruocDo(ngay, thang, nam);
    const ngayTiepTheo = tinhNgayTiepTheo(ngay, thang, nam);

    // Hiển thị kết quả lên giao diện
    ngayTruocDoElement.textContent = ngayTruocDo;
    ngayTiepTheoElement.textContent = ngayTiepTheo;
});

// Tính ngày trước đó
function tinhNgayTruocDo(ngay, thang, nam) {
    // Kiểm tra ngày là ngày đầu tiên trong tháng
    if (ngay === 1) {
        // Kiểm tra tháng là tháng đầu tiên trong năm
        if (thang === 1) {
            return `31/12/${nam - 1}`;
        } else {
            return `${ngayTrongThang(thang - 1, nam)}/${thang - 1}/${nam}`;
        }
    } else {
        return `${ngay - 1}/${thang}/${nam}`;
    }
}

// Tính ngày tiếp theo
function tinhNgayTiepTheo(ngay, thang, nam) {
    // Kiểm tra ngày là ngày cuối cùng trong tháng
    if (ngay === ngayTrongThang(thang, nam)) {
        // Kiểm tra tháng là tháng cuối cùng trong năm
        if (thang === 12) {
            return `1/1/${nam + 1}`;
        } else {
            return `1/${thang + 1}/${nam}`;
        }
    } else {
        return `${ngay + 1}/${thang}/${nam}`;
    }
}

// Tính số ngày trong một tháng
function ngayTrongThang(thang, nam) {
    const thang30Ngay = [4, 6, 9, 11];
    if (thang === 2) {
        // Kiểm tra năm nhuận
        if (nam % 4 === 0 && (nam % 100 !== 0 || nam % 400 === 0)) {
            return 29;
        } else {
            return 28;
        }
    } else if (thang30Ngay.includes(thang)) {
        return 30;
    } else {
        return 31;
    }
}
// -------------------------------------
// Bài 2
// Tìm số ngày của tháng đó
// Lấy các phần tử từ DOM
const formThangNamElement = document.getElementById("formThangNam");
const thangElement1 = document.getElementById("thangg");
const namElement1 = document.getElementById("namm");
const soNgayTrongThangElement = document.getElementById("soNgayTrongThang");

// Xử lý sự kiện khi người dùng nhấn nút "Tìm"
formThangNamElement.addEventListener("submit", function (e) {
    e.preventDefault();

    // Lấy giá trị từ các trường input
    const thang = parseInt(thangElement1.value);
    const nam = parseInt(namElement1.value);

    // Tính số ngày trong tháng
    const soNgayTrongThang = tinhSoNgayTrongThang(thang, nam);

    // Hiển thị kết quả lên giao diện
    soNgayTrongThangElement.textContent = `Tháng ${thang} năm ${nam} có ${soNgayTrongThang} ngày.`;
});

// Tính số ngày trong tháng
function tinhSoNgayTrongThang(thang, nam) {
    const thang30Ngay = [4, 6, 9, 11];
    if (thang === 2) {
        // Kiểm tra năm nhuận
        if (nam % 4 === 0 && (nam % 100 !== 0 || nam % 400 === 0)) {
            return 29;
        } else {
            return 28;
        }
    } else if (thang30Ngay.includes(thang)) {
        return 30;
    } else {
        return 31;
    }
}
// -------------------------------------
// Bài 3
// đọc số có 3 chữ số
function docSoNguyen(e) {
    e.preventDefault();
    let soNguyen = document.getElementById("soNguyen").value;
    let hangTram = Math.floor(soNguyen / 100);
    let hangChuc = Math.floor((soNguyen % 100) / 10);
    let hangDonVi = soNguyen % 10;

    let docHangTram = "";
    let docHangChuc = "";
    let docHangDonVi = "";

    switch (hangTram) {
        case 1:
            docHangTram = "một trăm";
            break;
        case 2:
            docHangTram = "hai trăm";
            break;
        case 3:
            docHangTram = "ba trăm";
            break;
        case 4:
            docHangTram = "bốn trăm";
            break;
        case 5:
            docHangTram = "năm trăm";
            break;
        case 6:
            docHangTram = "sáu trăm";
            break;
        case 7:
            docHangTram = "bảy trăm";
            break;
        case 8:
            docHangTram = "tám trăm";
            break;
        case 9:
            docHangTram = "chín trăm";
            break;
    }

    switch (hangChuc) {
        case 1:
            docHangChuc = "mười";
            break;
        case 2:
            docHangChuc = "hai mươi";
            break;
        case 3:
            docHangChuc = "ba mươi";
            break;
        case 4:
            docHangChuc = "bốn mươi";
            break;
        case 5:
            docHangChuc = "năm mươi";
            break;
        case 6:
            docHangChuc = "sáu mươi";
            break;
        case 7:
            docHangChuc = "bảy mươi";
            break;
        case 8:
            docHangChuc = "tám mươi";
            break;
        case 9:
            docHangChuc = "chín mươi";
            break;
        case 0:
            docHangChuc = "lẻ";
            break;
    }

    switch (hangDonVi) {
        case 1:
            docHangDonVi = "một";
            break;
        case 2:
            docHangDonVi = "hai";
            break;
        case 3:
            docHangDonVi = "ba";
            break;
        case 4:
            docHangDonVi = "bốn";
            break;
        case 5:
            docHangDonVi = "năm";
            break;
        case 6:
            docHangDonVi = "sáu";
            break;
        case 7:
            docHangDonVi = "bảy";
            break;
        case 8:
            docHangDonVi = "tám";
            break;
        case 9:
            docHangDonVi = "chín";
            break;
    }

    let docSoNguyen = docHangTram;
    if (hangChuc === 1 && hangDonVi !== 0) {
        docSoNguyen += " mười " + docHangDonVi;
    } else {
        docSoNguyen += " " + docHangChuc + " " + docHangDonVi;
    }
    if (hangChuc === 0 && hangTram === 0 && hangDonVi !== 0) {
        docSoNguyen = docHangDonVi;
    }

    document.getElementById("ketQua").textContent = docSoNguyen;
}

document.getElementById("btnTinh").addEventListener("click", docSoNguyen);
// -------------------------------------

// Bài 4
// tìm sinh viên xa trường nhất = vĩ độ và kinh độ
// Tọa độ trường đại học
let truongDaiHoc = {
    latitude: 10.854158076605597,
    longitude: 106.62621288349831
};

// Danh sách sinh viên
let sinhVienList = [
    { ten: "Sinh viên 1", latitude: 21.0285, longitude: 105.8542 },
    { ten: "Sinh viên 2", latitude: 21.0365, longitude: 105.8504 },
    { ten: "Sinh viên 3", latitude: 21.0323, longitude: 105.8411 }
];
// 10.855388239938215, 106.6299230905832
// Tính khoảng cách giữa hai tọa độ sử dụng công thức Haversine
function tinhKhoangCach(latitude1, longitude1, latitude2, longitude2) {
    const R = 6378; // Bán kính trái đất (đơn vị: km)
    const distanceLat = toRad(latitude2 - latitude1);
    const distanceLon = toRad(longitude2 - longitude1);

    const a =
        Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
        Math.cos(toRad(latitude1)) * Math.cos(toRad(latitude2)) * Math.sin(distanceLon / 2) * Math.sin(distanceLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

function toRad(degrees) {
    return degrees * (Math.PI / 180);
}

// Tìm sinh viên xa trường nhất
function timSinhVienXaTruong() {
    let sinhVienXaTruong;
    let maxDistance = 0;
    for (let i = 0; i < sinhVienList.length; i++) {
        const distance = tinhKhoangCach(
            truongDaiHoc.latitude,
            truongDaiHoc.longitude,
            sinhVienList[i].latitude,
            sinhVienList[i].longitude
        );
        console.log('distance: ', distance);

        if (distance > maxDistance) {
            maxDistance = distance;
            sinhVienXaTruong = sinhVienList[i].ten;
            console.log('sinhVienXaTruong: ', sinhVienXaTruong);
        }

    }


    return sinhVienXaTruong;
}

// In danh sách sinh viên và sinh viên xa trường nhất lên giao diện
function inThongTin() {
    const sinhVienListElement = document.getElementById("sinhVienList");
    const sinhVienXaTruongElement = document.getElementById("sinhVienXaTruong");

    // Xóa danh sách sinh viên cũ
    sinhVienListElement.innerHTML = "";

    // In danh sách sinh viên lên giao diện
    for (let i = 0; i < sinhVienList.length; i++) {

        const sinhVienElement = document.createElement("li");
        sinhVienElement.classList.add("list-group-item");
        sinhVienElement.textContent = sinhVienList[i].ten;
        sinhVienListElement.appendChild(sinhVienElement);
    }

    // Tìm sinh viên xa trường nhất và in lên giao diện
    const sinhVienXaTruong = timSinhVienXaTruong();
    sinhVienXaTruongElement.textContent = sinhVienXaTruong;
}

// Xử lý sự kiện khi người dùng thêm sinh viên
document.getElementById("formSinhVien").addEventListener("submit", function (e) {
    e.preventDefault();

    const tenSinhVien = document.getElementById("tenSinhVien").value;
    const latitude = parseFloat(document.getElementById("latitude").value);
    const longitude = parseFloat(document.getElementById("longitude").value);

    // if (tenSinhVien && !isNaN(latitude) && !isNaN(longitude)) {
    // }

    const sinhVien = {
        ten: tenSinhVien,
        latitude: latitude,
        longitude: longitude
    };


    sinhVienList.push(sinhVien);
    inThongTin();

    // Xóa giá trị trong trường nhập liệu
    document.getElementById("tenSinhVien").value = "";
    document.getElementById("latitude").value = "";
    document.getElementById("longitude").value = "";
});

inThongTin();