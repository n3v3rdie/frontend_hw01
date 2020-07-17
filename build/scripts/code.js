let theme = "light";

function changeTheme(){
    if (theme === "light")
    {
        theme = "dark";
        document.documentElement.style.setProperty('--main-bg-color', '#262626');
        document.documentElement.style.setProperty('--main-color', '#fff');
    }else{
        theme = "light";
        document.documentElement.style.setProperty('--main-bg-color', '#fff');
        document.documentElement.style.setProperty('--main-color', '#333');
    }
}
