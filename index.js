function result() {
  var x = document.getElementById("phtux").value;
  var soNguyenTo = "";
  var ketQua;

  if (x == "") {
    alert("chưa nhập số");
    return;
  }
  for (var i = 2; i <= x; i++) {
    if (check(i) == true) {
      soNguyenTo += i + " ";
    }
  }

  ketQua = "Các số nguyên tố nhỏ hơn " + x + " là: " + soNguyenTo;

  document.getElementById("result").style.display = "block";
  document.getElementById("rs").innerHTML = ketQua;
}

function check(x) {
  if (x < 2) {
    return false;
  } else if (x > 2) {
    if (x % 2 == 0) {
      return false;
    }
    for (var i = 3; i <= Math.sqrt(x); i += 2) {
      if (x % i == 0) {
        return false;
      }
    }
  }
  return true;
}
