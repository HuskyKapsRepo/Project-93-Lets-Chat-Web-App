function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("username", user_name);
    window.location = "Lets_Chat_Room_Page.html";
}