function calculate() {
    let sub1 = parseInt(document.getElementById("sub1").value);
    let sub2 = parseInt(document.getElementById("sub2").value);
    let sub3 = parseInt(document.getElementById("sub3").value);
    let sub4 = parseInt(document.getElementById("sub4").value);
    let sub5 = parseInt(document.getElementById("sub5").value);

    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert("invalid marks");
    } else {
        let total_marks= sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total_marks").value = total_marks;

        let percentage = (total_marks*100)/500;
        document.getElementById("percentage").value = percentage.toFixed(2);

            if (percentage<= 90 && percentage>= 100) {
                document.getElementById('Grade').value = "A";

            } else if (percentage<= 80) {
                document.getElementById('Grade').value = "B";
            } else if (percentage<= 70) {
                document.getElementById('Grade').value = "C";
            } else if (percentage<= 60 ) {
                document.getElementById('Grade').value = "D";
            } else {
                document.getElementById('Grade').value = "E";
            }
        }
}
