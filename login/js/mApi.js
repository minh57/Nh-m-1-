/Lưu dữ liệu đầu vào trên LocalStor/

function check_used() {
    let get_name = JSON.parse(localStorage.getItem("fullname"));
    console.log(get_name);
    if (localStorage.getItem("fullname")) {
        // window.location.replace("http://stackoverflow.com");
    }
}
check_used();

/-----------------------------------------------------------------------/

/*Khi log out ra*/
function logout() {
    localStorage.removeItem("fullname");
    localStorage.removeItem("mail");
    // window.location.replace("http://stackoverflow.com");
}

/-----------------------------------------------------------------------/

let urlApi = "https://616a37c716e7120017fa0edb.mockapi.io/api/account";

function createUser(data, callback) {
    let option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(urlApi, option)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}




/-------------------------------------------------/

async function getUser(email) {
    let option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    let urlApi2 = `https://616a37c716e7120017fa0edb.mockapi.io/api/account?email=${email}`;

    let response = await fetch(urlApi2, option);
    return await response.json();
}

function checkInfor() {
    let logBtn = document.querySelector('#btnlogin');
    logBtn.onclick = async function() {
        let email = document.querySelector('#in_email').value;
        let password = document.querySelector('#in_password').value;
        let data = await getUser(email);
        if (data.length === 0) {
            alert("Tài khoản chưa được tạo!");
        } else if (data.length === 1) {
            if (data[0].password === password) {
                localStorage.setItem("fullname", JSON.stringify(data[0].fullname));
                localStorage.setItem("email", JSON.stringify(data[0].email));
                window.location.replace("http://127.0.0.1:5502/index.html");//chuyển link trang vào đây
            } else {
                alert("Tài khoản bị nhập sai!");
            }
        }
    }
}
checkInfor();
