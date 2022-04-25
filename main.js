/**
 * Bài 1
 */

function thuNhapChieuThue() {
    var pt = document.getElementById("phuThuoc").value * 1;
    var tn1n = document.getElementById("thuNhap").value * 1;
    var tnct = "";

    tnct = tn1n - 4e+6 - (pt * 1.6e+6);

    return tnct;
}

function tongThuNhap() {
    var tn = thuNhapChieuThue();
    var tttn = "";

    if (tn >= 0 && tn <= 60e+6) {
        tttn = tn * 0.05;
    } else if (tn > 60e+6 && tn <= 120e+6) {
        tttn = (tn - 60e+6) * 0.1 + 60e+6 * 0.05;
    } else if (tn > 120e+6 && tn <= 210e+6) {
        tttn = (tn - 120e+6) * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05;
    } else if (tn > 210e+6 && tn <= 384e+6) {
        tttn = (tn - 210e+6) * 0.2 + 90e+6 * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05;
    } else if (tn > 384e+6 && tn <= 624e+6) {
        tttn = (tn - 384e+6) * 0.25 + 174e+6 * 0.2 + 90e+6 * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05;
    } else if (tn > 624e+6 && tn <= 960e+6) {
        tttn = (tn - 624e+6) * 0.3 + 240e+6 * 0.25 + 174e+6 * 0.2 + 90e+6 * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05;
    } else {
        tttn = (tn - 960e+6) * 0.35 + 336e+6 * 0.3 + 240e+6 * 0.25 + 174e+6 * 0.2 + 90e+6 * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05;
    };

    return tttn;
}


document.getElementById("tienThue").onclick = function () {
    var name = document.getElementById("hoTen").value;
    var tongTN = tongThuNhap();
    var currentFormat = new Intl.NumberFormat("vn-VN");

    document.getElementById("show_1").innerHTML = "Họ tên: " + name + "; Tiền thuế thu nhập cá nhân: " + currentFormat.format(tongTN) + "VNĐ"
}



/**
 * Bài 2
 */

function phiXuLy() {
    var loaiKhach = document.getElementById("khachHang").value;
    var thueKenh = document.getElementById("soKenh").value;
    var sokn = document.getElementById("soKetNoi").value;
    var tong = "";

    if (loaiKhach == 1) {
        tong = thueKenh * 7.5 + 4.5 + 20.5;
    } else {
        if (sokn > 0 && sokn <= 10) {
            tong = thueKenh * 50 + 75 + 15;
        } else {
            tong = thueKenh * 50 + 75 + 15 + (sokn - 10) * 5;
        };
    };

    return tong;
};

document.getElementById("tienCap").onclick = function () {
    var maKhach = document.getElementById("khachHang").value;
    var pxl = phiXuLy();
    var enFormat = new Intl.NumberFormat("en-IN");

    document.getElementById("show_2").innerHTML = "Mã khách hàng: " + maKhach + " Tiền cáp: $" + enFormat.format(pxl);
};
