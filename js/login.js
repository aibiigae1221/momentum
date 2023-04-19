


// 로그인 시도
document.querySelector("#login-form").addEventListener("submit", e => {
    // 폼 전송을 막는다.
    e.preventDefault();
    
    const userId = document.querySelector("#userId").value.trim();
    const userPw = document.querySelector("#userPw").value.trim();
        
    if(userId == "" || userPw == ""){
        alert("값을 제대로 입력해주세용");
        return false;
    }
        
    const userAuthentication = {
        userId:userId,
        userPw:userPw
    };
    
    localStorage.setItem("authentication", JSON.stringify(userAuthentication));
    updateUserAuthState();   
});


// 로그인 정보 화면 렌더링
const updateUserAuthState = () => {
    const getRaw = localStorage.getItem("authentication");
    if(getRaw === null){
        // 로그인 정보가 없는 상태

        //입력칸 초기화
        document.querySelector("#userId").value = "";
        document.querySelector("#userPw").value = "";
        showLoginContainer(true);
        
    }else{
        // 로그인 정보가 있는 상태
        const userAuth = JSON.parse(getRaw);
        document.querySelector("#user-id-holder").innerText = userAuth.userId;
        showLoginContainer(false);
    }    
};

// 로그인화면을 보여줄지 로그인 완료된 화면을 보여줄지 결정함
const showLoginContainer = bool => {
    
    if(bool){
        const loginContainer = document.querySelector(".login-container");
        loginContainer.classList.remove("hide");

        const loggedInContainer = document.querySelector(".logged-in-container");
        loggedInContainer.classList.add("hide");
    }else{
        const loginContainer = document.querySelector(".login-container");
        loginContainer.classList.add("hide");

        const loggedInContainer = document.querySelector(".logged-in-container");
        loggedInContainer.classList.remove("hide");
    }
};

// 로그아웃을 시도할 경우
document.querySelector("#logout").addEventListener("click", () => {
    localStorage.clear();
    updateUserAuthState();
});