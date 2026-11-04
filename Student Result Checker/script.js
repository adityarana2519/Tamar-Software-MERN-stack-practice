function checkResult() {

    const name = document.getElementById("name").value;
    const marks = Number(document.getElementById("marks").value);
    const attendance = Number(document.getElementById("attendance").value);

    let result = "";

    if (name === "" || document.getElementById("marks").value === "" || document.getElementById("attendance").value === "") {
        result = "Please fill all fields";
    }
    else if (marks < 0 || marks > 100 || attendance < 0 || attendance > 100) {
        result = "Please enter valid values";
    }
    else {

        let status = marks >= 33 && attendance >= 75 ? "Pass" : "Fail";
        let grade = marks >= 80 ? "A Grade" :
            marks >= 60 ? "B Grade" :
                marks >= 33 ? "C Grade" : "No Grade";

        result = `
                    <h3>Student Name: ${name}</h3>
                    <p>Marks: ${marks}</p>
                    <p>Attendance: ${attendance}%</p>
                    <h3>Status: ${status}</h3>
                    <p>Grade: ${grade}</p>
                `;
    }

    document.getElementById("result").innerHTML = result;
}
